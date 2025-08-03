import type { EmailMessage, EmailFolder, EmailSearchFilters, EmailPagination } from '../types/email';
import { emailMessages, emailFolders } from '../data/emailData';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class EmailService {
  /**
   * Get all email folders
   */
  static async getFolders(): Promise<EmailFolder[]> {
    await delay(200);
    return [...emailFolders];
  }

  /**
   * Get emails with pagination and filtering
   */
  static async getEmails(
    filters: EmailSearchFilters = {},
    pagination: { page: number; pageSize: number } = { page: 1, pageSize: 20 }
  ): Promise<{ emails: EmailMessage[]; pagination: EmailPagination }> {
    await delay(300);

    let filteredEmails = [...emailMessages];

    // Apply filters
    if (filters.query) {
      const query = filters.query.toLowerCase();
      filteredEmails = filteredEmails.filter(email =>
        email.subject.toLowerCase().includes(query) ||
        email.from.toLowerCase().includes(query) ||
        email.body.toLowerCase().includes(query)
      );
    }

    if (filters.folder) {
      filteredEmails = filteredEmails.filter(email => email.folder === filters.folder);
    }

    if (filters.isRead !== undefined) {
      filteredEmails = filteredEmails.filter(email => email.isRead === filters.isRead);
    }

    if (filters.isStarred !== undefined) {
      filteredEmails = filteredEmails.filter(email => email.isStarred === filters.isStarred);
    }

    if (filters.sender) {
      filteredEmails = filteredEmails.filter(email =>
        email.from.toLowerCase().includes(filters.sender!.toLowerCase())
      );
    }

    if (filters.dateFrom) {
      filteredEmails = filteredEmails.filter(email =>
        new Date(email.date) >= new Date(filters.dateFrom!)
      );
    }

    if (filters.dateTo) {
      filteredEmails = filteredEmails.filter(email =>
        new Date(email.date) <= new Date(filters.dateTo!)
      );
    }

    // Sort by date (newest first)
    filteredEmails.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Apply pagination
    const total = filteredEmails.length;
    const totalPages = Math.ceil(total / pagination.pageSize);
    const startIndex = (pagination.page - 1) * pagination.pageSize;
    const endIndex = startIndex + pagination.pageSize;
    const paginatedEmails = filteredEmails.slice(startIndex, endIndex);

    return {
      emails: paginatedEmails,
      pagination: {
        page: pagination.page,
        pageSize: pagination.pageSize,
        total,
        totalPages
      }
    };
  }

  /**
   * Get a single email by ID
   */
  static async getEmailById(id: string): Promise<EmailMessage | null> {
    await delay(150);
    const email = emailMessages.find(email => email.id === id);
    return email ? { ...email } : null;
  }

  /**
   * Mark email as read/unread
   */
  static async markAsRead(id: string, isRead: boolean = true): Promise<boolean> {
    await delay(100);
    const emailIndex = emailMessages.findIndex(email => email.id === id);
    if (emailIndex !== -1) {
      emailMessages[emailIndex] = { ...emailMessages[emailIndex], isRead };
      return true;
    }
    return false;
  }

  /**
   * Star/unstar email
   */
  static async toggleStar(id: string): Promise<boolean> {
    await delay(100);
    const emailIndex = emailMessages.findIndex(email => email.id === id);
    if (emailIndex !== -1) {
      const email = emailMessages[emailIndex];
      const newStarred = !email.isStarred;
      emailMessages[emailIndex] = { ...email, isStarred: newStarred };
      return newStarred;
    }
    return false;
  }

  /**
   * Delete email (move to trash)
   */
  static async deleteEmail(id: string): Promise<boolean> {
    await delay(200);
    const emailIndex = emailMessages.findIndex(email => email.id === id);
    if (emailIndex !== -1) {
      emailMessages[emailIndex] = { ...emailMessages[emailIndex], folder: 'trash' };
      return true;
    }
    return false;
  }

  /**
   * Parse EML file content
   */
  static parseEMLContent(emlContent: string): Partial<EmailMessage> {
    const lines = emlContent.split('\n');
    const email: Partial<EmailMessage> = {
      attachments: []
    };

    let currentSection = 'headers';
    let bodyLines: string[] = [];
    let isMultipart = false;
    let boundary = '';
    let currentPart: any = null;
    let attachments: any[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (currentSection === 'headers') {
        if (line.trim() === '') {
          currentSection = 'body';
          continue;
        }

        // Parse headers
        if (line.startsWith('From:')) {
          email.from = line.substring(5).trim();
        } else if (line.startsWith('To:')) {
          email.to = line.substring(3).trim().split(',').map(s => s.trim());
        } else if (line.startsWith('Cc:')) {
          email.cc = line.substring(3).trim().split(',').map(s => s.trim());
        } else if (line.startsWith('Subject:')) {
          email.subject = line.substring(8).trim();
        } else if (line.startsWith('Date:')) {
          email.date = new Date(line.substring(5).trim()).toISOString();
        } else if (line.toLowerCase().includes('content-type:') && line.toLowerCase().includes('multipart')) {
          isMultipart = true;
          const boundaryMatch = line.match(/boundary[=:]\s*["']?([^"'\s;]+)["']?/i);
          if (boundaryMatch) {
            boundary = boundaryMatch[1];
          }
        } else if (line.toLowerCase().startsWith('x-priority:')) {
          const priority = line.substring(11).trim();
          if (priority === '1' || priority === '2') {
            email.priority = 'high';
          } else if (priority === '4' || priority === '5') {
            email.priority = 'low';
          }
        }
      } else if (currentSection === 'body') {
        if (isMultipart && boundary) {
          if (line.includes(`--${boundary}`)) {
            // Save previous part if it exists
            if (currentPart) {
              this.processPart(currentPart, bodyLines, attachments);
            }
            
            // Start new part
            currentPart = {
              headers: {},
              content: []
            };
            bodyLines = [];
            
            // Check if this is the end boundary
            if (line.includes(`--${boundary}--`)) {
              break;
            }
            continue;
          }
          
          if (currentPart) {
            // Check if we're still in headers for this part
            if (line.trim() === '' && Object.keys(currentPart.headers).length > 0) {
              // Switch to content
              currentPart.inContent = true;
            } else if (!currentPart.inContent) {
              // Parse part headers
              const colonIndex = line.indexOf(':');
              if (colonIndex > 0) {
                const headerName = line.substring(0, colonIndex).toLowerCase().trim();
                const headerValue = line.substring(colonIndex + 1).trim();
                currentPart.headers[headerName] = headerValue;
              }
            } else {
              // Part content
              currentPart.content.push(line);
            }
          }
        } else {
          bodyLines.push(line);
        }
      }
    }

    // Process the last part if multipart
    if (isMultipart && currentPart) {
      this.processPart(currentPart, bodyLines, attachments);
    }

    email.body = bodyLines.join('\n').trim();
    email.attachments = attachments;
    email.isRead = false;
    email.isStarred = false;
    email.priority = email.priority || 'normal';
    email.folder = 'inbox';

    return email;
  }

  /**
   * Process a MIME part (body or attachment)
   */
  private static processPart(part: any, bodyLines: string[], attachments: any[]) {
    const contentType = part.headers['content-type'] || '';
    const contentDisposition = part.headers['content-disposition'] || '';
    const contentTransferEncoding = part.headers['content-transfer-encoding'] || '';
    
    // Check if this is an attachment
    if (contentDisposition.toLowerCase().includes('attachment') || 
        contentDisposition.toLowerCase().includes('filename')) {
      
      // Extract filename
      let filename = 'unknown';
      const filenameMatch = contentDisposition.match(/filename[=:]\s*["']?([^"'\s;]+)["']?/i);
      if (filenameMatch) {
        filename = filenameMatch[1];
      }
      
      // Determine file type
      let fileType = 'application/octet-stream';
      if (contentType) {
        const typeMatch = contentType.match(/^([^;]+)/);
        if (typeMatch) {
          fileType = typeMatch[1].trim();
        }
      }
      
      // Estimate size (rough approximation)
      let size = part.content.join('').length;
      if (contentTransferEncoding.toLowerCase() === 'base64') {
        size = Math.floor(size * 0.75); // Base64 is ~33% larger than original
      }
      
      attachments.push({
        id: `att-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: filename,
        size: size,
        type: fileType,
        content: part.content.join('\n'),
        encoding: contentTransferEncoding
      });
    } else if (contentType.toLowerCase().includes('text/plain') || 
               contentType.toLowerCase().includes('text/html')) {
      // This is body content
      bodyLines.push(...part.content);
    }
  }
  /**
   * Upload and parse EML file
   */
  static async uploadEMLFile(file: File): Promise<EmailMessage> {
    await delay(500);
    
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          const content = e.target?.result as string;
          const parsedEmail = this.parseEMLContent(content);
          
          const newEmail: EmailMessage = {
            id: `email-${Date.now()}`,
            from: parsedEmail.from || 'unknown@example.com',
            to: parsedEmail.to || ['unknown@example.com'],
            subject: parsedEmail.subject || 'No Subject',
            date: parsedEmail.date || new Date().toISOString(),
            body: parsedEmail.body || '',
            isRead: false,
            isStarred: false,
            priority: 'normal',
            size: content.length,
            folder: 'inbox',
            attachments: []
          };

          // Add to email list
          emailMessages.unshift(newEmail);
          resolve(newEmail);
        } catch (error) {
          reject(new Error('Failed to parse EML file'));
        }
      };

      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };

      reader.readAsText(file);
    });
  }
}