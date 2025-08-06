export interface BookingDetail {
  id: string;
  customer: string;
  carrier: string;
  carrierBookingNumber: string;
  region: string;
  status: string;
  statusLevel: number;
  placeOfReceipt: string;
  portOfLoad: string;
  portOfDischarge: string;
  placeOfDelivery: string;
  equipments: string;
  crd: string;
  moveType: string;
  placeOfReceiptEtd: string;
  portOfLoadEtd: string;
  portOfDischargeEta: string;
  placeOfDeliveryEta: string;
  requestedEtdWeek: string;
  contractNumber: string;
  tradeLane: string;
  vesselNVoyage: string;
  exception: boolean;
}

export interface CarrierBooking {
  id: string;
  destination: string;
  date: string;
  selected?: boolean;
}

export interface LinkedBooking {
  id: string;
  shipper_bkg_no: string;
  crd_date: string;
  consignee: string;
}

export interface ActivityItem {
  id: string;
  type: 'secondary' | 'exception' | 'confirmed' | 'accepted' | 'linked' | 'approved' | 'submitted' | 'departed' | 'arrived' | 'delayed';
  title: string;
  description: string;
  date: string;
  details?: string;
}

export interface DocumentItem {
  id: string;
  tmsId: string;
  pdfRevision: string;
  pdfLink: string;
  uploadDate: string;
  fileSize: string;
}


// NOTE in the destination i need to use "Cust. Code"
// Carrier Bookings List
export const carrierBookingsList: CarrierBooking[] = [
  {
    id: "CB-185901640",
    destination: "CN E. - HMH",
    date: "2025-06-24"
  },
  {
    id: "CB-185901641",
    destination: "CN E. - HMH",
    date: "2025-06-21"
  },
  {
    id: "CB-185901642",
    destination: "CN E. - HMH",
    date: "2025-06-25"
  },
  {
    id: "CB-185901646",
    destination: "CN E. - HMH",
    date: "2025-06-23"
  },
  {
    id: "CB-185901647",
    destination: "CN E. - HMH",
    date: "2025-06-24"
  },
  {
    id: "CB-185231641",
    destination: "CN E. - HMH",
    date: "2025-06-27"
  },
  {
    id: "CB-185216294",
    destination: "CN S. - BBY",
    date: "2025-08-05"
  },
  {
    id: "CB-186512627",
    destination: "CN E. - TRI",
    date: "2025-07-31"
  },
  {
    id: "CB-186512653",
    destination: "CN E. - TRI",
    date: "2025-07-31"
  },
  {
    id: "CB-186512790",
    destination: "CN E. - COS",
    date: "2025-07-31"
  },
  {
    id: "CB-186624133",
    destination: "CN E. - TRI",
    date: "2025-07-31"
  },
  {
    id: "CB-186512583",
    destination: "CN E. - HOD",
    date: "2025-07-31"
  },
  {
    id: "CB-187024912",
    destination: "CN N. - HMH",
    date: "2025-08-05"
  },
  {
    id: "CB-187024945",
    destination: "CN N. - HMH",
    date: "2025-08-04"
  },
  {
    id: "CB-187024977",
    destination: "CN N. - HMH",
    date: "2025-08-04"
  },
  {
    id: "CB-187025046",
    destination: "CN N. - HMH",
    date: "2025-08-05"
  },
  {
    id: "CB-185901648",
    destination: "CN S. - HCLU",
    date: "2025-08-04"
  },
  {
    id: "CB-186734576",
    destination: "CN S. - BBY",
    date: "2025-08-07"
  },
  {
    id: "CB-13545758",
    destination: "CN S. - BBY",
    date: "2025-08-07"
  }
];

