import { shipperBookingsData } from '../data/bookingOverviewData';
import type { ShipperBooking, BookingOverviewFilters } from '../types/bookingOverview';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class BookingOverviewService {
  /**
   * Get shipper bookings with pagination and filtering
   */
  static async getShipperBookings(
    page: number = 1,
    pageSize: number = 20,
    filters: Partial<BookingOverviewFilters> = {},
    searchQuery: string = ''
  ): Promise<{
    bookings: ShipperBooking[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
  }> {
    // Reduced delay for better performance
    await delay(50);

    let filteredBookings = [...shipperBookingsData];

    // Optimized search filter - early return if no query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      
      // Pre-compile search patterns for better performance
      const searchPatterns = [
        (booking: ShipperBooking) => `CB-${booking['TMS #'] || ''}`.toLowerCase(),
        (booking: ShipperBooking) => (booking['TMS #'] || '').toLowerCase(),
        (booking: ShipperBooking) => (booking['Bkg Party #'] || '').toLowerCase(),
        (booking: ShipperBooking) => (booking['Cust. Code'] || '').toLowerCase(),
        (booking: ShipperBooking) => (booking['Contract #'] || '').toLowerCase(),
        (booking: ShipperBooking) => (booking['BR:1st Vessel'] || '').toLowerCase(),
        (booking: ShipperBooking) => (booking['BR:1st Voyage #'] || '').toLowerCase(),
      ];
      
      filteredBookings = filteredBookings.filter(booking => 
        searchPatterns.some(pattern => pattern(booking).includes(query))
      );
    }

    // Apply filters with correct field names
    if (filters.Trade && filters.Trade !== 'All') {
      const tradeValues = filters.Trade.split(',').filter(v => v.trim() !== '');
      if (tradeValues.length > 0) {
        filteredBookings = filteredBookings.filter(booking =>
          tradeValues.includes(booking.Trade)
        );
      }
    }

    if (filters['Origin region'] && filters['Origin region'] !== 'All') {
      const originRegionValues = filters['Origin region'].split(',').filter(v => v.trim() !== '');
      if (originRegionValues.length > 0) {
        filteredBookings = filteredBookings.filter(booking =>
          originRegionValues.includes(booking['Origin region'])
        );
      }
    }

    if (filters['Destination region'] && filters['Destination region'] !== 'All') {
      const destRegionValues = filters['Destination region'].split(',').filter(v => v.trim() !== '');
      if (destRegionValues.length > 0) {
        filteredBookings = filteredBookings.filter(booking =>
          destRegionValues.includes(booking['Destination region'])
        );
      }
    }

    if (filters['Origin country'] && filters['Origin country'] !== 'All') {
      const originCountryValues = filters['Origin country'].split(',').filter(v => v.trim() !== '');
      if (originCountryValues.length > 0) {
        filteredBookings = filteredBookings.filter(booking =>
          originCountryValues.includes(booking['Origin country'])
        );
      }
    }

    if (filters.district && filters.district !== 'All') {
      const districtValues = filters.district.split(',').filter(v => v.trim() !== '');
      if (districtValues.length > 0) {
        filteredBookings = filteredBookings.filter(booking =>
          districtValues.includes(booking.district)
        );
      }
    }

    if (filters['req ETD wk'] && filters['req ETD wk'] !== 'All') {
      const etdWkValues = filters['req ETD wk'].split(',').filter(v => v.trim() !== '');
      if (etdWkValues.length > 0) {
        filteredBookings = filteredBookings.filter(booking =>
          etdWkValues.includes(booking['req ETD wk'])
        );
      }
    }

    if (filters['Cust. Code'] && filters['Cust. Code'] !== 'All') {
      const custCodeValues = filters['Cust. Code'].split(',').filter(v => v.trim() !== '');
      if (custCodeValues.length > 0) {
        filteredBookings = filteredBookings.filter(booking =>
          custCodeValues.includes(booking['Cust. Code'])
        );
      }
    }

    if (filters['Carrier (Std)'] && filters['Carrier (Std)'] !== 'All') {
      const carrierValues = filters['Carrier (Std)'].split(',').filter(v => v.trim() !== '');
      if (carrierValues.length > 0) {
        filteredBookings = filteredBookings.filter(booking =>
          carrierValues.includes(booking['Carrier (Std)'])
        );
      }
    }

    if (filters['Booking Status'] && filters['Booking Status'] !== 'All') {
      const statusValues = filters['Booking Status'].split(',').filter(v => v.trim() !== '');
      if (statusValues.length > 0) {
        filteredBookings = filteredBookings.filter(booking =>
          statusValues.includes(booking['Booking Status'])
        );
      }
    }

    if (filters['Exception?'] && filters['Exception?'] !== 'All') {
      filteredBookings = filteredBookings.filter(booking =>
        booking['Exception?'] === filters['Exception?']
      );
    }

    if (filters.Region && filters.Region !== 'All') {
      filteredBookings = filteredBookings.filter(booking =>
        booking.Region === filters.Region
      );
    }

    if (filters['Bkg Type'] && filters['Bkg Type'] !== 'All') {
      filteredBookings = filteredBookings.filter(booking =>
        booking['Bkg Type'] === filters['Bkg Type']
      );
    }

    // Calculate pagination
    const totalItems = filteredBookings.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedBookings = filteredBookings.slice(startIndex, endIndex);

    return {
      bookings: paginatedBookings,
      totalItems,
      totalPages,
      currentPage: page
    };
  }

  /**
   * Get booking statistics
   */
  static async getBookingStats(): Promise<{
    totalBookings: number;
    byStage: Record<string, number>;
    byDivision: Record<string, number>;
  }> {
    await delay(100);

    const stats = {
      totalBookings: shipperBookingsData.length,
      byStage: {} as Record<string, number>,
      byDivision: {} as Record<string, number>
    };

    shipperBookingsData.forEach(booking => {
      // Count by stage
      if (booking.stage) {
        const stageKey = booking.stage.split(' - ')[0];
        stats.byStage[stageKey] = (stats.byStage[stageKey] || 0) + 1;
      }

      // Count by division (if exists)
      if (booking.Region) {
        stats.byDivision[booking.Region] = (stats.byDivision[booking.Region] || 0) + 1;
      }
    });

    return stats;
  }
}