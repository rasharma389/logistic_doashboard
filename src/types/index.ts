export interface FormData {
  customer: string;
  carrier: string;
  carrierBookingNumber: string;
  region: string;
  placeOfReceipt: string;
  portOfLoad: string;
  portOfDischarge: string;
  placeOfDelivery: string;
  equipments: string;
  crd: string;
  moveType: string;
}

export interface ValidationErrors {
  [key: string]: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}