// Booking Details
export const bookingDetailsData: Record<string, BookingDetail> = {
  "CB-185901640": {
    id: "CB-185901640",
    customer: "H&M Home",
    carrier: "MAEU",
    carrierBookingNumber: "229120444",
    region: "CN E.",
    status: "confirmed",
    statusLevel: 5,
    placeOfReceipt: "CNSHA",
    portOfLoad: "CNSHA",
    portOfDischarge: "NLRTM",
    placeOfDelivery: "NLRTM",
    equipments: "40HCx2",
    crd: "Jun 24, 2025",
    moveType: "CYP/CYP",
    placeOfReceiptEtd: "Jul 1, 2025",
    portOfLoadEtd: "Jul 1, 2025",
    portOfDischargeEta: "Aug 15, 2025",
    placeOfDeliveryEta: "Aug 15, 2025",
    requestedEtdWeek: "27",
    contractNumber: "90-0080",
    tradeLane: "AP > EU",
    vesselNVoyage: "ELLY MAERSK 527W",
    exception: true
  },
  "CB-185901641": {
    id: "CB-185901641",
    customer: "H&M Home",
    carrier: "MAEU",
    carrierBookingNumber: "229120447",
    region: "CN E.",
    status: "pending",
    statusLevel: 3,
    placeOfReceipt: "CNSHA",
    portOfLoad: "CNSHA",
    portOfDischarge: "NLRTM",
    placeOfDelivery: "NLRTM",
    equipments: "40HCx1",
    crd: "Jun 21, 2025",
    moveType: "CYP/CYP",
    placeOfReceiptEtd: "Jul 1, 2025",
    portOfLoadEtd: "Jul 1, 2025",
    portOfDischargeEta: "Aug 15, 2025",
    placeOfDeliveryEta: "Aug 15, 2025",
    requestedEtdWeek: "27",
    contractNumber: "90-0080",
    tradeLane: "AP > EU",
    vesselNVoyage: "ELLY MAERSK 527W",
    exception: false
  },
  "CB-185901642": {
    id: "CB-185901642",
    customer: "H&M Home",
    carrier: "COSCO",
    carrierBookingNumber: "COSU-413892",
    region: "CN E.",
    status: "cancelled by requestor",
    statusLevel: 1,
    placeOfReceipt: "CNSHA",
    portOfLoad: "CNSHA",
    portOfDischarge: "DEHAM",
    placeOfDelivery: "DEHAM",
    equipments: "40HCx1",
    crd: "Jun 25, 2025",
    moveType: "CYP/CYP",
    placeOfReceiptEtd: "Jul 1, 2025",
    portOfLoadEtd: "Jul 1, 2025",
    portOfDischargeEta: "Aug 20, 2025",
    placeOfDeliveryEta: "Aug 20, 2025",
    requestedEtdWeek: "27",
    contractNumber: "90-0080",
    tradeLane: "AP > EU",
    vesselNVoyage: "ELLY MAERSK 527W",
    exception: false
  },
  "CB-185901646": {
    id: "CB-185901646",
    customer: "H&M Home",
    carrier: "MSC",
    carrierBookingNumber: "MSC-450891",
    region: "CN E.",
    status: "Cancelled by carrier",
    statusLevel: 1,
    placeOfReceipt: "CNSHA",
    portOfLoad: "CNSHA",
    portOfDischarge: "GBFXT",
    placeOfDelivery: "GBFXT",
    equipments: "40HCx1",
    crd: "Jun 23, 2025",
    moveType: "CYP/CYP",
    placeOfReceiptEtd: "Jul 1, 2025",
    portOfLoadEtd: "Jul 1, 2025",
    portOfDischargeEta: "--:--",
    placeOfDeliveryEta: "--:--",
    requestedEtdWeek: "27",
    contractNumber: "90-0080",
    tradeLane: "AP > EU",
    vesselNVoyage: "ELLY MAERSK 527W",
    exception: false
  },
  "CB-185901647": {
    id: "CB-185901647",
    customer: "H&M Home",
    carrier: "EVERGREEN",
    carrierBookingNumber: "EMC-426781",
    region: "CN E.",
    status: "Closed",
    statusLevel: 6,
    placeOfReceipt: "CNSHA",
    portOfLoad: "CNSHA",
    portOfDischarge: "NLRTM",
    placeOfDelivery: "NLRTM",
    equipments: "40HCx1",
    crd: "Jun 24, 2025",
    moveType: "CYP/CYP",
    placeOfReceiptEtd: "--:--",
    portOfLoadEtd: "--:--",
    portOfDischargeEta: "--:--",
    placeOfDeliveryEta: "--:--",
    requestedEtdWeek: "27",
    contractNumber: "90-0080",
    tradeLane: "AP > EU",
    vesselNVoyage: "ELLY MAERSK 527W",
    exception: false
  },
  "CB-185231641": {
    id: "CB-185231641",
    customer: "H&M Home",
    carrier: "HAPAG-LLOYD",
    carrierBookingNumber: "HLCU-318665",
    region: "CN E.",
    status: "pending",
    statusLevel: 2,
    placeOfReceipt: "CNNGB",
    portOfLoad: "CNNGB",
    portOfDischarge: "NLRTM",
    placeOfDelivery: "NLRTM",
    equipments: "40GPx1",
    crd: "Jun 28, 2025",
    moveType: "CYP/CYP",
    placeOfReceiptEtd: "--:--",
    portOfLoadEtd: "--:--",
    portOfDischargeEta: "--:--",
    placeOfDeliveryEta: "--:--",
    requestedEtdWeek: "27",
    contractNumber: "90-0080",
    tradeLane: "AP > EU",
    vesselNVoyage: "ELLY MAERSK 527W",
    exception: false
  },
  "CB-185216294": {
    id: "CB-185216294",
    customer: "H&M Home",
    carrier: "MAEU",
    carrierBookingNumber: "229120450",
    region: "CN S.",
    status: "confirmed",
    statusLevel: 5,
    placeOfReceipt: "CNSHA",
    portOfLoad: "CNSHA",
    portOfDischarge: "GBFXT",
    placeOfDelivery: "GBFXT",
    equipments: "40HCx1",
    crd: "Aug 5, 2025",
    moveType: "CYP/CYP",
    placeOfReceiptEtd: "Aug 12, 2025",
    portOfLoadEtd: "Aug 12, 2025",
    portOfDischargeEta: "Sep 30, 2025",
    placeOfDeliveryEta: "Sep 30, 2025",
    requestedEtdWeek: "33",
    contractNumber: "90-0080",
    tradeLane: "AP > EU",
    vesselNVoyage: "ELLY MAERSK 527W",
    exception: false
  },
  "CB-186512627": {
    id: "CB-186512627",
    customer: "H&M Home",
    carrier: "COSCO",
    carrierBookingNumber: "COSU-413900",
    region: "CN E.",
    status: "Closed",
    statusLevel: 6,
    placeOfReceipt: "CNSHA",
    portOfLoad: "CNSHA",
    portOfDischarge: "NLRTM",
    placeOfDelivery: "NLRTM",
    equipments: "40HCx1",
    crd: "Jul 31, 2025",
    moveType: "CYP/CYP",
    placeOfReceiptEtd: "Aug 7, 2025",
    portOfLoadEtd: "Aug 7, 2025",
    portOfDischargeEta: "Sep 25, 2025",
    placeOfDeliveryEta: "Sep 25, 2025",
    requestedEtdWeek: "32",
    contractNumber: "90-0080",
    tradeLane: "AP > EU",
    vesselNVoyage: "ELLY MAERSK 527W",
    exception: false
  },
  "CB-186512653": {
    id: "CB-186512653",
    customer: "Triumph",
    carrier: "MAEU",
    carrierBookingNumber: "MAEU-861394",
    region: "CN E.",
    status: "Confirmed",
    statusLevel: 5,
    placeOfReceipt: "CNNGB",
    portOfLoad: "CNNGB",
    portOfDischarge: "NLRTM",
    placeOfDelivery: "NLRTM",
    equipments: "40HCx2",
    crd: "Jul 31, 2025",
    moveType: "CYP/CYP",
    placeOfReceiptEtd: "Aug 8, 2025",
    portOfLoadEtd: "Aug 8, 2025",
    portOfDischargeEta: "Sep 15, 2025",
    placeOfDeliveryEta: "Sep 15, 2025",
    requestedEtdWeek: "32",
    contractNumber: "HH2000",
    tradeLane: "AP > EU",
    vesselNVoyage: "ESTELLE MAERSK 532W",
    exception: false
  },
  "CB-186512790": {
    id: "CB-186512790",
    customer: "Home Depot",
    carrier: "COSCO",
    carrierBookingNumber: "COSU-861392",
    region: "CN E.",
    status: "Accepted",
    statusLevel: 4,
    placeOfReceipt: "CNNGB",
    portOfLoad: "CNNGB",
    portOfDischarge: "USLAX",
    placeOfDelivery: "USLAX",
    equipments: "40HCx1",
    crd: "Aug 1, 2025",
    moveType: "CYP/CYP",
    placeOfReceiptEtd: "Aug 8, 2025",
    portOfLoadEtd: "Aug 8, 2025",
    portOfDischargeEta: "Aug 25, 2025",
    placeOfDeliveryEta: "Aug 25, 2025",
    requestedEtdWeek: "32",
    contractNumber: "HH2000",
    tradeLane: "AP > EU",
    vesselNVoyage: "ESTELLE MAERSK 532W",
    exception: false
  },
  "CB-186605681": {
    id: "CB-186605681",
    customer: "Costco",
    carrier: "MSC",
    carrierBookingNumber: "MSC-861440",
    region: "CN E.",
    status: "In Transit",
    statusLevel: 6,
    placeOfReceipt: "CNNGB",
    portOfLoad: "CNNGB",
    portOfDischarge: "USOAK",
    placeOfDelivery: "USOAK",
    equipments: "40HCx3",
    crd: "Jul 31, 2025",
    moveType: "CYP/CYP",
    placeOfReceiptEtd: "Aug 8, 2025",
    portOfLoadEtd: "Aug 8, 2025",
    portOfDischargeEta: "Aug 28, 2025",
    placeOfDeliveryEta: "Aug 28, 2025",
    requestedEtdWeek: "32",
    contractNumber: "HH2000",
    tradeLane: "AP > EU",
    vesselNVoyage: "ESTELLE MAERSK 532W",
    exception: false
  },
  "CB-186624133": {
    id: "CB-186624133",
    customer: "Triumph",
    carrier: "EVERGREEN",
    carrierBookingNumber: "EMC-861484",
    region: "CN E.",
    status: "CB Requested",
    statusLevel: 3,
    placeOfReceipt: "CNNGB",
    portOfLoad: "CNNGB",
    portOfDischarge: "DEHAM",
    placeOfDelivery: "DEHAM",
    equipments: "40HCx2",
    crd: "Jul 31, 2025",
    moveType: "CYP/CYP",
    placeOfReceiptEtd: "Aug 8, 2025",
    portOfLoadEtd: "Aug 8, 2025",
    portOfDischargeEta: "--:--",
    placeOfDeliveryEta: "--:--",
    requestedEtdWeek: "32",
    contractNumber: "HH2000",
    tradeLane: "AP > EU",
    vesselNVoyage: "ESTELLE MAERSK 532W",
    exception: false
  },
  "CB-186512583": {
    id: "CB-186512583",
    customer: "Home Depot",
    carrier: "CMA-CGM",
    carrierBookingNumber: "CMAU-512583",
    region: "CN E.",
    status: "Requested",
    statusLevel: 2,
    placeOfReceipt: "CNSHA",
    portOfLoad: "CNSHA",
    portOfDischarge: "USLGB",
    placeOfDelivery: "USLGB",
    equipments: "20GPx4",
    crd: "Jul 31, 2025",
    moveType: "CYP/CYP",
    placeOfReceiptEtd: "--:--",
    portOfLoadEtd: "--:--",
    portOfDischargeEta: "--:--",
    placeOfDeliveryEta: "--:--",
    requestedEtdWeek: "32",
    contractNumber: "HH2000",
    tradeLane: "AP > EU",
    vesselNVoyage: "ESTELLE MAERSK 532W",
    exception: false
  },
  "CB-187024912": {
    id: "CB-187024912",
    customer: "H&M Home",
    carrier: "HAPAG-LLOYD",
    carrierBookingNumber: "HLCU-024912",
    region: "CN N.",
    status: "Delivered",
    statusLevel: 7,
    placeOfReceipt: "CNTAO",
    portOfLoad: "CNTAO",
    portOfDischarge: "GBFXT",
    placeOfDelivery: "GBFXT",
    equipments: "45HCx1",
    crd: "Aug 5, 2025",
    moveType: "CFS/CY",
    placeOfReceiptEtd: "Aug 12, 2025",
    portOfLoadEtd: "Aug 12, 2025",
    portOfDischargeEta: "Sep 2, 2025",
    placeOfDeliveryEta: "Sep 2, 2025",
    requestedEtdWeek: "33",
    contractNumber: "90-0080",
    tradeLane: "AP > EU",
    vesselNVoyage: "MUNICH MAERSK 533W",
    exception: false
  },
  "CB-187024945": {
    id: "CB-187024945",
    customer: "H&M Home",
    carrier: "MAEU",
    carrierBookingNumber: "MAEU-024945",
    region: "CN N.",
    status: "Exception",
    statusLevel: 3,
    placeOfReceipt: "CNTAO",
    portOfLoad: "CNTAO",
    portOfDischarge: "NLRTM",
    placeOfDelivery: "NLRTM",
    equipments: "40HCx2",
    crd: "Aug 4, 2025",
    moveType: "CYP/CYP",
    placeOfReceiptEtd: "Aug 11, 2025",
    portOfLoadEtd: "Aug 11, 2025",
    portOfDischargeEta: "--:--",
    placeOfDeliveryEta: "--:--",
    requestedEtdWeek: "33",
    contractNumber: "90-0080",
    tradeLane: "AP > EU",
    vesselNVoyage: "MUNICH MAERSK 533W",
    exception: true
  },
  "CB-187024977": {
    id: "CB-187024977",
    customer: "H&M Home",
    carrier: "COSCO",
    carrierBookingNumber: "COSU-024977",
    region: "CN N.",
    status: "Confirmed",
    statusLevel: 5,
    placeOfReceipt: "CNTAO",
    portOfLoad: "CNTAO",
    portOfDischarge: "DEHAM",
    placeOfDelivery: "DEHAM",
    equipments: "40GPx3",
    crd: "Aug 4, 2025",
    moveType: "CYP/CYP",
    placeOfReceiptEtd: "Aug 11, 2025",
    portOfLoadEtd: "Aug 11, 2025",
    portOfDischargeEta: "Sep 5, 2025",
    placeOfDeliveryEta: "Sep 5, 2025",
    requestedEtdWeek: "33",
    contractNumber: "90-0080",
    tradeLane: "AP > EU",
    vesselNVoyage: "MUNICH MAERSK 533W",
    exception: false
  },
  "CB-187025046": {
    id: "CB-187025046",
    customer: "H&M Home",
    carrier: "MSC",
    carrierBookingNumber: "MSC-025046",
    region: "CN N.",
    status: "In Transit",
    statusLevel: 6,
    placeOfReceipt: "CNTAO",
    portOfLoad: "CNTAO",
    portOfDischarge: "GBFXT",
    placeOfDelivery: "GBFXT",
    equipments: "40HCx1",
    crd: "Aug 5, 2025",
    moveType: "CYP/CYP",
    placeOfReceiptEtd: "Aug 12, 2025",
    portOfLoadEtd: "Aug 12, 2025",
    portOfDischargeEta: "Sep 8, 2025",
    placeOfDeliveryEta: "Sep 8, 2025",
    requestedEtdWeek: "33",
    contractNumber: "90-0080",
    tradeLane: "AP > EU",
    vesselNVoyage: "MUNICH MAERSK 533W",
    exception: false
  },
  "CB-185901648": {
    id: "CB-185901648",
    customer: "H&M Home",
    carrier: "EVERGREEN",
    carrierBookingNumber: "EMC-901648",
    region: "CN E.",
    status: "Accepted",
    statusLevel: 4,
    placeOfReceipt: "CNSHA",
    portOfLoad: "CNSHA",
    portOfDischarge: "NLRTM",
    placeOfDelivery: "NLRTM",
    equipments: "40HCx2",
    crd: "Aug 4, 2025",
    moveType: "CYP/CYP",
    placeOfReceiptEtd: "Aug 11, 2025",
    portOfLoadEtd: "Aug 11, 2025",
    portOfDischargeEta: "Sep 1, 2025",
    placeOfDeliveryEta: "Sep 1, 2025",
    requestedEtdWeek: "33",
    contractNumber: "90-0080",
    tradeLane: "AP > EU",
    vesselNVoyage: "MUNICH MAERSK 533W",
    exception: false
  },
  "CB-186734576": {
    id: "CB-186734576",
    customer: "Best Buy",
    carrier: "CMA-CGM",
    carrierBookingNumber: "CMAU-734576",
    region: "CN S.",
    status: "Draft",
    statusLevel: 1,
    placeOfReceipt: "CNYTN",
    portOfLoad: "CNYTN",
    portOfDischarge: "USLAX",
    placeOfDelivery: "USLAX",
    equipments: "20GPx6",
    crd: "Aug 7, 2025",
    moveType: "CFS/CFS",
    placeOfReceiptEtd: "--:--",
    portOfLoadEtd: "--:--",
    portOfDischargeEta: "--:--",
    placeOfDeliveryEta: "--:--",
    requestedEtdWeek: "33",
    contractNumber: "90-0080",
    tradeLane: "AP > EU",
    vesselNVoyage: "MUNICH MAERSK 533W",
    exception: false
  },
  "CB-13545758": {
    id: "CB-13545758",
    customer: "Best Buy",
    carrier: "HAPAG-LLOYD",
    carrierBookingNumber: "HLCU-545758",
    region: "CN S.",
    status: "Requested",
    statusLevel: 2,
    placeOfReceipt: "CNSZX",
    portOfLoad: "CNSZX",
    portOfDischarge: "USLGB",
    placeOfDelivery: "USLGB",
    equipments: "40RFx2",
    crd: "Aug 7, 2025",
    moveType: "CYP/CYP",
    placeOfReceiptEtd: "--:--",
    portOfLoadEtd: "--:--",
    portOfDischargeEta: "--:--",
    placeOfDeliveryEta: "--:--",
    requestedEtdWeek: "33",
    contractNumber: "90-0080",
    tradeLane: "AP > EU",
    vesselNVoyage: "MUNICH MAERSK 533W",
    exception: false
  },
  "CB-45012178": {
    id: "CB-45012178",
    customer: "Costco",
    carrier: "COSCO",
    carrierBookingNumber: "COSU-891234",
    region: "N. China",
    status: "In Transit",
    statusLevel: 6,
    placeOfReceipt: "CNSHA",
    portOfLoad: "CNSHA",
    portOfDischarge: "USLAX",
    placeOfDelivery: "USLAX",
    equipments: "20GPx2",
    crd: "Oct 15, 2023",
    moveType: "CY-CY",
    placeOfReceiptEtd: "Oct 18, 2023",
    portOfLoadEtd: "Oct 18, 2023",
    portOfDischargeEta: "Nov 2, 2023",
    placeOfDeliveryEta: "Nov 5, 2023",
    requestedEtdWeek: "42",
    contractNumber: "CNTR-021",
    tradeLane: "Asia-NorthAmerica",
    vesselNVoyage: "VesselU/021",
    exception: false
  },
  "CB-45012179": {
    id: "CB-45012179",
    customer: "Walmart",
    carrier: "MSC",
    carrierBookingNumber: "MSC-567890",
    region: "S. China",
    status: "Accepted",
    statusLevel: 4,
    placeOfReceipt: "CNYTN",
    portOfLoad: "CNYTN",
    portOfDischarge: "USNYC",
    placeOfDelivery: "USNYC",
    equipments: "40HCx3",
    crd: "Oct 15, 2023",
    moveType: "CY-CFS",
    placeOfReceiptEtd: "Oct 20, 2023",
    portOfLoadEtd: "Oct 20, 2023",
    portOfDischargeEta: "Nov 8, 2023",
    placeOfDeliveryEta: "Nov 12, 2023",
    requestedEtdWeek: "42",
    contractNumber: "CNTR-022",
    tradeLane: "Asia-NorthAmerica",
    vesselNVoyage: "VesselV/022",
    exception: false
  },
  "CB-45012180": {
    id: "CB-45012180",
    customer: "Lenovo",
    carrier: "EVERGREEN",
    carrierBookingNumber: "EMC-345678",
    region: "N. China",
    status: "Requested",
    statusLevel: 2,
    placeOfReceipt: "CNQIN",
    portOfLoad: "CNQIN",
    portOfDischarge: "USLGB",
    placeOfDelivery: "USLGB",
    equipments: "45HCx1",
    crd: "Oct 15, 2023",
    moveType: "CFS-CY",
    placeOfReceiptEtd: "Oct 22, 2023",
    portOfLoadEtd: "Oct 22, 2023",
    portOfDischargeEta: "--:--",
    placeOfDeliveryEta: "--:--",
    requestedEtdWeek: "42",
    contractNumber: "CNTR-023",
    tradeLane: "Asia-NorthAmerica",
    vesselNVoyage: "VesselW/023",
    exception: false
  },
  "CB-45012181": {
    id: "CB-45012181",
    customer: "Princess Auto",
    carrier: "HAPAG-LLOYD",
    carrierBookingNumber: "HLCU-789012",
    region: "Europe",
    status: "Delivered",
    statusLevel: 7,
    placeOfReceipt: "DEHAM",
    portOfLoad: "DEHAM",
    portOfDischarge: "CAVAN",
    placeOfDelivery: "CAVAN",
    equipments: "20GPx4",
    crd: "Oct 15, 2023",
    moveType: "CY-CY",
    placeOfReceiptEtd: "Oct 16, 2023",
    portOfLoadEtd: "Oct 16, 2023",
    portOfDischargeEta: "Oct 28, 2023",
    placeOfDeliveryEta: "Nov 1, 2023",
    requestedEtdWeek: "44",
    contractNumber: "CNTR-024",
    tradeLane: "Europe-Canada",
    vesselNVoyage: "VesselX/024",
    exception: false
  },
  "CB-45012182": {
    id: "CB-45012182",
    customer: "Costco",
    carrier: "CMA-CGM",
    carrierBookingNumber: "CMAU-480911",
    region: "N. China",
    status: "CB Requested",
    statusLevel: 3,
    placeOfReceipt: "CNSHA",
    portOfLoad: "CNSHA",
    portOfDischarge: "USLGB",
    placeOfDelivery: "USLGB",
    equipments: "40GPx1",
    crd: "Oct 15, 2023",
    moveType: "CY-CY",
    placeOfReceiptEtd: "Oct 19, 2023",
    portOfLoadEtd: "Oct 19, 2023",
    portOfDischargeEta: "--:--",
    placeOfDeliveryEta: "--:--",
    requestedEtdWeek: "42",
    contractNumber: "CNTR-025",
    tradeLane: "Asia-NorthAmerica",
    vesselNVoyage: "VesselY/025",
    exception: false
  },
  "CB-45012183": {
    id: "CB-45012183",
    customer: "Ferguson",
    carrier: "MAERSK",
    carrierBookingNumber: "MAEU-123456",
    region: "S. America",
    status: "Draft",
    statusLevel: 1,
    placeOfReceipt: "BRSSZ",
    portOfLoad: "BRSSZ",
    portOfDischarge: "USMIA",
    placeOfDelivery: "USMIA",
    equipments: "40HCx2",
    crd: "Oct 7, 2023",
    moveType: "CFS-CFS",
    placeOfReceiptEtd: "--:--",
    portOfLoadEtd: "--:--",
    portOfDischargeEta: "--:--",
    placeOfDeliveryEta: "--:--",
    requestedEtdWeek: "41",
    contractNumber: "CNTR-026",
    tradeLane: "SouthAmerica-NorthAmerica",
    vesselNVoyage: "VesselZ/026",
    exception: false
  }
};

