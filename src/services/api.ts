import { 
  carrierBookingsList, 
  bookingDetailsData, 
  linkedBookingsData, 
  activitiesData,
  documentsData,
  type CarrierBooking,
  type BookingDetail,
  type LinkedBooking,
  type ActivityItem,
  type DocumentItem
} from '../data/mockData';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simulate network errors occasionally
const shouldSimulateError = () => Math.random() < 0.05; // 5% chance of error

export class BookingAPI {
  /**
   * Fetch all carrier bookings
   */
  static async getCarrierBookings(): Promise<CarrierBooking[]> {
    await delay(300 + Math.random() * 200); // 300-500ms delay
    
    if (shouldSimulateError()) {
      throw new Error('Failed to fetch carrier bookings');
    }
    
    return [...carrierBookingsList]; // Return a copy to prevent mutations
  }

  /**
   * Fetch booking details by ID
   */
  static async getBookingDetails(bookingId: string): Promise<BookingDetail | null> {
    await delay(200 + Math.random() * 150); // 200-350ms delay
    
    if (shouldSimulateError()) {
      throw new Error(`Failed to fetch booking details for ${bookingId}`);
    }
    
    const booking = bookingDetailsData[bookingId];
    return booking ? { ...booking } : null; // Return a copy
  }

  /**
   * Fetch linked bookings for a specific booking
   */
  static async getLinkedBookings(bookingId: string): Promise<LinkedBooking[]> {
    await delay(150 + Math.random() * 100); // 150-250ms delay
    
    if (shouldSimulateError()) {
      throw new Error(`Failed to fetch linked bookings for ${bookingId}`);
    }
    
    const linkedBookings = linkedBookingsData[bookingId] || [];
    return linkedBookings.map(booking => ({ ...booking })); // Return copies
  }

  /**
   * Fetch activities for a specific booking
   */
  static async getActivities(bookingId: string): Promise<ActivityItem[]> {
    await delay(100 + Math.random() * 50); // 100-150ms delay
    
    if (shouldSimulateError()) {
      throw new Error(`Failed to fetch activities for ${bookingId}`);
    }
    
    const activities = activitiesData[bookingId] || [];
    return activities.map(activity => ({ ...activity })); // Return copies
  }

  /**
   * Fetch documents for a specific booking
   */
  static async getDocuments(bookingId: string): Promise<DocumentItem[]> {
    await delay(150 + Math.random() * 100); // 150-250ms delay
    
    if (shouldSimulateError()) {
      throw new Error(`Failed to fetch documents for ${bookingId}`);
    }
    
    const documents = documentsData[bookingId] || [];
    return documents.map(document => ({ ...document })); // Return copies
  }

  /**
   * Update booking details
   */
  static async updateBookingDetails(
    bookingId: string, 
    updates: Partial<BookingDetail>
  ): Promise<BookingDetail | null> {
    await delay(500 + Math.random() * 300); // 500-800ms delay
    
    if (shouldSimulateError()) {
      throw new Error(`Failed to update booking ${bookingId}`);
    }
    
    const booking = bookingDetailsData[bookingId];
    if (booking) {
      // Update the mock data
      Object.assign(booking, updates);
      return { ...booking }; // Return a copy
    }
    return null;
  }

  /**
   * Search bookings by various criteria
   */
  static async searchBookings(query: {
    customer?: string;
    carrier?: string;
    status?: string;
    region?: string;
    dateFrom?: string;
    dateTo?: string;
  }): Promise<CarrierBooking[]> {
    await delay(400 + Math.random() * 200); // 400-600ms delay
    
    if (shouldSimulateError()) {
      throw new Error('Failed to search bookings');
    }
    
    let filteredBookings = [...carrierBookingsList];
    
    // Apply filters based on query parameters
    if (query.customer) {
      filteredBookings = filteredBookings.filter(booking => {
        const details = bookingDetailsData[booking.id];
        return details?.customer.toLowerCase().includes(query.customer!.toLowerCase());
      });
    }
    
    if (query.carrier) {
      filteredBookings = filteredBookings.filter(booking => {
        const details = bookingDetailsData[booking.id];
        return details?.carrier.toLowerCase().includes(query.carrier!.toLowerCase());
      });
    }
    
    if (query.status) {
      filteredBookings = filteredBookings.filter(booking => {
        const details = bookingDetailsData[booking.id];
        return details?.status.toLowerCase().includes(query.status!.toLowerCase());
      });
    }
    
    if (query.region) {
      filteredBookings = filteredBookings.filter(booking => {
        const details = bookingDetailsData[booking.id];
        return details?.region.toLowerCase().includes(query.region!.toLowerCase());
      });
    }
    
    return filteredBookings;
  }

  /**
   * Get booking statistics
   */
  static async getBookingStats(): Promise<{
    total: number;
    byStatus: Record<string, number>;
    byCarrier: Record<string, number>;
    byRegion: Record<string, number>;
  }> {
    await delay(250 + Math.random() * 100); // 250-350ms delay
    
    if (shouldSimulateError()) {
      throw new Error('Failed to fetch booking statistics');
    }
    
    const stats = {
      total: carrierBookingsList.length,
      byStatus: {} as Record<string, number>,
      byCarrier: {} as Record<string, number>,
      byRegion: {} as Record<string, number>
    };
    
    // Calculate statistics
    carrierBookingsList.forEach(booking => {
      const details = bookingDetailsData[booking.id];
      if (details) {
        // Count by status
        stats.byStatus[details.status] = (stats.byStatus[details.status] || 0) + 1;
        
        // Count by carrier
        stats.byCarrier[details.carrier] = (stats.byCarrier[details.carrier] || 0) + 1;
        
        // Count by region
        stats.byRegion[details.region] = (stats.byRegion[details.region] || 0) + 1;
      }
    });
    
    return stats;
  }
}