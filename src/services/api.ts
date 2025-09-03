import { 
  carrierBookingsList, 
  bookingDetailsDataNew,
  linkedBookingsData, 
  activitiesData,
  documentsData,
  type CarrierBooking,
  type BookingDetail,
  type LinkedBooking,
  type ActivityItem,
  type DocumentItem
} from '../data/mockData';
import { ShipperBooking } from '../types/bookingOverview';

const STATUS = ['Canceled by carrier', 'Canceled by requestor', 'Pending']

// Mapping function to convert ShipperBooking to BookingDetail
const mapShipperBookingToBookingDetail = (shipperBooking: ShipperBooking): BookingDetail => {
  return {
    id: shipperBooking.id,
    customer: shipperBooking['Cust. Code'],
    carrier: shipperBooking['Carrier (Std)'],
    carrierBookingNumber: shipperBooking['Bkg Party #'],
    region: shipperBooking.district,
    status: shipperBooking['Booking Status'],
    statusLevel: getStatusLevel(shipperBooking['Booking Status']),
    placeOfReceipt: shipperBooking['BR:PRE'],
    portOfLoad: shipperBooking['BR:POL'],
    portOfDischarge: shipperBooking['BR:POD'],
    placeOfDelivery: shipperBooking['BR:DEL'],
    equipments: STATUS.includes(shipperBooking['Booking Status']) ? shipperBooking['BR:Eqp.']: shipperBooking['BC:Eqp.'],
    crd: shipperBooking.CRD,
    moveType: shipperBooking['Move Type'],
    placeOfReceiptEtd: STATUS.includes(shipperBooking['Booking Status']) ? shipperBooking['BR:Req. ETD PRE'] : shipperBooking['BC: ETD PRE'],
    portOfLoadEtd: STATUS.includes(shipperBooking['Booking Status']) ? shipperBooking['BR:Req. ETD POL'] : shipperBooking['BC:ETD POL'],
    portOfDischargeEta: STATUS.includes(shipperBooking['Booking Status']) ? shipperBooking['BR: ETA POD'] : shipperBooking['BC: ETA POD'],
    placeOfDeliveryEta: shipperBooking['BR: ETA DEL'],
    requestedEtdWeek: shipperBooking['req ETD wk'],
    contractNumber: shipperBooking['Contract #'],
    tradeLane: shipperBooking.Trade,
    vesselNVoyage: STATUS.includes(shipperBooking['Booking Status']) ? `${shipperBooking['BR:1st Vessel']} ${shipperBooking['BR:1st Voyage #']}` : `${shipperBooking['BC:1st Vessel']} ${shipperBooking['BC:1st Voyage #']}`,
    exception: shipperBooking['Exception?'] === 'Y',
    placeOfReceiptFullName: shipperBooking['BR:PRE (full name)'],
    portOfLoadFullName: shipperBooking['BR:POL (full name)'],
    portOfDischargeFullName: shipperBooking['BR:POD (full name)'],
    placeOfDeliveryFullName: shipperBooking['BR:DEL (full name)'],
  };
};

// Helper function to determine status level
const getStatusLevel = (status: string): number => {
  switch (status.toLowerCase()) {
    case 'confirmed':
      return 5;
    case 'pending':
      return 3;
    case 'cancelled by requestor':
    case 'cancelled by carrier':
      return 1;
    case 'closed':
      return 4;
    default:
      return 2;
  }
};

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simulate network errors occasionally
const shouldSimulateError = () => false;

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
    
    // Get from bookingDetailsDataNew (new data structure)
    const shipperBooking = bookingDetailsDataNew[bookingId];
    if (shipperBooking) {
      return mapShipperBookingToBookingDetail(shipperBooking);
    }
    
    return null;
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
    
    // Get from new data structure
    const shipperBooking = bookingDetailsDataNew[bookingId];
    if (shipperBooking) {
      // For now, we'll return the mapped data without updating the source
      // In a real implementation, you'd update the source data
      const mappedBooking = mapShipperBookingToBookingDetail(shipperBooking);
      return { ...mappedBooking, ...updates };
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
        const details = bookingDetailsDataNew[booking.id];
        return details ? details['Cust. Code'].toLowerCase().includes(query.customer!.toLowerCase()) : false;
      });
    }
    
    if (query.carrier) {
      filteredBookings = filteredBookings.filter(booking => {
        const details = bookingDetailsDataNew[booking.id];
        return details ? details['Carrier (Std)'].toLowerCase().includes(query.carrier!.toLowerCase()) : false;
      });
    }
    
    if (query.status) {
      filteredBookings = filteredBookings.filter(booking => {
        const details = bookingDetailsDataNew[booking.id];
        return details ? details['Booking Status'].toLowerCase().includes(query.status!.toLowerCase()) : false;
      });
    }
    
    if (query.region) {
      filteredBookings = filteredBookings.filter(booking => {
        const details = bookingDetailsDataNew[booking.id];
        return details ? details.district.toLowerCase().includes(query.region!.toLowerCase()) : false;
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
      const details = bookingDetailsDataNew[booking.id];
      if (details) {
        // Count by status
        stats.byStatus[details['Booking Status']] = (stats.byStatus[details['Booking Status']] || 0) + 1;
        
        // Count by carrier
        stats.byCarrier[details['Carrier (Std)']] = (stats.byCarrier[details['Carrier (Std)']] || 0) + 1;
        
        // Count by region
        stats.byRegion[details.district] = (stats.byRegion[details.district] || 0) + 1;
      }
    });
    
    return stats;
  }
}