// Linked Bookings Data
export const linkedBookingsData: Record<string, LinkedBooking[]> = {
  "CB-185901640": [
    {
      "id": "1",
      "shipper_bkg_no": "202347293044",
      "crd_date": "24-Jun",
      "consignee": "H&M Home"
    }
  ],
  "CB-185901641": [
    {
      "id": "2",
      "shipper_bkg_no": "202347293046",
      "crd_date": "21-Jun",
      "consignee": "H&M Home"
    }
  ],
  "CB-185901642": [
    {
      "id": "3",
      "shipper_bkg_no": "202347293048",
      "crd_date": "25-Jun",
      "consignee": "H&M Home"
    }
  ],
  "CB-185901646": [
    {
      "id": "4",
      "shipper_bkg_no": "202347293049",
      "crd_date": "23-Jun",
      "consignee": "H&M Home"
    }
  ],
  "CB-185901647": [
    {
      "id": "5",
      "shipper_bkg_no": "202347293050",
      "crd_date": "24-Jun",
      "consignee": "H&M Home"
    }
  ],
  "CB-185231641": [
    {
      "id": "6",
      "shipper_bkg_no": "202347356278",
      "crd_date": "27-Jun",
      "consignee": "H&M Home"
    }
  ],
  "CB-185231643": [
    {
      "id": "7",
      "shipper_bkg_no": "202347356278",
      "crd_date": "28-Jun",
      "consignee": "H&M Home"
    }
  ],
  "CB-185216294": [
    {
      "id": "8",
      "shipper_bkg_no": "202347261043",
      "crd_date": "05-Jul",
      "consignee": "Best Buy"
    }
  ],
  "CB-186512627": [
    {
      "id": "9",
      "shipper_bkg_no": "202347320098",
      "crd_date": "31-Jul",
      "consignee": "Triumph"
    }
  ],
  "CB-186512653": [
    {
      "id": "10",
      "shipper_bkg_no": "202347341746",
      "crd_date": "31-Jul",
      "consignee": "Triumph"
    }
  ],
  "CB-186512790": [
    {
      "id": "11",
      "shipper_bkg_no": "202347238889, 202347443978",
      "crd_date": "01-Aug",
      "consignee": "Home Depot"
    }
  ],
  "CB-186605681": [
    {"id": "12.1", "shipper_bkg_no": "202347471558", "crd_date": "31-Jul", "consignee": "Costco"},
    {"id": "12.2", "shipper_bkg_no": "202347291582", "crd_date": "31-Jul", "consignee": "Costco"},
    {"id": "12.3", "shipper_bkg_no": "202347326823", "crd_date": "31-Jul", "consignee": "Costco"},
    {"id": "12.4", "shipper_bkg_no": "202347465267", "crd_date": "31-Jul", "consignee": "Costco"},
    {"id": "12.5", "shipper_bkg_no": "202347403134", "crd_date": "31-Jul", "consignee": "Costco"},
    {"id": "12.6", "shipper_bkg_no": "202347384223", "crd_date": "31-Jul", "consignee": "Costco"},
    {"id": "12.7", "shipper_bkg_no": "202347185490", "crd_date": "31-Jul", "consignee": "Costco"},
    {"id": "12.8", "shipper_bkg_no": "202347056575", "crd_date": "31-Jul", "consignee": "Costco"},
    {"id": "12.9", "shipper_bkg_no": "202347374241", "crd_date": "31-Jul", "consignee": "Costco"},
    {"id": "12.10", "shipper_bkg_no": "202347364836", "crd_date": "31-Jul", "consignee": "Costco"},
    {"id": "12.11", "shipper_bkg_no": "202347355804", "crd_date": "31-Jul", "consignee": "Costco"},
    {"id": "12.12", "shipper_bkg_no": "202347338355", "crd_date": "31-Jul", "consignee": "Costco"}
  ],
  "CB-186624133": [
    {
      "id": "13",
      "shipper_bkg_no": "202347239816",
      "crd_date": "31-Jul",
      "consignee": "Triumph"
    }
  ]
};

