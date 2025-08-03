import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookingService } from '../../services/bookingService';
import type { 
  BookingDetail,
  CarrierBooking,
  LinkedBooking,
  ActivityItem,
  DocumentItem
} from '../../data/mockData';

interface BookingsState {
  carrierBookings: CarrierBooking[];
  selectedBookingId: string | null;
  bookingDetails: BookingDetail | null;
  linkedBookings: LinkedBooking[];
  activities: ActivityItem[];
  documents: DocumentItem[];
  activeTab: string;
  loading: boolean;
  loadingDetails: boolean;
  error: string | null;
}

const initialState: BookingsState = {
  carrierBookings: [],
  selectedBookingId: null,
  bookingDetails: null,
  linkedBookings: [],
  activities: [],
  documents: [],
  activeTab: 'linkedBookings',
  loading: false,
  loadingDetails: false,
  error: null,
};

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setLoadingDetails: (state, action: PayloadAction<boolean>) => {
      state.loadingDetails = action.payload;
    },
    setCarrierBookings: (state, action: PayloadAction<CarrierBooking[]>) => {
      state.carrierBookings = action.payload;
    },
    setBookingDetails: (state, action: PayloadAction<BookingDetail | null>) => {
      state.bookingDetails = action.payload;
    },
    setLinkedBookings: (state, action: PayloadAction<LinkedBooking[]>) => {
      state.linkedBookings = action.payload;
    },
    setActivities: (state, action: PayloadAction<ActivityItem[]>) => {
      state.activities = action.payload;
    },
    setDocuments: (state, action: PayloadAction<DocumentItem[]>) => {
      state.documents = action.payload;
    },
    selectBooking: (state, action: PayloadAction<string | null>) => {
      state.selectedBookingId = action.payload;
      state.carrierBookings = state.carrierBookings.map(booking => ({
        ...booking,
        selected: booking.id === action.payload
      }));
    },
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
    updateBookingDetails: (state, action: PayloadAction<Partial<BookingDetail>>) => {
      if (state.bookingDetails) {
        state.bookingDetails = { ...state.bookingDetails, ...action.payload };
      }
    },
  },
});

export const { 
  setLoading,
  setError,
  setLoadingDetails,
  setCarrierBookings,
  setBookingDetails,
  setLinkedBookings,
  setActivities,
  setDocuments,
  selectBooking, 
  setActiveTab, 
  updateBookingDetails 
} = bookingsSlice.actions;

// Async thunks
export const fetchCarrierBookings = () => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));
    
    const bookings = await BookingService.getCarrierBookings();
    
    // Auto-select the first booking if there are any bookings
    let selectedBookingId = null;
    const bookingsWithSelection = bookings.map((booking, index) => {
      const isSelected = index === 0; // Select the first booking
      if (isSelected) {
        selectedBookingId = booking.id;
      }
      return {
        ...booking,
        selected: isSelected
      };
    });
    
    dispatch(setCarrierBookings(bookingsWithSelection));
    
    // If we have bookings, select the first one and fetch its details
    if (selectedBookingId) {
      dispatch(selectBooking(selectedBookingId));
      await dispatch(fetchBookingData(selectedBookingId));
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch carrier bookings';
    dispatch(setError(errorMessage));
    console.error('Failed to fetch carrier bookings:', error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchBookingData = (bookingId: string) => async (dispatch: any) => {
  try {
    dispatch(setLoadingDetails(true));
    dispatch(setError(null));
    
    // Use the service method that fetches all data
    const { details, linkedBookings, activities, documents } = await BookingService.getCompleteBookingData(bookingId);
    
    dispatch(setBookingDetails(details));
    dispatch(setLinkedBookings(linkedBookings));
    dispatch(setActivities(activities));
    dispatch(setDocuments(documents));
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : `Failed to fetch booking data for ${bookingId}`;
    dispatch(setError(errorMessage));
    console.error('Failed to fetch booking data:', error);
    
    // Clear data on error
    dispatch(setBookingDetails(null));
    dispatch(setLinkedBookings([]));
    dispatch(setActivities([]));
    dispatch(setDocuments([]));
  } finally {
    dispatch(setLoadingDetails(false));
  }
};

export const selectBookingWithData = (bookingId: string) => async (dispatch: any) => {
  dispatch(selectBooking(bookingId));
  await dispatch(fetchBookingData(bookingId));
};

// New action to update booking and refresh data
export const updateBookingAndRefresh = (bookingId: string, updates: Partial<BookingDetail>) => async (dispatch: any) => {
  try {
    dispatch(setLoadingDetails(true));
    dispatch(setError(null));
    
    const updatedBooking = await BookingService.updateBookingDetails(bookingId, updates);
    
    if (updatedBooking) {
      dispatch(setBookingDetails(updatedBooking));
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : `Failed to update booking ${bookingId}`;
    dispatch(setError(errorMessage));
    console.error('Failed to update booking:', error);
  } finally {
    dispatch(setLoadingDetails(false));
  }
};

export default bookingsSlice.reducer;