export interface CBRequestsByStatus {
  id: string;
  label: string;
  value: number;
  color: string;
}

export interface DaysBeforeETD {
  day: string;
  confirmed: number;
  requestedWithResponse: number;
  requestedNoResponse: number;
  cancelledByCarrier: number;
  cancelledBy3PL: number;
}

export interface AllocationsByCarrier {
  id: string;
  value: number;
  color: string;
}

export interface ExceptionItem {
  id: string;
  region: string;
  customer: string;
  name: string;
  expType: string;
  exceptionDetails: string;
  cb: string;
  status: 'Open' | 'Assigned';
  createdDate: string;
}

export interface DashboardFilters {
  customer: string;
  carrier: string;
  region: string;
  reqETD: string;
}

// CB Requests by Status Data
export const cbRequestsByStatusData: CBRequestsByStatus[] = [
  { id: 'confirmed', label: 'Confirmed', value: 89, color: '#52c41a' },
  { id: 'requestedWithResponse', label: 'Requested, w/ response', value: 67, color: '#1890ff' },
  { id: 'requestedNoResponse', label: 'Requested, no response', value: 45, color: '#722ed1' },
  { id: 'cancelledByCarrier', label: 'Cancelled by carrier', value: 23, color: '#eb2f96' },
  { id: 'cancelledBy3PL', label: 'Cancelled by 3PL', value: 10, color: '#faad14' }
];

// Days Before Requested ETD Data
export const daysBeforeETDData: DaysBeforeETD[] = [
  { day: '1', confirmed: 120, requestedWithResponse: 80, requestedNoResponse: 40, cancelledByCarrier: 20, cancelledBy3PL: 10 },
  { day: '2', confirmed: 150, requestedWithResponse: 90, requestedNoResponse: 50, cancelledByCarrier: 25, cancelledBy3PL: 15 },
  { day: '3', confirmed: 180, requestedWithResponse: 100, requestedNoResponse: 60, cancelledByCarrier: 30, cancelledBy3PL: 20 },
  { day: '4', confirmed: 200, requestedWithResponse: 110, requestedNoResponse: 70, cancelledByCarrier: 35, cancelledBy3PL: 25 },
  { day: '5', confirmed: 220, requestedWithResponse: 120, requestedNoResponse: 80, cancelledByCarrier: 40, cancelledBy3PL: 30 },
  { day: '6', confirmed: 250, requestedWithResponse: 130, requestedNoResponse: 90, cancelledByCarrier: 45, cancelledBy3PL: 35 },
  { day: '7', confirmed: 280, requestedWithResponse: 140, requestedNoResponse: 100, cancelledByCarrier: 50, cancelledBy3PL: 40 },
  { day: '8', confirmed: 320, requestedWithResponse: 160, requestedNoResponse: 120, cancelledByCarrier: 60, cancelledBy3PL: 50 },
  { day: '9', confirmed: 380, requestedWithResponse: 180, requestedNoResponse: 140, cancelledByCarrier: 70, cancelledBy3PL: 60 },
  { day: '10-14', confirmed: 450, requestedWithResponse: 200, requestedNoResponse: 160, cancelledByCarrier: 80, cancelledBy3PL: 70 }
];

// Allocations by Carrier Data (Treemap)
export const allocationsByCarrierData = {
  name: 'carriers',
  children: [
    { name: 'CDMU', value: 45, color: '#4285f4' },
    { name: 'HLCU', value: 38, color: '#6fa8dc' },
    { name: 'COSU', value: 32, color: '#ffd966' },
    { name: 'EGLV', value: 28, color: '#f1c232' },
    { name: 'RHEN', value: 25, color: '#4285f4' },
    { name: 'OIAG', value: 22, color: '#6fa8dc' },
    { name: 'UWLD', value: 20, color: '#9fc5e8' },
    { name: 'HDMU', value: 18, color: '#ffd966' },
    { name: 'FENC', value: 16, color: '#f1c232' },
    { name: 'PNCS', value: 15, color: '#f1c232' },
    { name: 'SVDL', value: 12, color: '#f1c232' },
    { name: 'OOLU', value: 10, color: '#f1c232' },
    { name: 'ONEY', value: 8, color: '#f1c232' }
  ]
};

// Exception Items Data
export const exceptionItemsData: ExceptionItem[] = [
  {
    id: '1',
    region: 'China',
    customer: 'HSI',
    name: 'Carrier cannot release booking confirmation on ETD-7',
    expType: 'No Carrier Confirmation',
    exceptionDetails: 'Booking confirmation has not been received for C5-20230608001 with...',
    cb: 'CB-20230608001',
    status: 'Open',
    createdDate: 'July'
  },
  {
    id: '2',
    region: 'China',
    customer: 'CNS',
    name: 'Carrier delayed ETD Port of Loading for more than 3 days',
    expType: 'Delayed schedule from ca...',
    exceptionDetails: 'Carrier confirmed ETD Port of Loading 2023-07-16 is more than...',
    cb: 'CB-20230623004',
    status: 'Assigned',
    createdDate: 'July'
  },
  {
    id: '3',
    region: 'Singapore',
    customer: 'RHU',
    name: 'Contract mismatch',
    expType: 'Contract mismatch',
    exceptionDetails: 'Contract Mismatch Between Booking Request (20230516) and Booking...',
    cb: '16190066',
    status: 'Open',
    createdDate: 'July'
  },
  {
    id: '4',
    region: 'Vietnam',
    customer: 'MDN',
    name: 'Carrier cannot release booking confirmation on ETD-7',
    expType: 'No Carrier Confirmation',
    exceptionDetails: 'Booking confirmation has not been received for CR-20230217003 with...',
    cb: 'CB-20230217003',
    status: 'Open',
    createdDate: 'July'
  },
  {
    id: '5',
    region: 'Singapore',
    customer: 'RHU',
    name: 'Contract mismatch',
    expType: 'Contract mismatch',
    exceptionDetails: 'Contract Mismatch Between Booking Request (20230516) and Booking...',
    cb: 'SIN/MNN/2456658',
    status: 'Open',
    createdDate: 'July'
  },
  {
    id: '6',
    region: 'China',
    customer: 'HSI',
    name: 'Carrier cannot release booking confirmation on ETD-7',
    expType: 'No Carrier Confirmation',
    exceptionDetails: 'Booking confirmation has not been received for C5-20230608001 with...',
    cb: 'CB-20230608001',
    status: 'Open',
    createdDate: 'July'
  },
  {
    id: '7',
    region: 'China',
    customer: 'CNS',
    name: 'Carrier delayed ETD Port of Loading for more than 3 days',
    expType: 'Delayed schedule from ca...',
    exceptionDetails: 'Carrier confirmed ETD Port of Loading 2023-07-16 is more than...',
    cb: 'CB-20230623004',
    status: 'Assigned',
    createdDate: 'July'
  },
  {
    id: '8',
    region: 'Singapore',
    customer: 'RHU',
    name: 'Contract mismatch',
    expType: 'Contract mismatch',
    exceptionDetails: 'Contract Mismatch Between Booking Request (20230516) and Booking...',
    cb: '16190066',
    status: 'Open',
    createdDate: 'July'
  }
];

// Dashboard Filters Default Values
export const defaultFilters: DashboardFilters = {
  customer: 'ALL',
  carrier: 'ALL',
  region: 'ALL',
  reqETD: 'Current + 15 days'
};