// Activities Data
export const activitiesData: Record<string, ActivityItem[]> = {
  "CB-185901640": [
    {
      id: "1",
      type: "confirmed",
      title: "Booking Confirmed",
      description: "MAEU-229120444 confirmed by carrier",
      date: "Jun 25",
      details: "ETD: Jul 1, 2025"
    },
    {
      id: "2",
      type: "accepted",
      title: "Booking Accepted",
      description: "Carrier accepted booking request",
      date: "Jun 24",
      details: "Response time: 2 hours"
    },
    {
      id: "3",
      type: "submitted",
      title: "SO Submitted",
      description: "Shipping order submitted to carrier",
      date: "Jun 24"
    }
  ],
  "CB-185901641": [
    {
      id: "1",
      type: "departed",
      title: "Vessel Departed",
      description: "Container departed from CNSHA",
      date: "Jul 1",
      details: "On schedule departure"
    },
    {
      id: "2",
      type: "confirmed",
      title: "Booking Confirmed",
      description: "MAEU-229120447 confirmed",
      date: "Jun 22",
      details: "ETD: Jul 1, 2025"
    },
    {
      id: "3",
      type: "accepted",
      title: "Booking Accepted",
      description: "Carrier accepted booking",
      date: "Jun 21"
    },
    {
      id: "4",
      type: "submitted",
      title: "SO Submitted",
      description: "Shipping order submitted",
      date: "Jun 21"
    }
  ],
  "CB-185901642": [
    {
      id: "1",
      type: "accepted",
      title: "Booking Accepted",
      description: "COSU-413892 accepted by COSCO",
      date: "Jun 26",
      details: "ETD: Jul 1, 2025"
    },
    {
      id: "2",
      type: "linked",
      title: "Primary CB Linked",
      description: "Allocated by Slync System",
      date: "Jun 25"
    },
    {
      id: "3",
      type: "submitted",
      title: "SO Submitted",
      description: "CRD: Jun 25, 2025",
      date: "Jun 25"
    }
  ],
  "CB-185901646": [
    {
      id: "1",
      type: "linked",
      title: "Primary CB Linked",
      description: "MSC-450891 allocated",
      date: "Jun 24",
      details: "Allocated by Slync System"
    },
    {
      id: "2",
      type: "approved",
      title: "SO Approved",
      description: "CRD: Jun 23, 2025",
      date: "Jun 23"
    },
    {
      id: "3",
      type: "submitted",
      title: "SO Submitted",
      description: "Shipping order submitted",
      date: "Jun 23"
    }
  ],
  "CB-185901647": [
    {
      id: "1",
      type: "submitted",
      title: "SO Submitted",
      description: "CRD: Jun 24, 2025",
      date: "Jun 24"
    }
  ],
  "CB-185231641": [
    {
      id: "1",
      type: "submitted",
      title: "SO Submitted",
      description: "CRD: Jun 28, 2025",
      date: "Jun 28"
    }
  ],
  "CB-185216294": [
    {
      id: "1",
      type: "arrived",
      title: "Cargo Delivered",
      description: "Container delivered at USLGB",
      date: "Jul 28",
      details: "Delivery completed successfully"
    },
    {
      id: "2",
      type: "arrived",
      title: "Vessel Arrived",
      description: "Vessel arrived at USLGB",
      date: "Jul 28"
    },
    {
      id: "3",
      type: "departed",
      title: "Vessel Departed",
      description: "Container departed from CNYTN",
      date: "Jul 13"
    },
    {
      id: "4",
      type: "confirmed",
      title: "Booking Confirmed",
      description: "CMAU-789010 confirmed",
      date: "Jul 6"
    }
  ],
  "CB-186512627": [
    {
      id: "1",
      type: "exception",
      title: "Exception - Vessel Delay",
      description: "Vessel delayed due to port congestion",
      date: "Aug 8",
      details: "New ETD: TBD"
    },
    {
      id: "2",
      type: "linked",
      title: "Primary CB Linked",
      description: "HLCU-861395 allocated",
      date: "Aug 1"
    },
    {
      id: "3",
      type: "submitted",
      title: "SO Submitted",
      description: "CRD: Jul 31, 2025",
      date: "Jul 31"
    }
  ],
  "CB-186512653": [
    {
      id: "1",
      type: "confirmed",
      title: "Booking Confirmed",
      description: "MAEU-861394 confirmed by MAEU",
      date: "Aug 2",
      details: "ETD: Aug 8, 2025"
    },
    {
      id: "2",
      type: "accepted",
      title: "Booking Accepted",
      description: "Carrier accepted booking",
      date: "Aug 1"
    },
    {
      id: "3",
      type: "submitted",
      title: "SO Submitted",
      description: "CRD: Jul 31, 2025",
      date: "Jul 31"
    }
  ],
  "CB-186512790": [
    {
      id: "1",
      type: "accepted",
      title: "Booking Accepted",
      description: "COSU-861392 accepted by COSCO",
      date: "Aug 2",
      details: "ETD: Aug 8, 2025"
    },
    {
      id: "2",
      type: "linked",
      title: "Primary CB Linked",
      description: "Allocated by Slync System",
      date: "Aug 1"
    },
    {
      id: "3",
      type: "submitted",
      title: "SO Submitted",
      description: "CRD: Aug 1, 2025",
      date: "Aug 1"
    }
  ],
  "CB-186605681": [
    {
      id: "1",
      type: "departed",
      title: "Vessel Departed",
      description: "Container departed from CNNGB",
      date: "Aug 8",
      details: "On schedule departure"
    },
    {
      id: "2",
      type: "confirmed",
      title: "Booking Confirmed",
      description: "MSC-861440 confirmed",
      date: "Aug 2"
    },
    {
      id: "3",
      type: "accepted",
      title: "Booking Accepted",
      description: "MSC accepted booking",
      date: "Aug 1"
    },
    {
      id: "4",
      type: "submitted",
      title: "SO Submitted",
      description: "CRD: Jul 31, 2025",
      date: "Jul 31"
    }
  ],
  "CB-186624133": [
    {
      id: "1",
      type: "linked",
      title: "Primary CB Linked",
      description: "EMC-861484 allocated",
      date: "Aug 2",
      details: "Allocated by Slync System"
    },
    {
      id: "2",
      type: "approved",
      title: "SO Approved",
      description: "CRD: Jul 31, 2025",
      date: "Aug 1"
    },
    {
      id: "3",
      type: "submitted",
      title: "SO Submitted",
      description: "Shipping order submitted",
      date: "Jul 31"
    }
  ],
  "CB-186512583": [
    {
      id: "1",
      type: "submitted",
      title: "SO Submitted",
      description: "CRD: Jul 31, 2025",
      date: "Jul 31"
    }
  ],
  "CB-187024912": [
    {
      id: "1",
      type: "arrived",
      title: "Cargo Delivered",
      description: "Container delivered at GBFXT",
      date: "Sep 2",
      details: "Delivery completed successfully"
    },
    {
      id: "2",
      type: "arrived",
      title: "Vessel Arrived",
      description: "Vessel arrived at GBFXT",
      date: "Sep 2"
    },
    {
      id: "3",
      type: "departed",
      title: "Vessel Departed",
      description: "Container departed from CNTAO",
      date: "Aug 12"
    },
    {
      id: "4",
      type: "confirmed",
      title: "Booking Confirmed",
      description: "HLCU-024912 confirmed",
      date: "Aug 6"
    }
  ],
  "CB-187024945": [
    {
      id: "1",
      type: "exception",
      title: "Exception - Documentation Issue",
      description: "Missing export documentation",
      date: "Aug 11",
      details: "Pending customs clearance"
    },
    {
      id: "2",
      type: "linked",
      title: "Primary CB Linked",
      description: "MAEU-024945 allocated",
      date: "Aug 5"
    },
    {
      id: "3",
      type: "submitted",
      title: "SO Submitted",
      description: "CRD: Aug 4, 2025",
      date: "Aug 4"
    }
  ],
  "CB-187024977": [
    {
      id: "1",
      type: "confirmed",
      title: "Booking Confirmed",
      description: "COSU-024977 confirmed by COSCO",
      date: "Aug 6",
      details: "ETD: Aug 11, 2025"
    },
    {
      id: "2",
      type: "accepted",
      title: "Booking Accepted",
      description: "Carrier accepted booking",
      date: "Aug 5"
    },
    {
      id: "3",
      type: "submitted",
      title: "SO Submitted",
      description: "CRD: Aug 4, 2025",
      date: "Aug 4"
    }
  ],
  "CB-187025046": [
    {
      id: "1",
      type: "departed",
      title: "Vessel Departed",
      description: "Container departed from CNTAO",
      date: "Aug 12",
      details: "On schedule departure"
    },
    {
      id: "2",
      type: "confirmed",
      title: "Booking Confirmed",
      description: "MSC-025046 confirmed",
      date: "Aug 6"
    },
    {
      id: "3",
      type: "accepted",
      title: "Booking Accepted",
      description: "MSC accepted booking",
      date: "Aug 5"
    },
    {
      id: "4",
      type: "submitted",
      title: "SO Submitted",
      description: "CRD: Aug 5, 2025",
      date: "Aug 5"
    }
  ],
  "CB-185901648": [
    {
      id: "1",
      type: "accepted",
      title: "Booking Accepted",
      description: "EMC-901648 accepted by EVERGREEN",
      date: "Aug 6",
      details: "ETD: Aug 11, 2025"
    },
    {
      id: "2",
      type: "linked",
      title: "Primary CB Linked",
      description: "Allocated by Slync System",
      date: "Aug 5"
    },
    {
      id: "3",
      type: "submitted",
      title: "SO Submitted",
      description: "CRD: Aug 4, 2025",
      date: "Aug 4"
    }
  ],
  "CB-186734576": [
    {
      id: "1",
      type: "submitted",
      title: "SO Submitted",
      description: "CRD: Aug 7, 2025",
      date: "Aug 7"
    }
  ],
  "CB-13545758": [
    {
      id: "1",
      type: "submitted",
      title: "SO Submitted",
      description: "CRD: Aug 7, 2025",
      date: "Aug 7"
    }
  ],
  "CB-45012178": [
    {
      id: "1",
      type: "departed",
      title: "Shipment Departed",
      description: "Vessel departed from CNSHA",
      date: "Oct 18",
      details: "On schedule departure"
    },
    {
      id: "2",
      type: "confirmed",
      title: "Booking Confirmed: COSU-891234",
      description: "BC POL ETD: 2023-10-18",
      date: "Oct 10"
    },
    {
      id: "3",
      type: "accepted",
      title: "Booking Accepted: COSU-891234",
      description: "ETD POL: 2023-10-18",
      date: "Oct 8"
    },
    {
      id: "4",
      type: "submitted",
      title: "SO Submitted",
      description: "CRD: 2023-10-15",
      date: "Oct 1"
    }
  ],
  "CB-45012179": [
    {
      id: "1",
      type: "accepted",
      title: "Booking Accepted: MSC-567890",
      description: "ETD POL: 2023-10-20",
      date: "Oct 12"
    },
    {
      id: "2",
      type: "linked",
      title: "Primary CB Linked: MSC-567890",
      description: "Allocated by Slync System",
      date: "Oct 10"
    },
    {
      id: "3",
      type: "approved",
      title: "SO Approved",
      description: "CRD: 2023-10-15, Status: Approved",
      date: "Oct 8"
    },
    {
      id: "4",
      type: "submitted",
      title: "SO Submitted",
      description: "CRD: 2023-10-15",
      date: "Oct 5"
    }
  ],
  "CB-45012180": [
    {
      id: "1",
      type: "linked",
      title: "Primary CB Linked: EMC-345678",
      description: "Allocated by Slync System",
      date: "Oct 14"
    },
    {
      id: "2",
      type: "approved",
      title: "SO Approved",
      description: "CRD: 2023-10-15, Status: Approved",
      date: "Oct 12"
    },
    {
      id: "3",
      type: "submitted",
      title: "SO Submitted",
      description: "CRD: 2023-10-15",
      date: "Oct 10"
    }
  ],
  "CB-45012181": [
    {
      id: "1",
      type: "arrived",
      title: "Cargo Delivered",
      description: "Container delivered at CAVAN",
      date: "Nov 1",
      details: "Delivery completed successfully"
    },
    {
      id: "2",
      type: "arrived",
      title: "Vessel Arrived",
      description: "Vessel arrived at CAVAN",
      date: "Oct 28"
    },
    {
      id: "3",
      type: "departed",
      title: "Shipment Departed",
      description: "Vessel departed from DEHAM",
      date: "Oct 16"
    },
    {
      id: "4",
      type: "confirmed",
      title: "Booking Confirmed: HLCU-789012",
      description: "BC POL ETD: 2023-10-16",
      date: "Oct 12"
    },
    {
      id: "5",
      type: "accepted",
      title: "Booking Accepted: HLCU-789012",
      description: "ETD POL: 2023-10-16",
      date: "Oct 8"
    }
  ],
  "CB-45012182": [
    {
      id: "1",
      type: "secondary",
      title: "Secondary CB linked: CMAU-480911",
      description: "POL ETD: Oct 19, 2023",
      date: "Oct 12",
      details: "Allocated by Slync System"
    },
    {
      id: "2",
      type: "exception",
      title: "Exception - Primary CB cancelled: CMAU-480910",
      description: "Cancelled by Carrier",
      date: "Oct 5"
    },
    {
      id: "3",
      type: "confirmed",
      title: "Booking Confirmed: CMAU-480910",
      description: "BC POL ETD: 2023-10-20",
      date: "Oct 5"
    },
    {
      id: "4",
      type: "accepted",
      title: "Booking Accepted (301): CMAU-480910",
      description: "ETD POL: 2023-10-20",
      date: "Oct 1"
    },
    {
      id: "5",
      type: "linked",
      title: "Primary CB Linked: CMAU-480910",
      description: "Allocated by Slync System",
      date: "Oct 1"
    },
    {
      id: "6",
      type: "approved",
      title: "SO Approved",
      description: "CRD: 2023-10-15, Status: Approved",
      date: "Oct 1"
    },
    {
      id: "7",
      type: "submitted",
      title: "SO Submitted",
      description: "CRD: 2023-10-15",
      date: "Sept 15"
    }
  ],
  "CB-45012183": [
    {
      id: "1",
      type: "submitted",
      title: "SO Submitted",
      description: "CRD: 2023-10-07",
      date: "Oct 5"
    }
  ]
};

