import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { DocumentItem } from '../../data/mockData';

interface UiState {
  rightPanelCollapsed: boolean;
  activePanel: 'activity' | 'timeline' | 'comments';
  showActivityComments: boolean;
  pdfViewerVisible: boolean;
  documents: DocumentItem[];
  currentPDFIndex: number;
}

const initialState: UiState = {
  rightPanelCollapsed: false,
  activePanel: 'timeline',
  showActivityComments: false,
  pdfViewerVisible: false,
  documents: [],
  currentPDFIndex: 0,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleRightPanel: (state) => {
      state.rightPanelCollapsed = !state.rightPanelCollapsed;
    },
    setActivePanel: (state, action: PayloadAction<'activity' | 'timeline' | 'comments'>) => {
      state.activePanel = action.payload;
    },
    toggleActivityComments: (state) => {
      state.showActivityComments = !state.showActivityComments;
    },
    openPDFViewer: (state, action: PayloadAction<{ documents: DocumentItem[]; initialIndex?: number }>) => {
      state.pdfViewerVisible = true;
      state.documents = action.payload.documents;
      state.currentPDFIndex = action.payload.initialIndex || 0;
    },
    closePDFViewer: (state) => {
      state.pdfViewerVisible = false;
      state.documents = [];
      state.currentPDFIndex = 0;
    },
    setCurrentPDFIndex: (state, action: PayloadAction<number>) => {
      state.currentPDFIndex = action.payload;
    },
  },
});

export const { 
  toggleRightPanel, 
  setActivePanel, 
  toggleActivityComments,
  openPDFViewer,
  closePDFViewer,
  setCurrentPDFIndex
} = uiSlice.actions;
export default uiSlice.reducer;