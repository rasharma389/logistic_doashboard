export interface ShipperBooking {
  id: string;
  Golden: string; // New field for PDF status and flags
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
  'FEU difference (BC-BR)': string;
  'Excpt. Eqp?': string;
  'ETD difference (BC-BR)': string;
  'ETD range (BC-BR) formula': string;
  'ETD info': string;
  'Excpt. ETD?': string;
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
  'BC:2nd Vessel': string;
  'BC:2nd Voyage #': string;
  Consignee: string;
  Region: string;
  'Bkg Type': string;
  'Shipper Bkg Linked?': string;
  'Linked Shipper bkg #': string;
  'BR:Req. ETD intial': string;
  'BR:PRE (full name)': string;
  'BR:POL (full name)': string;
  'BR:POD (full name)': string;
  'BR:DEL (full name)': string;
  'BR:POL Group': string;
  'BR:POD Group': string;
  'Ack:301 ETD POL': string;
  'Ack: 301 ETA POD': string;
  'Ack:301 ETA PODelivery': string;
  'NVOCC/Agent Bkg #': string;
  'Bkg Template?': string;
  'Bkg Form Sent?': string;
  'Bkg Form Email Sent Date': string;
  'Created At': string;
  'Updated At': string;
  'BR create date': string;
  'Updated At (Date)': string;
  'BR Month': string;
  '300/301 Status': string;
  'Bkg Agent ID': string;
  CRD: string;
  'Date between BR creattion / ETD req': string;
  Check: string;
  'T/S port 1': string;
  'T/S port 2': string;
  'BC:3rd Vessel': string;
  'BC:3rd Voyage #': string;
  'BC:1st Vessel': string;
  'BC:1st Voyage #': string;
  'Vessel mismatch': string;
  // New equipment-related fields from Book7.csv
  'BR:Eqp type 1': string;
  'BR:Eqp Qty 1': string;
  'BR:Eqp type 2': string;
  'BR:Eqp Qty 2': string;
  'BC:Eqp qty 2.1': string;
  'BR:Eqp type 3': string;
  'BR:Eqp Qty 3': string;
  'BR:Eqp type 1 - row seq': string;
  'BR:Eqp type 2 - row seq': string;
  'BR:Eqp type 3 - row seq': string;
  'BC:Eqp type 1': string;
  'BC:Eqp qty 2': string;
  'BC:Eqp type 2': string;
  'BC:Eqp type 3': string;
  'BC:Eqp qty 3': string;
  'BC:Eqp type 1 - row seq': string;
  'BC:Eqp type 2 - row seq': string;
  'BC:Eqp type 3 - row seq': string;
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
  'Excpt. Eqp?': string;
  'Excpt. ETD?': string;
  '300/301 Status': string;
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
  // New filter states for BookingOverviewNew
  newFilters: {
    tradeFilter: string[];
    originRegionFilter: string[];
    destinationRegionFilter: string[];
    originCountryFilter: string[];
    districtFilter: string[];
    reqEtdWeekFilter: string[];
    tmsSearchQuery: string;
  };
  // Page size for BookingOverviewNew
  newPageSize: number;
  // Selected rows for BookingOverviewNew
  selectedRows: string[];
  // Custom views for column configurations
  customViews: {
    id: string;
    name: string;
    columns: string[];
    createdAt: string;
  }[];
  // Current active view
  activeViewId: string | null;
}