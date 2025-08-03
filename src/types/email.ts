export interface EmailMessage {
  id: string;
  from: string;
  to: string[];
  cc?: string[];
  bcc?: string[];
  subject: string;
  date: string;
  body: string;
  htmlBody?: string;
  attachments?: EmailAttachment[];
  isRead: boolean;
  isStarred: boolean;
  priority: 'high' | 'normal' | 'low';
  size: number;
  folder: string;
}

export interface EmailAttachment {
  id: string;
  name: string;
  size: number;
  type: string;
  url?: string;
}

export interface EmailFolder {
  id: string;
  name: string;
  count: number;
  unreadCount: number;
}

export interface EmailSearchFilters {
  query?: string;
  folder?: string;
  isRead?: boolean;
  isStarred?: boolean;
  dateFrom?: string;
  dateTo?: string;
  sender?: string;
}

export interface EmailPagination {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}