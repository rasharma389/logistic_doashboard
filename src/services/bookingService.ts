import { BookingAPI } from './api';
import type { 
  CarrierBooking,
  BookingDetail,
  LinkedBooking,
  ActivityItem,
  DocumentItem
} from '../data/mockData';

/**
 * Service layer for booking operations
 * This layer can add business logic, caching, error handling, etc.
 */
export class BookingService {
  /**
   * Get all carrier bookings with error handling
   */
  static async getCarrierBookings(): Promise<CarrierBooking[]> {
    try {
      return await BookingAPI.getCarrierBookings();
    } catch (error) {
      console.error('BookingService: Failed to fetch carrier bookings', error);
      throw new Error('Unable to load carrier bookings. Please try again.');
    }
  }

  /**
   * Get booking details with validation
   */
  static async getBookingDetails(bookingId: string): Promise<BookingDetail | null> {
    if (!bookingId?.trim()) {
      return null;
    }

    try {
      return await BookingAPI.getBookingDetails(bookingId);
    } catch (error) {
      console.error(`BookingService: Failed to fetch booking details for ${bookingId}`, error);
      return null;
    }
  }

  /**
   * Get linked bookings with validation
   */
  static async getLinkedBookings(bookingId: string): Promise<LinkedBooking[]> {
    if (!bookingId?.trim()) {
      throw new Error('Booking ID is required');
    }

    try {
      return await BookingAPI.getLinkedBookings(bookingId);
    } catch (error) {
      console.error(`BookingService: Failed to fetch linked bookings for ${bookingId}`, error);
      // Return empty array instead of throwing for linked bookings
      return [];
    }
  }

  /**
   * Get activities with validation
   */
  static async getActivities(bookingId: string): Promise<ActivityItem[]> {
    if (!bookingId?.trim()) {
      throw new Error('Booking ID is required');
    }

    try {
      return await BookingAPI.getActivities(bookingId);
    } catch (error) {
      console.error(`BookingService: Failed to fetch activities for ${bookingId}`, error);
      // Return empty array instead of throwing for activities
      return [];
    }
  }

  /**
   * Get documents with validation
   */
  static async getDocuments(bookingId: string): Promise<DocumentItem[]> {
    if (!bookingId?.trim()) {
      throw new Error('Booking ID is required');
    }

    try {
      return await BookingAPI.getDocuments(bookingId);
    } catch (error) {
      console.error(`BookingService: Failed to fetch documents for ${bookingId}`, error);
      // Return empty array instead of throwing for documents
      return [];
    }
  }

  /**
   * Update booking details with validation
   */
  static async updateBookingDetails(
    bookingId: string, 
    updates: Partial<BookingDetail>
  ): Promise<BookingDetail | null> {
    if (!bookingId?.trim()) {
      throw new Error('Booking ID is required');
    }

    if (!updates || Object.keys(updates).length === 0) {
      throw new Error('Updates are required');
    }

    try {
      return await BookingAPI.updateBookingDetails(bookingId, updates);
    } catch (error) {
      console.error(`BookingService: Failed to update booking ${bookingId}`, error);
      throw new Error(`Unable to update booking ${bookingId}. Please try again.`);
    }
  }

  /**
   * Search bookings with validation
   */
  static async searchBookings(query: {
    customer?: string;
    carrier?: string;
    status?: string;
    region?: string;
    dateFrom?: string;
    dateTo?: string;
  }): Promise<CarrierBooking[]> {
    try {
      return await BookingAPI.searchBookings(query);
    } catch (error) {
      console.error('BookingService: Failed to search bookings', error);
      throw new Error('Unable to search bookings. Please try again.');
    }
  }

  /**
   * Get booking statistics
   */
  static async getBookingStats() {
    try {
      return await BookingAPI.getBookingStats();
    } catch (error) {
      console.error('BookingService: Failed to fetch booking statistics', error);
      throw new Error('Unable to load booking statistics. Please try again.');
    }
  }

  /**
   * Get complete booking data (details + linked bookings + activities + documents)
   */
  static async getCompleteBookingData(bookingId: string): Promise<{
    details: BookingDetail | null;
    linkedBookings: LinkedBooking[];
    activities: ActivityItem[];
    documents: DocumentItem[];
  }> {
    if (!bookingId?.trim()) {
      throw new Error('Booking ID is required');
    }

    try {
      // Fetch all data in parallel for better performance
      const [details, linkedBookings, activities, documents] = await Promise.allSettled([
        this.getBookingDetails(bookingId),
        this.getLinkedBookings(bookingId),
        this.getActivities(bookingId),
        this.getDocuments(bookingId)
      ]);

      return {
        details: details.status === 'fulfilled' ? details.value : null,
        linkedBookings: linkedBookings.status === 'fulfilled' ? linkedBookings.value : [],
        activities: activities.status === 'fulfilled' ? activities.value : [],
        documents: documents.status === 'fulfilled' ? documents.value : []
      };
    } catch (error) {
      console.error(`BookingService: Failed to fetch complete booking data for ${bookingId}`, error);
      throw new Error(`Unable to load complete booking data for ${bookingId}. Please try again.`);
    }
  }
}