// Documents Data - organized by TMS ID
export const documentsData: Record<string, DocumentItem[]> = {
  "CB-185901640": [
    {
      id: "1",
      tmsId: "CB-185901640",
      pdfRevision: "Original Version",
      pdfLink: "/SG123456.pdf",
      uploadDate: "2024-01-15",
      fileSize: "2.3 MB"
    },
    {
      id: "2",
      tmsId: "CB-185901640",
      pdfRevision: "Version 1",
      pdfLink: "/HL-24933427.PDF",
      uploadDate: "2024-01-20",
      fileSize: "2.5 MB"
    }
  ],
  "CB-185901641": [
    {
      id: "3",
      tmsId: "CB-185901641",
      pdfRevision: "Original Version",
      pdfLink: "/SG123456.pdf",
      uploadDate: "2024-01-18",
      fileSize: "1.8 MB"
    }
  ],
  "CB-185901642": [
    {
      id: "4",
      tmsId: "CB-185901642",
      pdfRevision: "Original Version",
      pdfLink: "/SG123456.pdf",
      uploadDate: "2024-01-22",
      fileSize: "3.1 MB"
    },
    {
      id: "5",
      tmsId: "CB-185901642",
      pdfRevision: "Version 1",
      pdfLink: "/HL-24933427.PDF",
      uploadDate: "2024-01-25",
      fileSize: "3.2 MB"
    },
    {
      id: "6",
      tmsId: "CB-185901642",
      pdfRevision: "Version 2",
      pdfLink: "/SG123456.pdf",
      uploadDate: "2024-01-28",
      fileSize: "3.3 MB"
    }
  ],
  "CB-186605681": [
    {
      id: "7",
      tmsId: "CB-186605681",
      pdfRevision: "Original Version",
      pdfLink: "/SG123456.pdf",
      uploadDate: "2024-02-01",
      fileSize: "4.2 MB"
    },
    {
      id: "8",
      tmsId: "CB-186605681",
      pdfRevision: "Version 1",
      pdfLink: "/HL-24933427.PDF",
      uploadDate: "2024-02-05",
      fileSize: "4.3 MB"
    }
  ]
};