import { FormData, ValidationErrors } from '../types';

export const validateForm = (data: FormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!data.customer?.trim()) {
    errors.customer = 'Customer is required';
  }

  if (!data.carrier?.trim()) {
    errors.carrier = 'Carrier is required';
  }

  if (!data.carrierBookingNumber?.trim()) {
    errors.carrierBookingNumber = 'Carrier Booking Number is required';
  }

  if (!data.region?.trim()) {
    errors.region = 'Region is required';
  }

  if (!data.placeOfReceipt?.trim()) {
    errors.placeOfReceipt = 'Place of Receipt is required';
  }

  if (!data.portOfLoad?.trim()) {
    errors.portOfLoad = 'Port of Load is required';
  }

  if (!data.portOfDischarge?.trim()) {
    errors.portOfDischarge = 'Port of Discharge is required';
  }

  if (!data.placeOfDelivery?.trim()) {
    errors.placeOfDelivery = 'Place of Delivery is required';
  }

  return errors;
};

export const hasValidationErrors = (errors: ValidationErrors): boolean => {
  return Object.keys(errors).length > 0;
};