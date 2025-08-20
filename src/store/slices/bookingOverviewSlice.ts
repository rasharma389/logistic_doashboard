import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookingOverviewService } from '../../services/bookingOverviewService';
import type { ShipperBooking, BookingOverviewFilters, BookingOverviewState } from '../../types/bookingOverview';

const initialState: BookingOverviewState = {
  bookings: [],
  totalItems: 0,
  currentPage: 1,
  pageSize: 20,
  totalPages: 0,
  filters: {
    Trade: 'All',
    'Origin region': 'All',
    'Destination region': 'All',
    'Origin country': 'All',
    district: 'All',
    'req ETD wk': 'All',
    'Cust. Code': 'All',
    'Carrier (Std)': 'All',
    'Booking Status': 'All',
    'Exception?': 'All',
    Region: 'All',
    'Bkg Type': 'All'
  },
  searchQuery: '',
  selectedBookings: [],
  loading: false,
  error: null,
};

const bookingOverviewSlice = createSlice({
  name: 'bookingOverview',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setBookings: (state, action: PayloadAction<{
      bookings: ShipperBooking[];
      totalItems: number;
      totalPages: number;
      currentPage: number;
    }>) => {
      state.bookings = action.payload.bookings;
      state.totalItems = action.payload.totalItems;
      state.totalPages = action.payload.totalPages;
      state.currentPage = action.payload.currentPage;
    },
    setFilters: (state, action: PayloadAction<Partial<BookingOverviewFilters>>) => {
      state.filters = { ...state.filters, ...action.payload };
      state.currentPage = 1; // Reset to first page when filters change
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.currentPage = 1; // Reset to first page when search changes
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
      state.currentPage = 1; // Reset to first page when page size changes
    },
    toggleBookingSelection: (state, action: PayloadAction<string>) => {
      const bookingId = action.payload;
      const index = state.selectedBookings.indexOf(bookingId);
      if (index > -1) {
        state.selectedBookings.splice(index, 1);
      } else {
        state.selectedBookings.push(bookingId);
      }
    },
    selectAllBookings: (state) => {
      state.selectedBookings = state.bookings.map(booking => booking.id);
    },
    clearBookingSelection: (state) => {
      state.selectedBookings = [];
    },
    clearError: (state) => {
      state.error = null;
    }
  },
});

export const {
  setLoading,
  setError,
  setBookings,
  setFilters,
  setSearchQuery,
  setCurrentPage,
  setPageSize,
  toggleBookingSelection,
  selectAllBookings,
  clearBookingSelection,
  clearError
} = bookingOverviewSlice.actions;

// Async thunks
export const fetchBookings = () => async (dispatch: any, getState: any) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));
    
    const { bookingOverview } = getState();
    const result = await BookingOverviewService.getShipperBookings(
      bookingOverview.currentPage,
      bookingOverview.pageSize,
      bookingOverview.filters,
      bookingOverview.searchQuery
    );
    
    dispatch(setBookings(result));
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch bookings';
    dispatch(setError(errorMessage));
    console.error('Failed to fetch bookings:', error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const updateFiltersAndRefresh = (newFilters: Partial<BookingOverviewFilters>) => async (dispatch: any) => {
  dispatch(setFilters(newFilters));
  dispatch(fetchBookings());
};

export const updateSearchAndRefresh = (query: string) => async (dispatch: any) => {
  dispatch(setSearchQuery(query));
  dispatch(fetchBookings());
};

export const changePageAndRefresh = (page: number) => async (dispatch: any) => {
  dispatch(setCurrentPage(page));
  dispatch(fetchBookings());
};

export const changePageSizeAndRefresh = (pageSize: number) => async (dispatch: any) => {
  dispatch(setPageSize(pageSize));
  dispatch(fetchBookings());
};

// Thunk to share filtered data with carrier bookings page
export const shareFilteredDataWithCarrierBookings = () => async (dispatch: any, getState: any) => {
  try {
    console.log('Sharing filtered data with carrier bookings...');
    const { bookingOverview } = getState();
    const { bookings, filters, searchQuery } = bookingOverview;
    
    console.log('Current state:', {
      bookingsCount: bookings.length,
      hasFilters: Object.values(filters).some(filter => filter !== 'All'),
      hasSearch: !!searchQuery
    });
    
    // Get the current filtered data
    let filteredData = bookings;
    
    // If we have filters applied, we need to re-apply them to get the complete filtered dataset
    if (Object.values(filters).some(filter => filter !== 'All') || searchQuery) {
      console.log('Re-applying filters to get complete dataset...');
      const result = await BookingOverviewService.getShipperBookings(
        1, // Start from first page
        1000, // Get a large number to capture all filtered results
        filters,
        searchQuery
      );
      filteredData = result.bookings;
      console.log('Filtered data count:', filteredData.length);
    }
    
    // Import the mapping function
    const { mapShipperBookingToCarrierBooking } = await import('../../utils/dataMapping');
    
    // Map ShipperBooking data to CarrierBooking format
    const mappedCarrierBookings = mapShipperBookingToCarrierBooking(filteredData);
    
    console.log('Mapped carrier bookings:', {
      originalCount: filteredData.length,
      mappedCount: mappedCarrierBookings.length,
      firstMapped: mappedCarrierBookings[0]
    });
    
    // Dispatch to the bookings slice to update filteredBookingsFromOverview
    dispatch({ type: 'bookings/setFilteredBookingsFromOverview', payload: mappedCarrierBookings });
    
    console.log('Successfully shared filtered data');
    
  } catch (error) {
    console.error('Failed to share filtered data:', error);
  }
};

export default bookingOverviewSlice.reducer;