import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmailService } from '../../services/emailService';
import type { 
  EmailMessage, 
  EmailFolder, 
  EmailSearchFilters, 
  EmailPagination 
} from '../../types/email';

interface EmailState {
  emails: EmailMessage[];
  folders: EmailFolder[];
  selectedEmail: EmailMessage | null;
  selectedFolder: string;
  searchQuery: string;
  pagination: EmailPagination;
  filters: EmailSearchFilters;
  loading: boolean;
  emailLoading: boolean;
  error: string | null;
}

const initialState: EmailState = {
  emails: [],
  folders: [],
  selectedEmail: null,
  selectedFolder: 'inbox',
  searchQuery: '',
  pagination: {
    page: 1,
    pageSize: 20,
    total: 0,
    totalPages: 0
  },
  filters: {},
  loading: false,
  emailLoading: false,
  error: null,
};

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setEmailLoading: (state, action: PayloadAction<boolean>) => {
      state.emailLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setEmails: (state, action: PayloadAction<EmailMessage[]>) => {
      state.emails = action.payload;
    },
    setFolders: (state, action: PayloadAction<EmailFolder[]>) => {
      state.folders = action.payload;
    },
    setSelectedEmail: (state, action: PayloadAction<EmailMessage | null>) => {
      state.selectedEmail = action.payload;
    },
    setSelectedFolder: (state, action: PayloadAction<string>) => {
      state.selectedFolder = action.payload;
      state.selectedEmail = null; // Clear selected email when changing folders
      state.pagination = { ...state.pagination, page: 1 }; // Reset to first page
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.pagination = { ...state.pagination, page: 1 }; // Reset to first page
    },
    setPagination: (state, action: PayloadAction<EmailPagination>) => {
      state.pagination = action.payload;
    },
    setFilters: (state, action: PayloadAction<Partial<EmailSearchFilters>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    updateEmailInList: (state, action: PayloadAction<{ id: string; updates: Partial<EmailMessage> }>) => {
      const { id, updates } = action.payload;
      const emailIndex = state.emails.findIndex(email => email.id === id);
      if (emailIndex !== -1) {
        state.emails[emailIndex] = { ...state.emails[emailIndex], ...updates };
      }
      // Also update selected email if it's the same one
      if (state.selectedEmail?.id === id) {
        state.selectedEmail = { ...state.selectedEmail, ...updates };
      }
    },
    removeEmailFromList: (state, action: PayloadAction<string>) => {
      const emailId = action.payload;
      state.emails = state.emails.filter(email => email.id !== emailId);
      // Clear selected email if it was the deleted one
      if (state.selectedEmail?.id === emailId) {
        state.selectedEmail = null;
      }
    },
    addEmailToList: (state, action: PayloadAction<EmailMessage>) => {
      state.emails.unshift(action.payload); // Add to beginning of list
    },
    clearError: (state) => {
      state.error = null;
    },
    resetEmailState: (state) => {
      return { ...initialState, folders: state.folders }; // Keep folders loaded
    }
  },
});

export const { 
  setLoading,
  setEmailLoading,
  setError,
  setEmails,
  setFolders,
  setSelectedEmail,
  setSelectedFolder,
  setSearchQuery,
  setPagination,
  setFilters,
  updateEmailInList,
  removeEmailFromList,
  addEmailToList,
  clearError,
  resetEmailState
} = emailSlice.actions;

// Async thunks
export const fetchFolders = () => async (dispatch: any) => {
  try {
    dispatch(setError(null));
    const folders = await EmailService.getFolders();
    dispatch(setFolders(folders));
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch folders';
    dispatch(setError(errorMessage));
    console.error('Failed to fetch folders:', error);
  }
};

export const fetchEmails = () => async (dispatch: any, getState: any) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));
    
    const { email } = getState();
    const filters: EmailSearchFilters = {
      folder: email.selectedFolder,
      query: email.searchQuery || undefined,
      ...email.filters
    };

    const result = await EmailService.getEmails(filters, {
      page: email.pagination.page,
      pageSize: email.pagination.pageSize
    });

    dispatch(setEmails(result.emails));
    dispatch(setPagination(result.pagination));
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch emails';
    dispatch(setError(errorMessage));
    console.error('Failed to fetch emails:', error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const selectEmail = (emailId: string) => async (dispatch: any, getState: any) => {
  try {
    dispatch(setEmailLoading(true));
    dispatch(setError(null));
    
    const { email } = getState();
    const emailInList = email.emails.find((e: EmailMessage) => e.id === emailId);
    
    if (emailInList) {
      // Mark as read if not already read
      if (!emailInList.isRead) {
        await EmailService.markAsRead(emailId, true);
        dispatch(updateEmailInList({ id: emailId, updates: { isRead: true } }));
      }
      
      // Fetch full email content
      const fullEmail = await EmailService.getEmailById(emailId);
      dispatch(setSelectedEmail(fullEmail));
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to load email content';
    dispatch(setError(errorMessage));
    console.error('Failed to select email:', error);
  } finally {
    dispatch(setEmailLoading(false));
  }
};

export const toggleEmailStar = (emailId: string) => async (dispatch: any) => {
  try {
    const newStarred = await EmailService.toggleStar(emailId);
    dispatch(updateEmailInList({ id: emailId, updates: { isStarred: newStarred } }));
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to update star status';
    dispatch(setError(errorMessage));
    console.error('Failed to toggle star:', error);
  }
};

export const deleteEmail = (emailId: string) => async (dispatch: any) => {
  try {
    await EmailService.deleteEmail(emailId);
    dispatch(removeEmailFromList(emailId));
    // Refresh the email list to update counts
    dispatch(fetchEmails());
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to delete email';
    dispatch(setError(errorMessage));
    console.error('Failed to delete email:', error);
  }
};

export const uploadEMLFile = (file: File) => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));
    
    const newEmail = await EmailService.uploadEMLFile(file);
    dispatch(addEmailToList(newEmail));
    
    // Refresh the email list to get updated pagination
    dispatch(fetchEmails());
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to upload EML file';
    dispatch(setError(errorMessage));
    console.error('Failed to upload EML file:', error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const searchEmails = (query: string) => async (dispatch: any) => {
  dispatch(setSearchQuery(query));
  dispatch(fetchEmails());
};

export const changeFolder = (folderId: string) => async (dispatch: any) => {
  dispatch(setSelectedFolder(folderId));
  dispatch(fetchEmails());
};

export const changePage = (page: number) => async (dispatch: any, getState: any) => {
  const { email } = getState();
  dispatch(setPagination({ ...email.pagination, page }));
  dispatch(fetchEmails());
};

export default emailSlice.reducer;