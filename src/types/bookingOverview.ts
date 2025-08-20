export interface ShipperBooking {
  id: string;
  Trade: string;
  'Origin region': string;
  'Destination region': string;
  'Origin country': string;
  district: string;
  'req ETD wk': string;
  'Cust. Code': string;
  'Carrier (Std)': string;
  'Contract #': string;
  'BR:1st Vessel': string;
  'BR:1st Voyage #': string;
  'Bkg Party #': string;
  'TMS #': string;
  'Booking Status': string;
  'Exception?': string;
  'BR:PRE': string;
  'BR:POL': string;
  'BR:POD': string;
  'BR:DEL': string;
  'Move Type': string;
  'BR:Req. ETD': string;
  'BC:ETD POL': string;
  'BR:Eqp.': string;
  'BR:Eqp. Cnt': string;
  'BC:Eqp.': string;
  'BC:Eqp. Cnt': string;
  'BC:Release Date': string;
  'BC:Version': string;
  'BR:Req. FEU': string;
  'BC:Conf. FEU': string;
  'BC: CY Cut-off Date': string;
  'BC: CY Cut-off Time': string;
  'BC: VGM Cut-off Date': string;
  'BC: VGM Cut-off Time': string;
  'BC: SI Cut-off Date': string;
  'BC: SI Cut-off Time': string;
  'BC:1st ETD POL': string;
  'BC:1st ETA POD': string;
  'BC:1st Release Date': string;
  'BC:Released': string;
  'BR:2nd Vessel': string;
  'BR:2nd Voyage #': string;
  Consignee: string;
  Region: string;
  'Bkg Type': string;
  'Shipper Bkg Linked?': string;
  CRD: string;
  'Date between BR creattion / ETD req': string;
  Check: string;
  x4: string;
  x5: string;
  x6: string;
  x7: string;
  x8: string;
  x9: string;
  stage: string;
  stageProgress: number;
  selected?: boolean;
}

export interface BookingOverviewFilters {
  Trade: string;
  'Origin region': string;
  'Destination region': string;
  'Origin country': string;
  district: string;
  'req ETD wk': string;
  'Cust. Code': string;
  'Carrier (Std)': string;
  'Booking Status': string;
  'Exception?': string;
  Region: string;
  'Bkg Type': string;
}

export interface BookingOverviewState {
  bookings: ShipperBooking[];
  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  filters: BookingOverviewFilters;
  searchQuery: string;
  selectedBookings: string[];
  loading: boolean;
  error: string | null;
}