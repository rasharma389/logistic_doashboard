import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DashboardService } from '../../services/dashboardService';
import type { 
  CBRequestsByStatus,
  DaysBeforeETD,
  ExceptionItem,
  DashboardFilters
} from '../../data/dashboardData';

interface DashboardState {
  cbRequestsByStatus: CBRequestsByStatus[];
  daysBeforeETD: DaysBeforeETD[];
  allocationsByCarrier: any;
  exceptionItems: ExceptionItem[];
  filters: DashboardFilters;
  summary: {
    totalCBRequests: number;
    totalDaysBeforeETD: number;
    totalAllocations: number;
    totalExceptions: number;
  };
  loading: boolean;
  error: string | null;
  selectedExceptionFilters: string[];
  exceptionTypeFilter: string;
}

const initialState: DashboardState = {
  cbRequestsByStatus: [],
  daysBeforeETD: [],
  allocationsByCarrier: { name: 'carriers', children: [] },
  exceptionItems: [],
  filters: DashboardService.getDefaultFilters(),
  summary: {
    totalCBRequests: 0,
    totalDaysBeforeETD: 0,
    totalAllocations: 0,
    totalExceptions: 0
  },
  loading: false,
  error: null,
  selectedExceptionFilters: ['All'],
  exceptionTypeFilter: 'All'
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setCBRequestsByStatus: (state, action: PayloadAction<CBRequestsByStatus[]>) => {
      state.cbRequestsByStatus = action.payload;
    },
    setDaysBeforeETD: (state, action: PayloadAction<DaysBeforeETD[]>) => {
      state.daysBeforeETD = action.payload;
    },
    setAllocationsByCarrier: (state, action: PayloadAction<any>) => {
      state.allocationsByCarrier = action.payload;
    },
    setExceptionItems: (state, action: PayloadAction<ExceptionItem[]>) => {
      state.exceptionItems = action.payload;
    },
    setSummary: (state, action: PayloadAction<{
      totalCBRequests: number;
      totalDaysBeforeETD: number;
      totalAllocations: number;
      totalExceptions: number;
    }>) => {
      state.summary = action.payload;
    },
    setFilters: (state, action: PayloadAction<Partial<DashboardFilters>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSelectedExceptionFilters: (state, action: PayloadAction<string[]>) => {
      state.selectedExceptionFilters = action.payload;
    },
    setExceptionTypeFilter: (state, action: PayloadAction<string>) => {
      state.exceptionTypeFilter = action.payload;
    },
    resetFilters: (state) => {
      state.filters = DashboardService.getDefaultFilters();
    }
  },
});

export const { 
  setLoading,
  setError,
  setCBRequestsByStatus,
  setDaysBeforeETD,
  setAllocationsByCarrier,
  setExceptionItems,
  setSummary,
  setFilters,
  setSelectedExceptionFilters,
  setExceptionTypeFilter,
  resetFilters
} = dashboardSlice.actions;

// Async thunks
export const fetchDashboardData = (filters?: Partial<DashboardFilters>) => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));
    
    const data = await DashboardService.getAllDashboardData(filters);
    
    dispatch(setCBRequestsByStatus(data.cbRequestsByStatus));
    dispatch(setDaysBeforeETD(data.daysBeforeETD));
    dispatch(setAllocationsByCarrier(data.allocationsByCarrier));
    dispatch(setExceptionItems(data.exceptionItems));
    dispatch(setSummary(data.summary));
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch dashboard data';
    dispatch(setError(errorMessage));
    console.error('Failed to fetch dashboard data:', error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const updateFiltersAndRefresh = (newFilters: Partial<DashboardFilters>) => async (dispatch: any, getState: any) => {
  dispatch(setFilters(newFilters));
  const { filters } = getState().dashboard;
  await dispatch(fetchDashboardData(filters));
};

export default dashboardSlice.reducer;