import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  rightPanelCollapsed: boolean;
  activePanel: 'activity' | 'timeline' | 'comments';
  showActivityComments: boolean;
}

const initialState: UiState = {
  rightPanelCollapsed: false,
  activePanel: 'timeline',
  showActivityComments: false,
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
  },
});

export const { toggleRightPanel, setActivePanel, toggleActivityComments } = uiSlice.actions;
export default uiSlice.reducer;