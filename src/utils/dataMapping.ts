import type { ShipperBooking } from '../types/bookingOverview';
import type { CarrierBooking } from '../data/mockData';

/**
 * Maps ShipperBooking data to CarrierBooking format for the carrier booking page
 * Uses TMS # (id field) as the connection point
 */
export const mapShipperBookingToCarrierBooking = (shipperBookings: ShipperBooking[]): CarrierBooking[] => {
  const mappedBookings = shipperBookings.map(booking => ({
    id: `CB-${booking['TMS #']}` || `CB-${booking.id}`, // Add CB- prefix to TMS #
    destination: `${booking['Origin region'] || 'N/A'} - ${booking['Cust. Code'] || 'N/A'}`,
    date: booking.CRD || 'N/A', // Use CRD date
    selected: false
  }));
  
  console.log('Mapping ShipperBooking to CarrierBooking:', {
    original: shipperBookings.slice(0, 3), // Show first 3 for debugging
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
