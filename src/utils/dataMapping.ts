import type { ShipperBooking } from '../types/bookingOverview';
import type { CarrierBooking } from '../data/mockData';

// Import the mock data to check for available booking details
import { bookingDetailsData } from '../data/mockData';

/**
 * Maps ShipperBooking data to CarrierBooking format for the carrier booking page
 * Uses TMS # (id field) as the connection point
 * Only includes bookings that have corresponding details in the carrier booking system
 */
export const mapShipperBookingToCarrierBooking = (shipperBookings: ShipperBooking[]): CarrierBooking[] => {
  const mappedBookings: CarrierBooking[] = [];
  
  shipperBookings.forEach(booking => {
    const carrierBookingId = `CB-${booking['TMS #']}` || `CB-${booking.id}`;
    
    // Only include bookings that have corresponding details in the carrier booking system
    if (bookingDetailsData[carrierBookingId]) {
      mappedBookings.push({
        id: carrierBookingId,
        destination: `${booking['district'] || 'N/A'} - ${booking['Cust. Code'] || 'N/A'}`,
        date: booking.CRD || 'N/A',
        selected: false
      });
    } else {
      console.log(`Skipping booking with TMS # ${booking['TMS #']} - no carrier booking details available`);
    }
  });
  
  console.log('Mapping ShipperBooking to CarrierBooking:', {
    originalCount: shipperBookings.length,
    mappedCount: mappedBookings.length,
    original: shipperBookings.slice(0, 3),
    mapped: mappedBookings.slice(0, 3)
  });
  
  return mappedBookings;
};

/**
 * Maps CarrierBooking data to ShipperBooking format for the booking overview page
 * Uses TMS # (id field) as the connection point
 */
export const mapCarrierBookingToShipperBooking = (carrierBookings: CarrierBooking[]): ShipperBooking[] => {
  // This would need the full ShipperBooking data to map back
  // For now, we'll return empty array as this mapping is not needed
  return [];
};

/**
 * Finds ShipperBooking by TMS # (id)
 */
export const findShipperBookingByTmsNumber = (shipperBookings: ShipperBooking[], tmsNumber: string): ShipperBooking | undefined => {
  // Remove CB- prefix if present for comparison
  const cleanTmsNumber = tmsNumber.startsWith('CB-') ? tmsNumber.substring(3) : tmsNumber;
  
  console.log('Finding ShipperBooking by TMS #:', {
    originalTmsNumber: tmsNumber,
    cleanTmsNumber,
    availableTmsNumbers: shipperBookings.slice(0, 5).map(b => b['TMS #']) // Show first 5 for debugging
  });
  
  const found = shipperBookings.find(booking => 
    booking['TMS #'] === cleanTmsNumber || booking.id === cleanTmsNumber
  );
  
  console.log('Found ShipperBooking:', found ? 'YES' : 'NO', found);
  
  return found;
};

/**
 * Finds CarrierBooking by TMS # (id)
 */
export const findCarrierBookingByTmsNumber = (carrierBookings: CarrierBooking[], tmsNumber: string): CarrierBooking | undefined => {
  return carrierBookings.find(booking => booking.id === tmsNumber);
};
