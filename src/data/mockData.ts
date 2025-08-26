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
  shipWindow: string;
}

export interface ActivityItem {
  id: string;
  type: 'pending' | 'secondary' | 'exception' | 'confirmed' | 'accepted' | 'linked' | 'approved' | 'submitted' | 'departed' | 'arrived' | 'delayed' | 'cutoff' | 'loaded' | 'eta' | 'delivered' | 'etd_change' | 'equipment_mismatch';
  title: string;
  description: string;
  date: string;
  details?: string;
  severity: 'info' | 'success' | 'warning' | 'error' | 'high';
  highlight: boolean;
  tags: string[];
  reqETD?: string;
  createDate?: string;
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
// Carrier Bookings List - Updated with all TMS numbers from bookingOverviewData.ts
export const carrierBookingsList: CarrierBooking[] = [
  {
    "id": "CB-180080002",
    "destination": "CN E. - HMH",
    "date": "24-Jun"
  },
  {
    "id": "CB-180080004",
    "destination": "CN E. - HMH",
    "date": "21-Jun"
  },
  {
    "id": "CB-180080003",
    "destination": "CN E. - HMH",
    "date": "25-Jun"
  },
  {
    "id": "CB-180080005",
    "destination": "CN E. - HMH",
    "date": "23-Jun"
  },
  {
    "id": "CB-180080001",
    "destination": "CN E. - HMH",
    "date": "24-Jun"
  },
  {
    "id": "CB-180080006",
    "destination": "IN W. - HMH",
    "date": "23-Jun"
  },
  {
    "id": "CB-180080007",
    "destination": "IN W. - HMH",
    "date": "23-Jun"
  },
  {
    "id": "CB-185231641",
    "destination": "CN E. - HMH",
    "date": "27-Jun"
  },
  {
    "id": "CB-185231643",
    "destination": "CN E. - HMH",
    "date": "28-Jun"
  },
  {
    "id": "CB-180080008",
    "destination": "CN S. - BBY",
    "date": "05-Jul"
  },
  {
    "id": "CB-180080011",
    "destination": "IN W. - HMH",
    "date": "07-Jul"
  },
  {
    "id": "CB-180080009",
    "destination": "IN W. - HMH",
    "date": "07-Jul"
  },
  {
    "id": "CB-180080010",
    "destination": "IN W. - HMH",
    "date": "07-Jul"
  },
  {
    "id": "CB-180080014",
    "destination": "IN W. - HMH",
    "date": "21-Jul"
  },
  {
    "id": "CB-180080015",
    "destination": "IN W. - HMH",
    "date": "21-Jul"
  },
  {
    "id": "CB-180080013",
    "destination": "CN E. - HMH",
    "date": "23-Jul"
  },
  {
    "id": "CB-180080016",
    "destination": "CN E. - NIK",
    "date": "23-Jul"
  },
  {
    "id": "CB-180080017",
    "destination": "CN E. - BBY",
    "date": "26-Jul"
  },
  {
    "id": "CB-180080018",
    "destination": "CN E. - BBY",
    "date": "25-Jul"
  },
  {
    "id": "CB-180080019",
    "destination": "CN E. - LEN",
    "date": "25-Jul"
  },
  {
    "id": "CB-180080020",
    "destination": "CN E. - WAL",
    "date": "25-Jul"
  },
  {
    "id": "CB-180080021",
    "destination": "CN E. - HOD",
    "date": "25-Jul"
  },
  {
    "id": "CB-180080023",
    "destination": "CN E. - TRI",
    "date": "23-Jul"
  },
  {
    "id": "CB-180080035",
    "destination": "CN E. - NIK",
    "date": "24-Jul"
  },
  {
    "id": "CB-180080024",
    "destination": "IN S. - HMH",
    "date": "28-Jul"
  },
  {
    "id": "CB-180080036",
    "destination": "CN E. - HMH",
    "date": "30-Jul"
  },
  {
    "id": "CB-180080037",
    "destination": "CN E. - HMH",
    "date": "30-Jul"
  },
  {
    "id": "CB-180080051",
    "destination": "CN E. - HMH",
    "date": "30-Jul"
  },
  {
    "id": "CB-180080052",
    "destination": "CN E. - HMH",
    "date": "30-Jul"
  },
  {
    "id": "CB-180080025",
    "destination": "CN E. - TRI",
    "date": "31-Jul"
  },
  {
    "id": "CB-180080026",
    "destination": "CN E. - TRI",
    "date": "31-Jul"
  },
  {
    "id": "CB-180080027",
    "destination": "CN E. - HOD",
    "date": "01-Aug"
  },
  {
    "id": "CB-180080038",
    "destination": "CN E. - COS",
    "date": "31-Jul"
  },
  {
    "id": "CB-180080039",
    "destination": "CN E. - TRI",
    "date": "31-Jul"
  },
  {
    "id": "CB-186512583",
    "destination": "CN E. - HOD",
    "date": "31-Jul"
  },
  {
    "id": "CB-180080012",
    "destination": "CN E. - NIK",
    "date": "31-Jul"
  },
  {
    "id": "CB-180080028",
    "destination": "CN E. - HOD",
    "date": "30-Jul"
  },
  {
    "id": "CB-180080029",
    "destination": "CN E. - HOD",
    "date": "30-Jul"
  },
  {
    "id": "CB-180080030",
    "destination": "CN E. - NIK",
    "date": "30-Jul"
  },
  {
    "id": "CB-180080031",
    "destination": "CN E. - LEN",
    "date": "02-Aug"
  },
  {
    "id": "CB-180080032",
    "destination": "CN E. - LEN",
    "date": "02-Aug"
  },
  {
    "id": "CB-180080033",
    "destination": "CN E. - LEN",
    "date": "02-Aug"
  },
  {
    "id": "CB-180080034",
    "destination": "CN E. - LEN",
    "date": "02-Aug"
  },
  {
    "id": "CB-180080040",
    "destination": "CN E. - DEC",
    "date": "03-Aug"
  },
  {
    "id": "CB-180080041",
    "destination": "CN E. - DEC",
    "date": "02-Aug"
  },
  {
    "id": "CB-180080042",
    "destination": "CN E. - WAL",
    "date": "03-Aug"
  },
  {
    "id": "CB-180080043",
    "destination": "CN E. - WAL",
    "date": "02-Aug"
  },
  {
    "id": "CB-180080044",
    "destination": "CN E. - LEN",
    "date": "04-Aug"
  },
  {
    "id": "CB-180080045",
    "destination": "CN E. - LEN",
    "date": "01-Aug"
  },
  {
    "id": "CB-180080046",
    "destination": "CN E. - LEN",
    "date": "01-Aug"
  },
  {
    "id": "CB-180080047",
    "destination": "CN E. - COS",
    "date": "01-Aug"
  },
  {
    "id": "CB-180080048",
    "destination": "CN E. - HOD",
    "date": "01-Aug"
  },
  {
    "id": "CB-180080049",
    "destination": "CN E. - HOD",
    "date": "01-Aug"
  },
  {
    "id": "CB-180080050",
    "destination": "CN E. - HOD",
    "date": "01-Aug"
  },
  {
    "id": "CB-180080067",
    "destination": "CN N. - HMH",
    "date": "05-Aug"
  },
  {
    "id": "CB-180080068",
    "destination": "CN N. - HMH",
    "date": "04-Aug"
  },
  {
    "id": "CB-180080069",
    "destination": "CN N. - HMH",
    "date": "04-Aug"
  },
  {
    "id": "CB-180080070",
    "destination": "CN N. - HMH",
    "date": "05-Aug"
  },
  {
    "id": "CB-185901648",
    "destination": "CN S. - HMH",
    "date": "05-Aug"
  },
  {
    "id": "CB-180080022",
    "destination": "CN S. - HMH",
    "date": "05-Aug"
  },
  {
    "id": "CB-180080053",
    "destination": "CN S. - BBY",
    "date": "07-Aug"
  },
  {
    "id": "CB-264229065",
    "destination": "CN S. - BBY",
    "date": "07-Aug"
  },
  {
    "id": "CB-180080054",
    "destination": "CN E. - NIK",
    "date": "31-Jul"
  },
  {
    "id": "CB-180080055",
    "destination": "CN E. - DEC",
    "date": "02-Aug"
  },
  {
    "id": "CB-180080056",
    "destination": "CN E. - COS",
    "date": "02-Aug"
  },
  {
    "id": "CB-180080057",
    "destination": "CN E. - COS",
    "date": "01-Aug"
  },
  {
    "id": "CB-180080058",
    "destination": "CN S. - LEN",
    "date": "08-Aug"
  },
  {
    "id": "CB-180080059",
    "destination": "CN S. - LEN",
    "date": "07-Aug"
  },
  {
    "id": "CB-180080060",
    "destination": "CN S. - LEN",
    "date": "08-Aug"
  },
  {
    "id": "CB-180080061",
    "destination": "CN S. - LEN",
    "date": "07-Aug"
  },
  {
    "id": "CB-180080062",
    "destination": "CN S. - TRI",
    "date": "08-Aug"
  },
  {
    "id": "CB-180080063",
    "destination": "CN S. - TRI",
    "date": "09-Aug"
  },
  {
    "id": "CB-180080064",
    "destination": "CN S. - TRI",
    "date": "08-Aug"
  },
  {
    "id": "CB-180080065",
    "destination": "CN S. - WAL",
    "date": "08-Aug"
  },
  {
    "id": "CB-180080066",
    "destination": "CN S. - STA",
    "date": "09-Aug"
  }
];

export const bookingDetailsData: Record<string, BookingDetail> = {
  "CB-180080002": {
    "id": "CB-180080002",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "229120444",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNSHA",
    "portOfLoad": "CNSHA",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx2",
    "crd": "Jun 24, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Jul 01, 2025",
    "portOfLoadEtd": "Jul 01, 2025",
    "portOfDischargeEta": "Aug 15, 2025",
    "placeOfDeliveryEta": "Aug 15, 2025",
    "requestedEtdWeek": "27",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "ELLY MAERSK 527W",
    "exception": false
  },
  "CB-180080004": {
    "id": "CB-180080004",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "229120447",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNSHA",
    "portOfLoad": "CNSHA",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx1",
    "crd": "Jun 21, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Jul 01, 2025",
    "portOfLoadEtd": "Jul 01, 2025",
    "portOfDischargeEta": "Aug 15, 2025",
    "placeOfDeliveryEta": "Aug 15, 2025",
    "requestedEtdWeek": "27",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "ELLY MAERSK 527W",
    "exception": false
  },
  "CB-180080003": {
    "id": "CB-180080003",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "229120413",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNSHA",
    "portOfLoad": "CNSHA",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx1",
    "crd": "Jun 25, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Jul 01, 2025",
    "portOfLoadEtd": "Jul 01, 2025",
    "portOfDischargeEta": "Aug 15, 2025",
    "placeOfDeliveryEta": "Aug 15, 2025",
    "requestedEtdWeek": "27",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "ELLY MAERSK 527W",
    "exception": false
  },
  "CB-180080005": {
    "id": "CB-180080005",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "229120450",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNSHA",
    "portOfLoad": "CNSHA",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx1",
    "crd": "Jun 23, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Jul 01, 2025",
    "portOfLoadEtd": "Jul 01, 2025",
    "portOfDischargeEta": "Aug 15, 2025",
    "placeOfDeliveryEta": "Aug 15, 2025",
    "requestedEtdWeek": "27",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "ELLY MAERSK 527W",
    "exception": false
  },
  "CB-180080001": {
    "id": "CB-180080001",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "229120426",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNSHA",
    "portOfLoad": "CNSHA",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx1",
    "crd": "Jun 24, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Jul 01, 2025",
    "portOfLoadEtd": "Jul 01, 2025",
    "portOfDischargeEta": "Aug 15, 2025",
    "placeOfDeliveryEta": "Aug 15, 2025",
    "requestedEtdWeek": "27",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "ELLY MAERSK 527W",
    "exception": false
  },
  "CB-180080006": {
    "id": "CB-180080006",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "228835193",
    "region": "IN W.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "INMUN",
    "portOfLoad": "INMUN",
    "portOfDischarge": "DEHAM",
    "placeOfDelivery": "DEHAM",
    "equipments": "20GPx1",
    "crd": "Jun 23, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Jul 01, 2025",
    "portOfLoadEtd": "Jul 08, 2025",
    "portOfDischargeEta": "Aug 10, 2025",
    "placeOfDeliveryEta": "Aug 10, 2025",
    "requestedEtdWeek": "27",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "MAERSK SEBAROK 327S",
    "exception": true
  },
  "CB-180080007": {
    "id": "CB-180080007",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "228849192",
    "region": "IN W.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "INMUN",
    "portOfLoad": "INMUN",
    "portOfDischarge": "DEHAM",
    "placeOfDelivery": "DEHAM",
    "equipments": "40HCx1",
    "crd": "Jun 23, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Jul 01, 2025",
    "portOfLoadEtd": "Jul 08, 2025",
    "portOfDischargeEta": "Aug 10, 2025",
    "placeOfDeliveryEta": "Aug 10, 2025",
    "requestedEtdWeek": "27",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "MAERSK SEBAROK 327S",
    "exception": true
  },
  "CB-185231641": {
    "id": "CB-185231641",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "264318575",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx1",
    "crd": "Jun 27, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Jul 05, 2025",
    "portOfLoadEtd": "Jul 05, 2025",
    "portOfDischargeEta": "Aug 15, 2025",
    "placeOfDeliveryEta": "Aug 15, 2025",
    "requestedEtdWeek": "27",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "ELLY MAERSK 527W",
    "exception": false
  },
  "CB-185231643": {
    "id": "CB-185231643",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "264318665",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40GPx1",
    "crd": "Jun 28, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Jul 05, 2025",
    "portOfLoadEtd": "Jul 05, 2025",
    "portOfDischargeEta": "Aug 15, 2025",
    "placeOfDeliveryEta": "Aug 15, 2025",
    "requestedEtdWeek": "27",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "ELLY MAERSK 527W",
    "exception": true
  },
  "CB-180080008": {
    "id": "CB-180080008",
    "customer": "Best Buy",
    "carrier": "COSU",
    "carrierBookingNumber": "6359789010",
    "region": "CN S.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNYTN",
    "portOfLoad": "CNYTN",
    "portOfDischarge": "USLGB",
    "placeOfDelivery": "USLGB",
    "equipments": "40RFx1",
    "crd": "Jul 05, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Jul 13, 2025",
    "portOfLoadEtd": "Jul 13, 2025",
    "portOfDischargeEta": "Jul 28, 2025",
    "placeOfDeliveryEta": "Jul 28, 2025",
    "requestedEtdWeek": "28",
    "contractNumber": "HOI23500",
    "tradeLane": "AP > NA",
    "vesselNVoyage": "COSCO NETHERLANDS 058E",
    "exception": false
  },
  "CB-180080011": {
    "id": "CB-180080011",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "229048498",
    "region": "IN W.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "INMUN",
    "portOfLoad": "INMUN",
    "portOfDischarge": "DEHAM",
    "placeOfDelivery": "DEHAM",
    "equipments": "40HCx1",
    "crd": "Jul 07, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Jul 22, 2025",
    "portOfLoadEtd": "Jul 22, 2025",
    "portOfDischargeEta": "Aug 24, 2025",
    "placeOfDeliveryEta": "Aug 24, 2025",
    "requestedEtdWeek": "29",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "ALULA EXPRESS 532W",
    "exception": true
  },
  "CB-180080009": {
    "id": "CB-180080009",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "229200436",
    "region": "IN W.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "INMOR",
    "portOfLoad": "INMUN",
    "portOfDischarge": "DEHAM",
    "placeOfDelivery": "DEHAM",
    "equipments": "20GPx1",
    "crd": "Jul 07, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Jul 15, 2025",
    "portOfLoadEtd": "Jul 22, 2025",
    "portOfDischargeEta": "Aug 17, 2025",
    "placeOfDeliveryEta": "Aug 17, 2025",
    "requestedEtdWeek": "29",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "MAERSK SEBAROK 329S",
    "exception": true
  },
  "CB-180080010": {
    "id": "CB-180080010",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "229233808",
    "region": "IN W.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "INMUN",
    "portOfLoad": "INMUN",
    "portOfDischarge": "DEHAM",
    "placeOfDelivery": "DEHAM",
    "equipments": "20GPx1",
    "crd": "Jul 07, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Jul 15, 2025",
    "portOfLoadEtd": "Jul 22, 2025",
    "portOfDischargeEta": "Aug 24, 2025",
    "placeOfDeliveryEta": "Aug 24, 2025",
    "requestedEtdWeek": "29",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "MAERSK SEBAROK 329S",
    "exception": true
  },
  "CB-180080014": {
    "id": "CB-180080014",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "229366525",
    "region": "IN W.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "INMOR",
    "portOfLoad": "INMUN",
    "portOfDischarge": "DEHAM",
    "placeOfDelivery": "DEHAM",
    "equipments": "20GPx1",
    "crd": "Jul 21, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Jul 29, 2025",
    "portOfLoadEtd": "Aug 05, 2025",
    "portOfDischargeEta": "Aug 31, 2025",
    "placeOfDeliveryEta": "Aug 31, 2025",
    "requestedEtdWeek": "31",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "SEASPAN JAKARTA 331S",
    "exception": true
  },
  "CB-180080015": {
    "id": "CB-180080015",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "229383930",
    "region": "IN W.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "INMUN",
    "portOfLoad": "INMUN",
    "portOfDischarge": "DEHAM",
    "placeOfDelivery": "DEHAM",
    "equipments": "40HCx1",
    "crd": "Jul 21, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Jul 29, 2025",
    "portOfLoadEtd": "Aug 05, 2025",
    "portOfDischargeEta": "Sep 07, 2025",
    "placeOfDeliveryEta": "Sep 07, 2025",
    "requestedEtdWeek": "31",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "SEASPAN JAKARTA 331S",
    "exception": true
  },
  "CB-180080013": {
    "id": "CB-180080013",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "228970692",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "DEBRV",
    "placeOfDelivery": "DEHBO",
    "equipments": "20GPx1",
    "crd": "Jul 23, 2025",
    "moveType": "CYP/D",
    "placeOfReceiptEtd": "Jul 31, 2025",
    "portOfLoadEtd": "Jul 31, 2025",
    "portOfDischargeEta": "Sep 06, 2025",
    "placeOfDeliveryEta": "Sep 06, 2025",
    "requestedEtdWeek": "31",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "MUNICH MAERSK 329W",
    "exception": false
  },
  "CB-180080016": {
    "id": "CB-180080016",
    "customer": "Nike",
    "carrier": "HDMU",
    "carrierBookingNumber": "NBOZ85904100",
    "region": "CN E.",
    "status": "canceled by carrier",
    "statusLevel": 2,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "USLGB",
    "placeOfDelivery": "USLGB",
    "equipments": "40HCx3",
    "crd": "Jul 23, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 02, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "31",
    "contractNumber": "CA235001",
    "tradeLane": "AP > NA",
    "vesselNVoyage": "ARISTOMENIS 022E",
    "exception": false
  },
  "CB-180080017": {
    "id": "CB-180080017",
    "customer": "Best Buy",
    "carrier": "HDMU",
    "carrierBookingNumber": "NBOZ01082600",
    "region": "CN E.",
    "status": "canceled by carrier",
    "statusLevel": 2,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "USLGB",
    "placeOfDelivery": "USLGB",
    "equipments": "40HCx6",
    "crd": "Jul 26, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 02, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "31",
    "contractNumber": "CA235001",
    "tradeLane": "AP > NA",
    "vesselNVoyage": "ARISTOMENIS 022E",
    "exception": false
  },
  "CB-180080018": {
    "id": "CB-180080018",
    "customer": "Best Buy",
    "carrier": "HDMU",
    "carrierBookingNumber": "NBOZ23075500",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "USLGB",
    "placeOfDelivery": "USLGB",
    "equipments": "40HCx5",
    "crd": "Jul 25, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 02, 2025",
    "portOfLoadEtd": "Aug 02, 2025",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "31",
    "contractNumber": "CA235001",
    "tradeLane": "AP > NA",
    "vesselNVoyage": "YM TROPHY 008E",
    "exception": false
  },
  "CB-180080019": {
    "id": "CB-180080019",
    "customer": "Lenovo",
    "carrier": "MSCU",
    "carrierBookingNumber": "177UGLGLN31883A",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "USLGB",
    "placeOfDelivery": "USLGB",
    "equipments": "40HCx3",
    "crd": "Jul 25, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 02, 2025",
    "portOfLoadEtd": "Aug 02, 2025",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "31",
    "contractNumber": "25-001WW",
    "tradeLane": "AP > NA",
    "vesselNVoyage": "MSC KATIE 330N",
    "exception": false
  },
  "CB-180080020": {
    "id": "CB-180080020",
    "customer": "Walmart",
    "carrier": "MSCU",
    "carrierBookingNumber": "177UGLGLN31882A",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "USLGB",
    "placeOfDelivery": "USLGB",
    "equipments": "40HCx3",
    "crd": "Jul 25, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 02, 2025",
    "portOfLoadEtd": "Aug 02, 2025",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "31",
    "contractNumber": "25-001WW",
    "tradeLane": "AP > NA",
    "vesselNVoyage": "MSC KATIE 330N",
    "exception": false
  },
  "CB-180080021": {
    "id": "CB-180080021",
    "customer": "Home Depot",
    "carrier": "MSCU",
    "carrierBookingNumber": "177UGLGLN31878A",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "USLGB",
    "placeOfDelivery": "USLGB",
    "equipments": "40HCx1",
    "crd": "Jul 25, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 02, 2025",
    "portOfLoadEtd": "Aug 02, 2025",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "31",
    "contractNumber": "25-001WW",
    "tradeLane": "AP > NA",
    "vesselNVoyage": "MSC KATIE 330N",
    "exception": false
  },
  "CB-180080023": {
    "id": "CB-180080023",
    "customer": "Triumph",
    "carrier": "MSCU",
    "carrierBookingNumber": "177UGLGLN31893A",
    "region": "CN E.",
    "status": "canceled by carrier",
    "statusLevel": 2,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "USLGB",
    "placeOfDelivery": "USLGB",
    "equipments": "40HCx4",
    "crd": "Jul 23, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 02, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "31",
    "contractNumber": "25-001WW",
    "tradeLane": "AP > NA",
    "vesselNVoyage": "MSC KATIE 330N",
    "exception": false
  },
  "CB-180080035": {
    "id": "CB-180080035",
    "customer": "Nike",
    "carrier": "HDMU",
    "carrierBookingNumber": "NBOZ01082600",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "USLGB",
    "placeOfDelivery": "USLGB",
    "equipments": "40HCx6",
    "crd": "Jul 24, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 02, 2025",
    "portOfLoadEtd": "Aug 02, 2025",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "31",
    "contractNumber": "CA235001",
    "tradeLane": "AP > NA",
    "vesselNVoyage": "ARISTOMENIS 022E",
    "exception": false
  },
  "CB-180080024": {
    "id": "CB-180080024",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "229412035",
    "region": "IN S.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "INTUT",
    "portOfLoad": "INTUT",
    "portOfDischarge": "DEBRV",
    "placeOfDelivery": "DEHBO",
    "equipments": "20GPx1",
    "crd": "Jul 28, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 05, 2025",
    "portOfLoadEtd": "Aug 05, 2025",
    "portOfDischargeEta": "Sep 07, 2025",
    "placeOfDeliveryEta": "Sep 07, 2025",
    "requestedEtdWeek": "32",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "KUO LUNG 562S",
    "exception": false
  },
  "CB-180080036": {
    "id": "CB-180080036",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "229121670",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "DEBRV",
    "placeOfDelivery": "DEHBO",
    "equipments": "40HCx1",
    "crd": "Jul 30, 2025",
    "moveType": "CYP/D",
    "placeOfReceiptEtd": "Aug 07, 2025",
    "portOfLoadEtd": "Aug 07, 2025",
    "portOfDischargeEta": "Sep 13, 2025",
    "placeOfDeliveryEta": "Sep 13, 2025",
    "requestedEtdWeek": "32",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "MORTEN MAERSK 330W",
    "exception": false
  },
  "CB-180080037": {
    "id": "CB-180080037",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "229121969",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "DEBRV",
    "placeOfDelivery": "DEHBO",
    "equipments": "40HCx1",
    "crd": "Jul 30, 2025",
    "moveType": "CYP/D",
    "placeOfReceiptEtd": "Aug 07, 2025",
    "portOfLoadEtd": "Aug 07, 2025",
    "portOfDischargeEta": "Sep 13, 2025",
    "placeOfDeliveryEta": "Sep 13, 2025",
    "requestedEtdWeek": "32",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "MORTEN MAERSK 330W",
    "exception": false
  },
  "CB-180080051": {
    "id": "CB-180080051",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "229121825",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "DEBRV",
    "placeOfDelivery": "DEHBO",
    "equipments": "40HCx1",
    "crd": "Jul 30, 2025",
    "moveType": "CYP/D",
    "placeOfReceiptEtd": "Aug 07, 2025",
    "portOfLoadEtd": "Aug 07, 2025",
    "portOfDischargeEta": "Sep 13, 2025",
    "placeOfDeliveryEta": "Sep 13, 2025",
    "requestedEtdWeek": "32",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "MORTEN MAERSK 330W",
    "exception": false
  },
  "CB-180080052": {
    "id": "CB-180080052",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "229121822",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "DEBRV",
    "placeOfDelivery": "DEHBO",
    "equipments": "40HCx1",
    "crd": "Jul 30, 2025",
    "moveType": "CYP/D",
    "placeOfReceiptEtd": "Aug 07, 2025",
    "portOfLoadEtd": "Aug 15, 2025",
    "portOfDischargeEta": "Sep 13, 2025",
    "placeOfDeliveryEta": "Sep 13, 2025",
    "requestedEtdWeek": "32",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "MARIBO MAERSK 331W",
    "exception": true
  },
  "CB-180080025": {
    "id": "CB-180080025",
    "customer": "Triumph",
    "carrier": "HCLU",
    "carrierBookingNumber": "292861395",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx2",
    "crd": "Jul 31, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 08, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "32",
    "contractNumber": "HH2000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "ESTELLE MAERSK 532W",
    "exception": false
  },
  "CB-180080026": {
    "id": "CB-180080026",
    "customer": "Triumph",
    "carrier": "HCLU",
    "carrierBookingNumber": "292861394",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx2",
    "crd": "Jul 31, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 08, 2025",
    "portOfLoadEtd": "Aug 09, 2025",
    "portOfDischargeEta": "Sep 15, 2025",
    "placeOfDeliveryEta": "Sep 15, 2025",
    "requestedEtdWeek": "32",
    "contractNumber": "HH2000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "ESTELLE MAERSK 532W",
    "exception": false
  },
  "CB-180080027": {
    "id": "CB-180080027",
    "customer": "Home Depot",
    "carrier": "MAEU",
    "carrierBookingNumber": "292861392",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx1",
    "crd": "Aug 01, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 08, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "32",
    "contractNumber": "90-0090",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "ESTELLE MAERSK 532W",
    "exception": false
  },
  "CB-180080038": {
    "id": "CB-180080038",
    "customer": "Costco",
    "carrier": "MAEU",
    "carrierBookingNumber": "292861440",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx3",
    "crd": "Jul 31, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 08, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "32",
    "contractNumber": "90-0090",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "ESTELLE MAERSK 532W",
    "exception": false
  },
  "CB-180080039": {
    "id": "CB-180080039",
    "customer": "Triumph",
    "carrier": "MAEU",
    "carrierBookingNumber": "292861484",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx2",
    "crd": "Jul 31, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 08, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "32",
    "contractNumber": "90-0090",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "ESTELLE MAERSK 532W",
    "exception": false
  },
  "CB-186512583": {
    "id": "CB-186512583",
    "customer": "Home Depot",
    "carrier": "MAEU",
    "carrierBookingNumber": "264319062",
    "region": "CN E.",
    "status": "canceled by carrier",
    "statusLevel": 2,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx6",
    "crd": "Jul 31, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 08, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "32",
    "contractNumber": "90-0090",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "ESTELLE MAERSK 532W",
    "exception": false
  },
  "CB-180080012": {
    "id": "CB-180080012",
    "customer": "Nike",
    "carrier": "EGLV",
    "carrierBookingNumber": "EGLV143370387491",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "USLAX",
    "placeOfDelivery": "USLAX",
    "equipments": "40HCx2",
    "crd": "Jul 31, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 08, 2025",
    "portOfLoadEtd": "Aug 08, 2025",
    "portOfDischargeEta": "Aug 08, 2025",
    "placeOfDeliveryEta": "Aug 08, 2025",
    "requestedEtdWeek": "32",
    "contractNumber": "SC50089",
    "tradeLane": "AP > NA",
    "vesselNVoyage": "EVER FRANK 1076-015E",
    "exception": false
  },
  "CB-180080028": {
    "id": "CB-180080028",
    "customer": "Home Depot",
    "carrier": "EGLV",
    "carrierBookingNumber": "EGLV143370388047",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "USLAX",
    "placeOfDelivery": "USLAX",
    "equipments": "40HCx1",
    "crd": "Jul 30, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 08, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "32",
    "contractNumber": "SC50089",
    "tradeLane": "AP > NA",
    "vesselNVoyage": "EVER FRANK 1076-015E",
    "exception": false
  },
  "CB-180080029": {
    "id": "CB-180080029",
    "customer": "Home Depot",
    "carrier": "EGLV",
    "carrierBookingNumber": "EGLV143370388102",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "USLAX",
    "placeOfDelivery": "USLAX",
    "equipments": "40HCx1",
    "crd": "Jul 30, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 08, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "32",
    "contractNumber": "SC50089",
    "tradeLane": "AP > NA",
    "vesselNVoyage": "EVER FRANK 1076-015E",
    "exception": false
  },
  "CB-180080030": {
    "id": "CB-180080030",
    "customer": "Nike",
    "carrier": "EGLV",
    "carrierBookingNumber": "EGLV143370387997",
    "region": "CN E.",
    "status": "canceled by requestor",
    "statusLevel": 2,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "USLAX",
    "placeOfDelivery": "USLAX",
    "equipments": "40GPx2",
    "crd": "Jul 30, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 08, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "32",
    "contractNumber": "SC50089",
    "tradeLane": "AP > NA",
    "vesselNVoyage": "EVER FRANK 1076-015E",
    "exception": false
  },
  "CB-180080031": {
    "id": "CB-180080031",
    "customer": "Lenovo",
    "carrier": "CMDU",
    "carrierBookingNumber": "TSL202307210987",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx1",
    "crd": "Aug 02, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 11, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080032": {
    "id": "CB-180080032",
    "customer": "Lenovo",
    "carrier": "CMDU",
    "carrierBookingNumber": "TSL202307210986",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "45HCx3",
    "crd": "Aug 02, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 11, 2025",
    "portOfLoadEtd": "Aug 11, 2025",
    "portOfDischargeEta": "Sep 21, 2025",
    "placeOfDeliveryEta": "Sep 21, 2025",
    "requestedEtdWeek": "33",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080033": {
    "id": "CB-180080033",
    "customer": "Lenovo",
    "carrier": "CMDU",
    "carrierBookingNumber": "TSL202307210989",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40GPx1",
    "crd": "Aug 02, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 11, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080034": {
    "id": "CB-180080034",
    "customer": "Lenovo",
    "carrier": "CMDU",
    "carrierBookingNumber": "COSU6361812210",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx1",
    "crd": "Aug 02, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 11, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080040": {
    "id": "CB-180080040",
    "customer": "Decathlon",
    "carrier": "CMDU",
    "carrierBookingNumber": "TSL202307240107",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "45HCx2",
    "crd": "Aug 03, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 11, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080041": {
    "id": "CB-180080041",
    "customer": "Decathlon",
    "carrier": "CMDU",
    "carrierBookingNumber": "TSL202307240104",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "GBFXT",
    "placeOfDelivery": "GBFXT",
    "equipments": "40HCx4",
    "crd": "Aug 02, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 11, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080042": {
    "id": "CB-180080042",
    "customer": "Walmart",
    "carrier": "CMDU",
    "carrierBookingNumber": "TSL202307240105",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "45HCx2",
    "crd": "Aug 03, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 11, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080043": {
    "id": "CB-180080043",
    "customer": "Walmart",
    "carrier": "CMDU",
    "carrierBookingNumber": "TSL202307240106",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "45HCx1",
    "crd": "Aug 02, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 11, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080044": {
    "id": "CB-180080044",
    "customer": "Lenovo",
    "carrier": "CMDU",
    "carrierBookingNumber": "TSL202307240131",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx1, 45HCx2",
    "crd": "Aug 04, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 11, 2025",
    "portOfLoadEtd": "Aug 11, 2025",
    "portOfDischargeEta": "Sep 21, 2025",
    "placeOfDeliveryEta": "Sep 21, 2025",
    "requestedEtdWeek": "33",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080045": {
    "id": "CB-180080045",
    "customer": "Lenovo",
    "carrier": "COSU",
    "carrierBookingNumber": "TSL202307240130",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "USLGB",
    "placeOfDelivery": "USLGB",
    "equipments": "40HCx1",
    "crd": "Aug 01, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 08, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "32",
    "contractNumber": "SSM25008",
    "tradeLane": "AP > NA",
    "vesselNVoyage": "CSCL EAST CHINA SEA 058E",
    "exception": false
  },
  "CB-180080046": {
    "id": "CB-180080046",
    "customer": "Lenovo",
    "carrier": "COSU",
    "carrierBookingNumber": "TSL202307240132",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "USLGB",
    "placeOfDelivery": "USLGB",
    "equipments": "40GPx1, 40HCx1",
    "crd": "Aug 01, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 08, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "32",
    "contractNumber": "SSM25008",
    "tradeLane": "AP > NA",
    "vesselNVoyage": "CSCL EAST CHINA SEA 058E",
    "exception": false
  },
  "CB-180080047": {
    "id": "CB-180080047",
    "customer": "Costco",
    "carrier": "COSU",
    "carrierBookingNumber": "TSL202307240129",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "USLGB",
    "placeOfDelivery": "USLGB",
    "equipments": "40GPx2",
    "crd": "Aug 01, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 08, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "32",
    "contractNumber": "SSM25008",
    "tradeLane": "AP > NA",
    "vesselNVoyage": "CSCL EAST CHINA SEA 058E",
    "exception": false
  },
  "CB-180080048": {
    "id": "CB-180080048",
    "customer": "Home Depot",
    "carrier": "COSU",
    "carrierBookingNumber": "TSL202307240134",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "USLGB",
    "placeOfDelivery": "USLGB",
    "equipments": "40HCx1",
    "crd": "Aug 01, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 08, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "32",
    "contractNumber": "SSM25008",
    "tradeLane": "AP > NA",
    "vesselNVoyage": "CSCL EAST CHINA SEA 058E",
    "exception": false
  },
  "CB-180080049": {
    "id": "CB-180080049",
    "customer": "Home Depot",
    "carrier": "COSU",
    "carrierBookingNumber": "TSL202307240133",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "USLGB",
    "placeOfDelivery": "USLGB",
    "equipments": "40HCx1",
    "crd": "Aug 01, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 08, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "32",
    "contractNumber": "SSM25008",
    "tradeLane": "AP > NA",
    "vesselNVoyage": "CSCL EAST CHINA SEA 058E",
    "exception": false
  },
  "CB-180080050": {
    "id": "CB-180080050",
    "customer": "Home Depot",
    "carrier": "COSU",
    "carrierBookingNumber": "TSL202307240159",
    "region": "CN E.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNNGB",
    "portOfLoad": "CNNGB",
    "portOfDischarge": "USLGB",
    "placeOfDelivery": "USLGB",
    "equipments": "45HCx2",
    "crd": "Aug 01, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 08, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "32",
    "contractNumber": "SSM25008",
    "tradeLane": "AP > NA",
    "vesselNVoyage": "CSCL EAST CHINA SEA 058E",
    "exception": false
  },
  "CB-180080067": {
    "id": "CB-180080067",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "TBD",
    "region": "CN N.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNTAO",
    "portOfLoad": "CNTAO",
    "portOfDischarge": "DEHAM",
    "placeOfDelivery": "DEHAM",
    "equipments": "40HCx1",
    "crd": "Aug 05, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 12, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "MUNICH MAERSK 533W",
    "exception": false
  },
  "CB-180080068": {
    "id": "CB-180080068",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "TBD",
    "region": "CN N.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNTAO",
    "portOfLoad": "CNTAO",
    "portOfDischarge": "DEHAM",
    "placeOfDelivery": "DEHAM",
    "equipments": "40HCx1",
    "crd": "Aug 04, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 12, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "MUNICH MAERSK 533W",
    "exception": false
  },
  "CB-180080069": {
    "id": "CB-180080069",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "TBD",
    "region": "CN N.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNTAO",
    "portOfLoad": "CNTAO",
    "portOfDischarge": "DEHAM",
    "placeOfDelivery": "DEHAM",
    "equipments": "40HCx1",
    "crd": "Aug 04, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 12, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "MUNICH MAERSK 533W",
    "exception": false
  },
  "CB-180080070": {
    "id": "CB-180080070",
    "customer": "H&M Home",
    "carrier": "MAEU",
    "carrierBookingNumber": "TBD",
    "region": "CN N.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNTAO",
    "portOfLoad": "CNTAO",
    "portOfDischarge": "DEHAM",
    "placeOfDelivery": "DEHAM",
    "equipments": "40HCx1",
    "crd": "Aug 05, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 12, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "MUNICH MAERSK 533W",
    "exception": false
  },
  "CB-185901648": {
    "id": "CB-185901648",
    "customer": "H&M Home",
    "carrier": "HLCU",
    "carrierBookingNumber": "38538244",
    "region": "CN S.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNYTN",
    "portOfLoad": "CNYTN",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "45HCx1",
    "crd": "Aug 05, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 16, 2025",
    "portOfLoadEtd": "Aug 16, 2025",
    "portOfDischargeEta": "Sep 15, 2025",
    "placeOfDeliveryEta": "Sep 15, 2025",
    "requestedEtdWeek": "33",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "MUNICH MAERSK 532W",
    "exception": true
  },
  "CB-180080022": {
    "id": "CB-180080022",
    "customer": "H&M Home",
    "carrier": "HLCU",
    "carrierBookingNumber": "37549729",
    "region": "CN S.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNYTN",
    "portOfLoad": "CNYTN",
    "portOfDischarge": "PLGDY",
    "placeOfDelivery": "PLGDY",
    "equipments": "45HCx1",
    "crd": "Aug 05, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 12, 2025",
    "portOfLoadEtd": "Aug 12, 2025",
    "portOfDischargeEta": "Sep 30, 2025",
    "placeOfDeliveryEta": "Sep 30, 2025",
    "requestedEtdWeek": "33",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "MARGRETHE MAERSK  532W",
    "exception": false
  },
  "CB-180080053": {
    "id": "CB-180080053",
    "customer": "Best Buy",
    "carrier": "MAEU",
    "carrierBookingNumber": "TBD",
    "region": "CN S.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNYTN",
    "portOfLoad": "CNYTN",
    "portOfDischarge": "DEHAM",
    "placeOfDelivery": "DEHAM",
    "equipments": "40HCx4",
    "crd": "Aug 07, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 15, 2025",
    "portOfLoadEtd": "Aug 16, 2025",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "MUNICH MAERSK 533W",
    "exception": false
  },
  "CB-264229065": {
    "id": "CB-264229065",
    "customer": "Best Buy",
    "carrier": "HCLU",
    "carrierBookingNumber": "13545758",
    "region": "CN S.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNYTN",
    "portOfLoad": "CNYTN",
    "portOfDischarge": "DEHAM",
    "placeOfDelivery": "DEHAM",
    "equipments": "45HCx1",
    "crd": "Aug 07, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 15, 2025",
    "portOfLoadEtd": "Aug 16, 2025",
    "portOfDischargeEta": "Sep 23, 2025",
    "placeOfDeliveryEta": "Sep 23, 2025",
    "requestedEtdWeek": "33",
    "contractNumber": "HH2000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "MUNICH MAERSK 533W",
    "exception": false
  },
  "CB-180080054": {
    "id": "CB-180080054",
    "customer": "Nike",
    "carrier": "CMDU",
    "carrierBookingNumber": "6362312780",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNSHA",
    "portOfLoad": "CNSHA",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx6",
    "crd": "Jul 31, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 09, 2025",
    "portOfLoadEtd": "Aug 09, 2025",
    "portOfDischargeEta": "Sep 21, 2025",
    "placeOfDeliveryEta": "Sep 21, 2025",
    "requestedEtdWeek": "32",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080055": {
    "id": "CB-180080055",
    "customer": "Decathlon",
    "carrier": "CMDU",
    "carrierBookingNumber": "6362376580",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNSHA",
    "portOfLoad": "CNSHA",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx1, 45HCx2",
    "crd": "Aug 02, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 09, 2025",
    "portOfLoadEtd": "Aug 09, 2025",
    "portOfDischargeEta": "Sep 21, 2025",
    "placeOfDeliveryEta": "Sep 21, 2025",
    "requestedEtdWeek": "32",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080056": {
    "id": "CB-180080056",
    "customer": "Costco",
    "carrier": "CMDU",
    "carrierBookingNumber": "6362376650",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNSHA",
    "portOfLoad": "CNSHA",
    "portOfDischarge": "GBFXT",
    "placeOfDelivery": "GBFXT",
    "equipments": "40HCx1",
    "crd": "Aug 02, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 09, 2025",
    "portOfLoadEtd": "Aug 09, 2025",
    "portOfDischargeEta": "Sep 21, 2025",
    "placeOfDeliveryEta": "Sep 21, 2025",
    "requestedEtdWeek": "32",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080057": {
    "id": "CB-180080057",
    "customer": "Costco",
    "carrier": "CMDU",
    "carrierBookingNumber": "6362376570",
    "region": "CN E.",
    "status": "confirmed",
    "statusLevel": 5,
    "placeOfReceipt": "CNSHA",
    "portOfLoad": "CNSHA",
    "portOfDischarge": "GBFXT",
    "placeOfDelivery": "GBFXT",
    "equipments": "40HCx1",
    "crd": "Aug 01, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 09, 2025",
    "portOfLoadEtd": "Aug 09, 2025",
    "portOfDischargeEta": "Sep 25, 2025",
    "placeOfDeliveryEta": "Sep 25, 2025",
    "requestedEtdWeek": "32",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080058": {
    "id": "CB-180080058",
    "customer": "Lenovo",
    "carrier": "CMDU",
    "carrierBookingNumber": "6362376850",
    "region": "CN S.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNYTN",
    "portOfLoad": "CNYTN",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx1",
    "crd": "Aug 08, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 15, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080059": {
    "id": "CB-180080059",
    "customer": "Lenovo",
    "carrier": "CMDU",
    "carrierBookingNumber": "6362376351",
    "region": "CN S.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNYTN",
    "portOfLoad": "CNYTN",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx1",
    "crd": "Aug 07, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 15, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080060": {
    "id": "CB-180080060",
    "customer": "Lenovo",
    "carrier": "CMDU",
    "carrierBookingNumber": "6362376740",
    "region": "CN S.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNYTN",
    "portOfLoad": "CNYTN",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx1",
    "crd": "Aug 08, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 15, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080061": {
    "id": "CB-180080061",
    "customer": "Lenovo",
    "carrier": "CMDU",
    "carrierBookingNumber": "6362377450",
    "region": "CN S.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNYTN",
    "portOfLoad": "CNYTN",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx1",
    "crd": "Aug 07, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 15, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080062": {
    "id": "CB-180080062",
    "customer": "Triumph",
    "carrier": "CMDU",
    "carrierBookingNumber": "6362377510",
    "region": "CN S.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNYTN",
    "portOfLoad": "CNYTN",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx1",
    "crd": "Aug 08, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 15, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080063": {
    "id": "CB-180080063",
    "customer": "Triumph",
    "carrier": "CMDU",
    "carrierBookingNumber": "6362377310",
    "region": "CN S.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNYTN",
    "portOfLoad": "CNYTN",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx1",
    "crd": "Aug 09, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 15, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080064": {
    "id": "CB-180080064",
    "customer": "Triumph",
    "carrier": "CMDU",
    "carrierBookingNumber": "6362377500",
    "region": "CN S.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNYTN",
    "portOfLoad": "CNYTN",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx1",
    "crd": "Aug 08, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 15, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080065": {
    "id": "CB-180080065",
    "customer": "Walmart",
    "carrier": "CMDU",
    "carrierBookingNumber": "6362377460",
    "region": "CN S.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNYTN",
    "portOfLoad": "CNYTN",
    "portOfDischarge": "NLRTM",
    "placeOfDelivery": "NLRTM",
    "equipments": "40HCx1",
    "crd": "Aug 08, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 15, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  },
  "CB-180080066": {
    "id": "CB-180080066",
    "customer": "Starbucks",
    "carrier": "CMDU",
    "carrierBookingNumber": "6362377550",
    "region": "CN S.",
    "status": "pending",
    "statusLevel": 3,
    "placeOfReceipt": "CNYTN",
    "portOfLoad": "CNYTN",
    "portOfDischarge": "GBFXT",
    "placeOfDelivery": "GBFXT",
    "equipments": "40HCx1",
    "crd": "Aug 09, 2025",
    "moveType": "CYP/CYP",
    "placeOfReceiptEtd": "Aug 15, 2025",
    "portOfLoadEtd": "",
    "portOfDischargeEta": "",
    "placeOfDeliveryEta": "",
    "requestedEtdWeek": "33",
    "contractNumber": "89-0000",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "EVER ARM 0LAKVW1MA",
    "exception": false
  }
} ;

export const linkedBookingsData: Record<string, LinkedBooking[]> = {
  "CB-180080002": [
    {
      "id": "1",
      "shipper_bkg_no": "202347293044",
      "crd_date": "24-Jun",
      "consignee": "H&M Home",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080004": [
    {
      "id": "2",
      "shipper_bkg_no": "202347293046",
      "crd_date": "21-Jun",
      "consignee": "H&M Home",
      "shipWindow": "10 days"
    }
  ],
  "CB-180080003": [
    {
      "id": "3",
      "shipper_bkg_no": "202347293048",
      "crd_date": "25-Jun",
      "consignee": "H&M Home",
      "shipWindow": "6 days"
    }
  ],
  "CB-180080005": [
    {
      "id": "4",
      "shipper_bkg_no": "202347293049",
      "crd_date": "23-Jun",
      "consignee": "H&M Home",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080001": [
    {
      "id": "5",
      "shipper_bkg_no": "202347293050",
      "crd_date": "24-Jun",
      "consignee": "H&M Home",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080006": [
    {
      "id": "6",
      "shipper_bkg_no": "202347293045",
      "crd_date": "23-Jun",
      "consignee": "H&M Home",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080007": [
    {
      "id": "7",
      "shipper_bkg_no": "202347220982",
      "crd_date": "23-Jun",
      "consignee": "H&M Home",
      "shipWindow": "8 days"
    }
  ],
  "CB-185231641": [
    {
      "id": "8",
      "shipper_bkg_no": "202347356278",
      "crd_date": "27-Jun",
      "consignee": "H&M Home",
      "shipWindow": "8 days"
    }
  ],
  "CB-185231643": [
    {
      "id": "9",
      "shipper_bkg_no": "202347356278",
      "crd_date": "28-Jun",
      "consignee": "H&M Home",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080008": [
    {
      "id": "10",
      "shipper_bkg_no": "202347261043",
      "crd_date": "05-Jul",
      "consignee": "Best Buy",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080011": [
    {
      "id": "11",
      "shipper_bkg_no": "202347346614",
      "crd_date": "07-Jul",
      "consignee": "H&M Home",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080009": [
    {
      "id": "12",
      "shipper_bkg_no": "202347240915",
      "crd_date": "07-Jul",
      "consignee": "H&M Home",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080010": [
    {
      "id": "13",
      "shipper_bkg_no": "202347268065",
      "crd_date": "07-Jul",
      "consignee": "H&M Home",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080014": [
    {
      "id": "14",
      "shipper_bkg_no": "202347314945",
      "crd_date": "21-Jul",
      "consignee": "H&M Home",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080015": [
    {
      "id": "15",
      "shipper_bkg_no": "202347406636",
      "crd_date": "21-Jul",
      "consignee": "H&M Home",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080013": [
    {
      "id": "16",
      "shipper_bkg_no": "202347194539",
      "crd_date": "23-Jul",
      "consignee": "H&M Home",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080016": [
    {
      "id": "17",
      "shipper_bkg_no": "202347292223",
      "crd_date": "23-Jul",
      "consignee": "Nike",
      "shipWindow": "10 days"
    }
  ],
  "CB-180080017": [
    {
      "id": "18",
      "shipper_bkg_no": "202347300260",
      "crd_date": "26-Jul",
      "consignee": "Best Buy",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080018": [
    {
      "id": "19",
      "shipper_bkg_no": "202347375215",
      "crd_date": "25-Jul",
      "consignee": "Best Buy",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080019": [
    {
      "id": "20",
      "shipper_bkg_no": "202347423449",
      "crd_date": "25-Jul",
      "consignee": "Lenovo",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080020": [
    {
      "id": "21",
      "shipper_bkg_no": "202347423480",
      "crd_date": "25-Jul",
      "consignee": "Walmart",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080021": [
    {
      "id": "22",
      "shipper_bkg_no": "202347318180",
      "crd_date": "25-Jul",
      "consignee": "Home Depot",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080023": [
    {
      "id": "23",
      "shipper_bkg_no": "202347307339",
      "crd_date": "23-Jul",
      "consignee": "Triumph",
      "shipWindow": "10 days"
    }
  ],
  "CB-180080035": [
    {
      "id": "24",
      "shipper_bkg_no": "202347498157",
      "crd_date": "24-Jul",
      "consignee": "Nike",
      "shipWindow": "9 days"
    }
  ],
  "CB-180080024": [
    {
      "id": "25",
      "shipper_bkg_no": "202347392887",
      "crd_date": "28-Jul",
      "consignee": "H&M Home",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080036": [
    {
      "id": "26",
      "shipper_bkg_no": "202347291829",
      "crd_date": "30-Jul",
      "consignee": "H&M Home",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080037": [
    {
      "id": "27",
      "shipper_bkg_no": "202347310239",
      "crd_date": "30-Jul",
      "consignee": "H&M Home",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080051": [
    {
      "id": "28",
      "shipper_bkg_no": "202347314010",
      "crd_date": "30-Jul",
      "consignee": "H&M Home",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080052": [
    {
      "id": "29",
      "shipper_bkg_no": "202347433357",
      "crd_date": "30-Jul",
      "consignee": "H&M Home",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080025": [
    {
      "id": "30",
      "shipper_bkg_no": "202347320098",
      "crd_date": "31-Jul",
      "consignee": "Triumph",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080026": [
    {
      "id": "31",
      "shipper_bkg_no": "202347341746",
      "crd_date": "31-Jul",
      "consignee": "Triumph",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080027": [
    {
      "id": "32",
      "shipper_bkg_no": "202347238889, 202347443978",
      "crd_date": "01-Aug",
      "consignee": "Home Depot",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080038": [
    {
      "id": "33",
      "shipper_bkg_no": "202347471558, 202347291582, 202347326823, 202347465267, 202347403134, 202347384223, 202347185490, 202347056575, 202347374241, 202347364836, 202347355804, 202347338355",
      "crd_date": "31-Jul",
      "consignee": "Costco",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080039": [
    {
      "id": "34",
      "shipper_bkg_no": "202347239816",
      "crd_date": "31-Jul",
      "consignee": "Triumph",
      "shipWindow": "8 days"
    }
  ],
  "CB-186512583": [
    {
      "id": "35",
      "shipper_bkg_no": "202347228216",
      "crd_date": "31-Jul",
      "consignee": "Home Depot",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080012": [
    {
      "id": "36",
      "shipper_bkg_no": "202347316017",
      "crd_date": "31-Jul",
      "consignee": "Nike",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080028": [
    {
      "id": "37",
      "shipper_bkg_no": "202347333994",
      "crd_date": "30-Jul",
      "consignee": "Home Depot",
      "shipWindow": "9 days"
    }
  ],
  "CB-180080029": [
    {
      "id": "38",
      "shipper_bkg_no": "202347309368",
      "crd_date": "30-Jul",
      "consignee": "Home Depot",
      "shipWindow": "9 days"
    }
  ],
  "CB-180080030": [
    {
      "id": "39",
      "shipper_bkg_no": "202347466828",
      "crd_date": "30-Jul",
      "consignee": "Nike",
      "shipWindow": "9 days"
    }
  ],
  "CB-180080031": [
    {
      "id": "40",
      "shipper_bkg_no": "202347424080",
      "crd_date": "02-Aug",
      "consignee": "Lenovo",
      "shipWindow": "9 days"
    }
  ],
  "CB-180080032": [
    {
      "id": "41",
      "shipper_bkg_no": "202347398240",
      "crd_date": "02-Aug",
      "consignee": "Lenovo",
      "shipWindow": "9 days"
    }
  ],
  "CB-180080033": [
    {
      "id": "42",
      "shipper_bkg_no": "202347393130",
      "crd_date": "02-Aug",
      "consignee": "Lenovo",
      "shipWindow": "9 days"
    }
  ],
  "CB-180080034": [
    {
      "id": "43",
      "shipper_bkg_no": "202347384578",
      "crd_date": "02-Aug",
      "consignee": "Lenovo",
      "shipWindow": "9 days"
    }
  ],
  "CB-180080040": [
    {
      "id": "44",
      "shipper_bkg_no": "202347308733",
      "crd_date": "03-Aug",
      "consignee": "Decathlon",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080041": [
    {
      "id": "45",
      "shipper_bkg_no": "202347318607",
      "crd_date": "02-Aug",
      "consignee": "Decathlon",
      "shipWindow": "9 days"
    }
  ],
  "CB-180080042": [
    {
      "id": "46",
      "shipper_bkg_no": "202347347566",
      "crd_date": "03-Aug",
      "consignee": "Walmart",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080043": [
    {
      "id": "47",
      "shipper_bkg_no": "202347381798",
      "crd_date": "02-Aug",
      "consignee": "Walmart",
      "shipWindow": "9 days"
    }
  ],
  "CB-180080044": [
    {
      "id": "48",
      "shipper_bkg_no": "202347455376",
      "crd_date": "04-Aug",
      "consignee": "Lenovo",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080045": [
    {
      "id": "49",
      "shipper_bkg_no": "202347214171",
      "crd_date": "01-Aug",
      "consignee": "Lenovo",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080046": [
    {
      "id": "50",
      "shipper_bkg_no": "202347207051",
      "crd_date": "01-Aug",
      "consignee": "Lenovo",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080047": [
    {
      "id": "51",
      "shipper_bkg_no": "202347206887",
      "crd_date": "01-Aug",
      "consignee": "Costco",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080048": [
    {
      "id": "52",
      "shipper_bkg_no": "202347288477",
      "crd_date": "01-Aug",
      "consignee": "Home Depot",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080049": [
    {
      "id": "53",
      "shipper_bkg_no": "202347310977",
      "crd_date": "01-Aug",
      "consignee": "Home Depot",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080050": [
    {
      "id": "54",
      "shipper_bkg_no": "202347351762",
      "crd_date": "01-Aug",
      "consignee": "Home Depot",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080067": [
    {
      "id": "55",
      "shipper_bkg_no": "202347523428",
      "crd_date": "05-Aug",
      "consignee": "H&M Home",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080068": [
    {
      "id": "56",
      "shipper_bkg_no": "202347523667",
      "crd_date": "04-Aug",
      "consignee": "H&M Home",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080069": [
    {
      "id": "57",
      "shipper_bkg_no": "202347523845",
      "crd_date": "04-Aug",
      "consignee": "H&M Home",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080070": [
    {
      "id": "58",
      "shipper_bkg_no": "202347524036",
      "crd_date": "05-Aug",
      "consignee": "H&M Home",
      "shipWindow": "7 days"
    }
  ],
  "CB-185901648": [
    {
      "id": "59",
      "shipper_bkg_no": "",
      "crd_date": "05-Aug",
      "consignee": "H&M Home",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080022": [
    {
      "id": "60",
      "shipper_bkg_no": "202347409533",
      "crd_date": "05-Aug",
      "consignee": "H&M Home",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080053": [
    {
      "id": "61",
      "shipper_bkg_no": "202347449932",
      "crd_date": "07-Aug",
      "consignee": "Best Buy",
      "shipWindow": "8 days"
    }
  ],
  "CB-264229065": [
    {
      "id": "62",
      "shipper_bkg_no": "202347449845",
      "crd_date": "07-Aug",
      "consignee": "Best Buy",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080054": [
    {
      "id": "63",
      "shipper_bkg_no": "202347454779",
      "crd_date": "31-Jul",
      "consignee": "Nike",
      "shipWindow": "9 days"
    }
  ],
  "CB-180080055": [
    {
      "id": "64",
      "shipper_bkg_no": "202347438464",
      "crd_date": "02-Aug",
      "consignee": "Decathlon",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080056": [
    {
      "id": "65",
      "shipper_bkg_no": "202347438464",
      "crd_date": "02-Aug",
      "consignee": "Costco",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080057": [
    {
      "id": "66",
      "shipper_bkg_no": "202347423479",
      "crd_date": "01-Aug",
      "consignee": "Costco",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080058": [
    {
      "id": "67",
      "shipper_bkg_no": "202347483465",
      "crd_date": "08-Aug",
      "consignee": "Lenovo",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080059": [
    {
      "id": "68",
      "shipper_bkg_no": "202347482774",
      "crd_date": "07-Aug",
      "consignee": "Lenovo",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080060": [
    {
      "id": "69",
      "shipper_bkg_no": "202347482774",
      "crd_date": "08-Aug",
      "consignee": "Lenovo",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080061": [
    {
      "id": "70",
      "shipper_bkg_no": "202347482774",
      "crd_date": "07-Aug",
      "consignee": "Lenovo",
      "shipWindow": "8 days"
    }
  ],
  "CB-180080062": [
    {
      "id": "71",
      "shipper_bkg_no": "202347482774",
      "crd_date": "08-Aug",
      "consignee": "Triumph",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080063": [
    {
      "id": "72",
      "shipper_bkg_no": "202347482774",
      "crd_date": "09-Aug",
      "consignee": "Triumph",
      "shipWindow": "6 days"
    }
  ],
  "CB-180080064": [
    {
      "id": "73",
      "shipper_bkg_no": "202347323346",
      "crd_date": "08-Aug",
      "consignee": "Triumph",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080065": [
    {
      "id": "74",
      "shipper_bkg_no": "202347323346",
      "crd_date": "08-Aug",
      "consignee": "Walmart",
      "shipWindow": "7 days"
    }
  ],
  "CB-180080066": [
    {
      "id": "75",
      "shipper_bkg_no": "202347323346",
      "crd_date": "09-Aug",
      "consignee": "Starbucks",
      "shipWindow": "6 days"
    }
  ]
};
// Activities Data
export const activitiesData: Record<string, ActivityItem[]> = {
  "CB-180080002": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jun 24",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jun 24",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-229120444 confirmed by carrier",
      "date": "Jun 25",
      "details": "ETD: Jul 01, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "28-Jun",
      "details": "Cutoff time: 21:00",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "28-Jun",
      "details": "Cutoff time: 14:30",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "27-Jun",
      "details": "Cutoff time: 16:30",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "ELLY MAERSK 527W loaded at CNSHA",
      "date": "Jul 01",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at NLRTM",
      "date": "Aug 15",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to NLRTM",
      "date": "Aug 16",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080004": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jun 21",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jun 21",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-229120447 confirmed by carrier",
      "date": "Jun 22",
      "details": "ETD: Jul 01, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "28-Jun",
      "details": "Cutoff time: 21:00",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "28-Jun",
      "details": "Cutoff time: 14:30",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "27-Jun",
      "details": "Cutoff time: 16:30",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "ELLY MAERSK 527W loaded at CNSHA",
      "date": "Jul 01",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at NLRTM",
      "date": "Aug 15",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to NLRTM",
      "date": "Aug 16",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080003": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jun 25",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jun 25",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-229120413 confirmed by carrier",
      "date": "Jun 26",
      "details": "ETD: Jul 01, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "28-Jun",
      "details": "Cutoff time: 21:00",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "28-Jun",
      "details": "Cutoff time: 14:30",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "27-Jun",
      "details": "Cutoff time: 16:30",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "ELLY MAERSK 527W loaded at CNSHA",
      "date": "Jul 01",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at NLRTM",
      "date": "Aug 15",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to NLRTM",
      "date": "Aug 16",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080005": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jun 23",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jun 23",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-229120450 confirmed by carrier",
      "date": "Jun 24",
      "details": "ETD: Jul 01, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "28-Jun",
      "details": "Cutoff time: 21:00",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "28-Jun",
      "details": "Cutoff time: 14:30",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "27-Jun",
      "details": "Cutoff time: 16:30",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "ELLY MAERSK 527W loaded at CNSHA",
      "date": "Jul 01",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at NLRTM",
      "date": "Aug 15",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to NLRTM",
      "date": "Aug 16",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080001": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jun 24",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jun 24",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-229120426 confirmed by carrier",
      "date": "Jun 25",
      "details": "ETD: Jul 01, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "28-Jun",
      "details": "Cutoff time: 21:00",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "28-Jun",
      "details": "Cutoff time: 14:30",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "27-Jun",
      "details": "Cutoff time: 16:30",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "ELLY MAERSK 527W loaded at CNSHA",
      "date": "Jul 01",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at NLRTM",
      "date": "Aug 15",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to NLRTM",
      "date": "Aug 16",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080006": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jun 23",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jun 23",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-228835193 confirmed by carrier",
      "date": "Jun 24",
      "details": "ETD: Jul 01, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "exception",
      "title": "Exception Raised",
      "description": "Carrier booking exception flagged",
      "date": "Jun 24",
      "details": "ETD delayed by 7 days",
      "severity": "high",
      "highlight": true,
      "tags": [
        "exception"
      ]
    },
    {
      "id": "5",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 01-Jul to 08-Jul (delayed by 7 days)",
      "date": "Jun 24",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "05-Jul",
      "details": "Cutoff time: 8:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "05-Jul",
      "details": "Cutoff time: 12:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "8",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "05-Jul",
      "details": "Cutoff time: 1:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "9",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "MAERSK SEBAROK 327S loaded at INMUN",
      "date": "Jul 08",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "10",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at DEHAM",
      "date": "Aug 10",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "11",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to DEHAM",
      "date": "Aug 11",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080007": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jun 23",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jun 23",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-228849192 confirmed by carrier",
      "date": "Jun 24",
      "details": "ETD: Jul 01, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "exception",
      "title": "Exception Raised",
      "description": "Carrier booking exception flagged",
      "date": "Jun 24",
      "details": "ETD delayed by 7 days",
      "severity": "high",
      "highlight": true,
      "tags": [
        "exception"
      ]
    },
    {
      "id": "5",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 01-Jul to 08-Jul (delayed by 7 days)",
      "date": "Jun 24",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "05-Jul",
      "details": "Cutoff time: 8:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "05-Jul",
      "details": "Cutoff time: 12:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "8",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "05-Jul",
      "details": "Cutoff time: 1:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "9",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "MAERSK SEBAROK 327S loaded at INMUN",
      "date": "Jul 08",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "10",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at DEHAM",
      "date": "Aug 10",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "11",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to DEHAM",
      "date": "Aug 11",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-185231641": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jun 27",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jun 27",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-264318575 confirmed by carrier",
      "date": "Jun 28",
      "details": "ETD: Jul 05, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "02-Jul",
      "details": "Cutoff time: 22:00",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "02-Jul",
      "details": "Cutoff time: 16:00",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "01-Jul",
      "details": "Cutoff time: 20:00",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "ELLY MAERSK 527W loaded at CNNGB",
      "date": "Jul 05",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at NLRTM",
      "date": "Aug 15",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to NLRTM",
      "date": "Aug 16",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-185231643": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jun 28",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jun 28",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-264318665 confirmed by carrier",
      "date": "Jun 29",
      "details": "ETD: Jul 05, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "exception",
      "title": "Exception Raised",
      "description": "Carrier booking exception flagged",
      "date": "Jun 29",
      "details": "equipment mismatch",
      "severity": "high",
      "highlight": true,
      "tags": [
        "exception"
      ]
    },
    {
      "id": "5",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40GPx1 (N/A), confirmed 20GPx1 (N/A)",
      "date": "Jun 29",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "02-Jul",
      "details": "Cutoff time: 22:00",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "02-Jul",
      "details": "Cutoff time: 16:00",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "8",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "01-Jul",
      "details": "Cutoff time: 20:00",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "9",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "ELLY MAERSK 527W loaded at CNNGB",
      "date": "Jul 05",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "10",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at NLRTM",
      "date": "Aug 15",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "11",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to NLRTM",
      "date": "Aug 16",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080008": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 05",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 05",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "COSU-6359789010 confirmed by carrier",
      "date": "Jul 06",
      "details": "ETD: Jul 13, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "09-Jul",
      "details": "Cutoff time: 15:00",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "08-Jul",
      "details": "Cutoff time: 12:30",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "08-Jul",
      "details": "Cutoff time: 12:30",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "COSCO NETHERLANDS 058E loaded at CNYTN",
      "date": "Jul 13",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at USLGB",
      "date": "Jul 28",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to USLGB",
      "date": "Jul 29",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080011": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 07",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 07",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-229048498 confirmed by carrier",
      "date": "Jul 08",
      "details": "ETD: Jul 15, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "exception",
      "title": "Exception Raised",
      "description": "Carrier booking exception flagged",
      "date": "Jul 08",
      "details": "ETD delayed by 7 days",
      "severity": "high",
      "highlight": true,
      "tags": [
        "exception"
      ]
    },
    {
      "id": "5",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 15-Jul to 22-Jul (delayed by 7 days)",
      "date": "Jul 08",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "19-Jul",
      "details": "Cutoff time: 8:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "19-Jul",
      "details": "Cutoff time: 12:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "8",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "19-Jul",
      "details": "Cutoff time: 1:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "9",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "MAERSK SEBAROK 329S loaded at INMUN",
      "date": "Jul 22",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "10",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at DEHAM",
      "date": "Aug 24",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "11",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to DEHAM",
      "date": "Aug 25",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080009": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 07",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 07",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-229200436 confirmed by carrier",
      "date": "Jul 08",
      "details": "ETD: Jul 15, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "exception",
      "title": "Exception Raised",
      "description": "Carrier booking exception flagged",
      "date": "Jul 08",
      "details": "ETD delayed by 7 days",
      "severity": "high",
      "highlight": true,
      "tags": [
        "exception"
      ]
    },
    {
      "id": "5",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 15-Jul to 22-Jul (delayed by 7 days)",
      "date": "Jul 08",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "19-Jul",
      "details": "Cutoff time: 8:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "19-Jul",
      "details": "Cutoff time: 12:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "8",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "19-Jul",
      "details": "Cutoff time: 1:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "9",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "MAERSK SEBAROK 329S loaded at INMUN",
      "date": "Jul 17",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "10",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at DEHAM",
      "date": "Aug 17",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "11",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to DEHAM",
      "date": "Aug 18",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080010": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 07",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 07",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-229233808 confirmed by carrier",
      "date": "Jul 08",
      "details": "ETD: Jul 15, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "exception",
      "title": "Exception Raised",
      "description": "Carrier booking exception flagged",
      "date": "Jul 08",
      "details": "ETD delayed by 7 days",
      "severity": "high",
      "highlight": true,
      "tags": [
        "exception"
      ]
    },
    {
      "id": "5",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 15-Jul to 22-Jul (delayed by 7 days)",
      "date": "Jul 08",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "19-Jul",
      "details": "Cutoff time: 8:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "19-Jul",
      "details": "Cutoff time: 12:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "8",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "19-Jul",
      "details": "Cutoff time: 1:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "9",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "MAERSK SEBAROK 329S loaded at INMUN",
      "date": "Jul 22",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "10",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at DEHAM",
      "date": "Aug 24",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "11",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to DEHAM",
      "date": "Aug 25",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080014": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 21",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 21",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-229366525 confirmed by carrier",
      "date": "Jul 22",
      "details": "ETD: Jul 29, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "exception",
      "title": "Exception Raised",
      "description": "Carrier booking exception flagged",
      "date": "Jul 22",
      "details": "ETD delayed by 7 days",
      "severity": "high",
      "highlight": true,
      "tags": [
        "exception"
      ]
    },
    {
      "id": "5",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 29-Jul to 05-Aug (delayed by 7 days)",
      "date": "Jul 22",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "02-Aug",
      "details": "Cutoff time: 8:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "02-Aug",
      "details": "Cutoff time: 12:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "8",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "02-Aug",
      "details": "Cutoff time: 1:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "9",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "SEASPAN JAKARTA 331S loaded at INMUN",
      "date": "Jul 29",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "10",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at DEHAM",
      "date": "Aug 31",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "11",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to DEHAM",
      "date": "Sep 01",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080015": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 21",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 21",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-229383930 confirmed by carrier",
      "date": "Jul 22",
      "details": "ETD: Jul 29, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "exception",
      "title": "Exception Raised",
      "description": "Carrier booking exception flagged",
      "date": "Jul 22",
      "details": "ETD delayed by 7 days",
      "severity": "high",
      "highlight": true,
      "tags": [
        "exception"
      ]
    },
    {
      "id": "5",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 29-Jul to 05-Aug (delayed by 7 days)",
      "date": "Jul 22",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "02-Aug",
      "details": "Cutoff time: 8:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "02-Aug",
      "details": "Cutoff time: 12:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "8",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "02-Aug",
      "details": "Cutoff time: 1:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "9",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "SEASPAN JAKARTA 331S loaded at INMUN",
      "date": "Aug 05",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "10",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at DEHAM",
      "date": "Sep 07",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "11",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to DEHAM",
      "date": "Sep 08",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080013": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 23",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 23",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-228970692 confirmed by carrier",
      "date": "Jul 24",
      "details": "ETD: Jul 31, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "MUNICH MAERSK 329W loaded at CNNGB",
      "date": "Jul 31",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at DEBRV",
      "date": "Sep 06",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to DEHBO",
      "date": "Sep 07",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080016": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 23",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 23",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    }
  ],
  "CB-180080017": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 26",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 26",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    }
  ],
  "CB-180080018": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 25",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 25",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "HDMU-NBOZ23075500 confirmed by carrier",
      "date": "Jul 26",
      "details": "ETD: Aug 02, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "YM TROPHY 008E loaded at CNNGB",
      "date": "Aug 02",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at USLGB",
      "date": "",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to USLGB",
      "date": "",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080019": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 25",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 25",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MSCU-177UGLGLN31883A confirmed by carrier",
      "date": "Jul 26",
      "details": "ETD: Aug 02, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "MSC KATIE 330N loaded at CNNGB",
      "date": "Aug 02",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at USLGB",
      "date": "",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to USLGB",
      "date": "",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080020": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 25",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 25",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MSCU-177UGLGLN31882A confirmed by carrier",
      "date": "Jul 26",
      "details": "ETD: Aug 02, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "MSC KATIE 330N loaded at CNNGB",
      "date": "Aug 02",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at USLGB",
      "date": "",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to USLGB",
      "date": "",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080021": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 25",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 25",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MSCU-177UGLGLN31878A confirmed by carrier",
      "date": "Jul 26",
      "details": "ETD: Aug 02, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "MSC KATIE 330N loaded at CNNGB",
      "date": "Aug 02",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at USLGB",
      "date": "",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to USLGB",
      "date": "",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080023": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 23",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 23",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    }
  ],
  "CB-180080035": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 24",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Jul 24",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx6 (N/A), confirmed nan (N/A)",
      "date": "Jul 25",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 02-Aug to nan (unchanged by nan days)",
      "date": "Jul 25",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080024": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 28",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 28",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-229412035 confirmed by carrier",
      "date": "Jul 29",
      "details": "ETD: Aug 05, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "02-Aug",
      "details": "Cutoff time: 8:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "02-Aug",
      "details": "Cutoff time: 12:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "02-Aug",
      "details": "Cutoff time: 1:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "KUO LUNG 562S loaded at INTUT",
      "date": "Aug 08",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at DEBRV",
      "date": "Sep 07",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to DEHBO",
      "date": "Sep 08",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080036": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 30",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 30",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-229121670 confirmed by carrier",
      "date": "Jul 31",
      "details": "ETD: Aug 07, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "MORTEN MAERSK 330W loaded at CNNGB",
      "date": "Aug 07",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at DEBRV",
      "date": "Sep 13",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to DEHBO",
      "date": "Sep 14",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080037": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 30",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 30",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-229121969 confirmed by carrier",
      "date": "Jul 31",
      "details": "ETD: Aug 07, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "MORTEN MAERSK 330W loaded at CNNGB",
      "date": "Aug 07",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at DEBRV",
      "date": "Sep 13",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to DEHBO",
      "date": "Sep 14",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080051": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 30",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 30",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-229121825 confirmed by carrier",
      "date": "Jul 31",
      "details": "ETD: Aug 07, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "MORTEN MAERSK 330W loaded at CNNGB",
      "date": "Aug 07",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at DEBRV",
      "date": "Sep 13",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to DEHBO",
      "date": "Sep 14",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080052": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 30",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 30",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "MAEU-229121822 confirmed by carrier",
      "date": "Jul 31",
      "details": "ETD: Aug 07, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "exception",
      "title": "Exception Raised",
      "description": "Carrier booking exception flagged",
      "date": "Jul 31",
      "details": "ETD delayed by 8 days",
      "severity": "high",
      "highlight": true,
      "tags": [
        "exception"
      ]
    },
    {
      "id": "5",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 07-Aug to 15-Aug (delayed by 8 days)",
      "date": "Jul 31",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "8",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "9",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "MARIBO MAERSK 331W loaded at CNNGB",
      "date": "Aug 07",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "10",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at DEBRV",
      "date": "Sep 13",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "11",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to DEHBO",
      "date": "Sep 14",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080025": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 31",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Jul 31",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx2 (N/A), confirmed nan (N/A)",
      "date": "Aug 01",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 08-Aug to nan (unchanged by nan days)",
      "date": "Aug 01",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080026": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 31",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Jul 31",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 08-Aug to 09-Aug (delayed by 1 days)",
      "date": "Aug 01",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080027": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 01",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 01",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 02",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 08-Aug to nan (unchanged by nan days)",
      "date": "Aug 02",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080038": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 31",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Jul 31",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx3 (N/A), confirmed nan (N/A)",
      "date": "Aug 01",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 08-Aug to nan (unchanged by nan days)",
      "date": "Aug 01",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080039": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 31",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Jul 31",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx2 (N/A), confirmed nan (N/A)",
      "date": "Aug 01",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 08-Aug to nan (unchanged by nan days)",
      "date": "Aug 01",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-186512583": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 31",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 31",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    }
  ],
  "CB-180080012": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 31",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 31",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "EGLV-EGLV143370387491 confirmed by carrier",
      "date": "Aug 01",
      "details": "ETD: Aug 08, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "nan",
      "details": "Cutoff time: nan",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "EVER FRANK 1076-015E loaded at CNNGB",
      "date": "Aug 08",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at USLAX",
      "date": "Aug 08",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to USLAX",
      "date": "Aug 09",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080028": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 30",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Jul 30",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Jul 31",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 08-Aug to nan (unchanged by nan days)",
      "date": "Jul 31",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080029": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 30",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Jul 30",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Jul 31",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 08-Aug to nan (unchanged by nan days)",
      "date": "Jul 31",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080030": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 30",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 30",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    }
  ],
  "CB-180080031": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 02",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 02",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 03",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 11-Aug to nan (unchanged by nan days)",
      "date": "Aug 03",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080032": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 02",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Aug 02",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "CMDU-TSL202307210986 confirmed by carrier",
      "date": "Aug 03",
      "details": "ETD: Aug 11, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "10-Aug",
      "details": "Cutoff time: 10:30:00 AM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "10-Aug",
      "details": "Cutoff time: 10:30:00 AM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "09-Aug",
      "details": "Cutoff time: 2:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "EVER ARM 0LAKVW1MA loaded at CNNGB",
      "date": "Aug 09",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at NLRTM",
      "date": "Sep 21",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to NLRTM",
      "date": "Sep 22",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080033": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 02",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 02",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40GPx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 03",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 11-Aug to nan (unchanged by nan days)",
      "date": "Aug 03",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080034": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 02",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 02",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 03",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 11-Aug to nan (unchanged by nan days)",
      "date": "Aug 03",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080040": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 03",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 03",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 45HCx2 (N/A), confirmed nan (N/A)",
      "date": "Aug 04",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 11-Aug to nan (unchanged by nan days)",
      "date": "Aug 04",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080041": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 02",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 02",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx4 (N/A), confirmed nan (N/A)",
      "date": "Aug 03",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 11-Aug to nan (unchanged by nan days)",
      "date": "Aug 03",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080042": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 03",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 03",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 45HCx2 (N/A), confirmed nan (N/A)",
      "date": "Aug 04",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 11-Aug to nan (unchanged by nan days)",
      "date": "Aug 04",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080043": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 02",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 02",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 45HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 03",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 11-Aug to nan (unchanged by nan days)",
      "date": "Aug 03",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080044": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 04",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Aug 04",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "CMDU-TSL202307240131 confirmed by carrier",
      "date": "Aug 05",
      "details": "ETD: Aug 11, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "10-Aug",
      "details": "Cutoff time: 10:30:00 AM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "10-Aug",
      "details": "Cutoff time: 10:30:00 AM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "09-Aug",
      "details": "Cutoff time: 2:00:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "EVER ARM 0LAKVW1MA loaded at CNNGB",
      "date": "Aug 09",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at NLRTM",
      "date": "Sep 21",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to NLRTM",
      "date": "Sep 22",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080045": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 01",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 01",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 02",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 08-Aug to nan (unchanged by nan days)",
      "date": "Aug 02",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080046": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 01",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 01",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40GPx1, 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 02",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 08-Aug to nan (unchanged by nan days)",
      "date": "Aug 02",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080047": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 01",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 01",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40GPx2 (N/A), confirmed nan (N/A)",
      "date": "Aug 02",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 08-Aug to nan (unchanged by nan days)",
      "date": "Aug 02",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080048": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 01",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 01",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 02",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 08-Aug to nan (unchanged by nan days)",
      "date": "Aug 02",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080049": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 01",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 01",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 02",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 08-Aug to nan (unchanged by nan days)",
      "date": "Aug 02",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080050": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 01",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 01",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 45HCx2 (N/A), confirmed nan (N/A)",
      "date": "Aug 02",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 08-Aug to nan (unchanged by nan days)",
      "date": "Aug 02",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080067": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 05",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 05",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 06",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 12-Aug to nan (unchanged by nan days)",
      "date": "Aug 06",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080068": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 04",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 04",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 05",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 12-Aug to nan (unchanged by nan days)",
      "date": "Aug 05",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080069": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 04",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 04",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 05",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 12-Aug to nan (unchanged by nan days)",
      "date": "Aug 05",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080070": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 05",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 05",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 06",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 12-Aug to nan (unchanged by nan days)",
      "date": "Aug 06",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-185901648": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 05",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Aug 05",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "HLCU-38538244 confirmed by carrier",
      "date": "Aug 06",
      "details": "ETD: Aug 12, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "exception",
      "title": "Exception Raised",
      "description": "Carrier booking exception flagged",
      "date": "Aug 06",
      "details": "ETD delayed by 4 days",
      "severity": "high",
      "highlight": true,
      "tags": [
        "exception"
      ]
    },
    {
      "id": "5",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 12-Aug to 16-Aug (delayed by 4 days)",
      "date": "Aug 06",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "15-Aug",
      "details": "Cutoff time: 3:30",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "14-Aug",
      "details": "Cutoff time: 15:30",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "8",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "13-Aug",
      "details": "Cutoff time: 18:00",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "9",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "MARGRETHE MAERSK 532W loaded at CNYTN",
      "date": "Aug 12",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "10",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at NLRTM",
      "date": "Sep 15",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "11",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to NLRTM",
      "date": "Sep 16",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080022": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 05",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Aug 05",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "HLCU-37549729 confirmed by carrier",
      "date": "Aug 06",
      "details": "ETD: Aug 13, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 13-Aug to 12-Aug (advanced by 1 days)",
      "date": "Aug 06",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "10-Aug",
      "details": "Cutoff time: 13:00",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "10-Aug",
      "details": "Cutoff time: 13:00",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "09-Aug",
      "details": "Cutoff time: 14:00",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "8",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "MARGRETHE MAERSK 532W loaded at CNYTN",
      "date": "Aug 13",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at PLGDY",
      "date": "Sep 30",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "10",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to PLGDY",
      "date": "Oct 01",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080053": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 07",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 07",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx4 (N/A), confirmed nan (N/A)",
      "date": "Aug 08",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 15-Aug to 16-Aug (delayed by 1 days)",
      "date": "Aug 08",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-264229065": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 07",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Aug 07",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "HCLU-13545758 confirmed by carrier",
      "date": "Aug 08",
      "details": "ETD: Aug 15, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 15-Aug to 16-Aug (delayed by 1 days)",
      "date": "Aug 08",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "15-Aug",
      "details": "Cutoff time: 3:30",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "14-Aug",
      "details": "Cutoff time: 15:30",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "13-Aug",
      "details": "Cutoff time: 18:00",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "8",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "MUNICH MAERSK 533W loaded at CNYTN",
      "date": "Aug 16",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at DEHAM",
      "date": "Sep 23",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "10",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to DEHAM",
      "date": "Sep 24",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080054": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Jul 31",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Jul 31",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "CMDU-6362312780 confirmed by carrier",
      "date": "Aug 01",
      "details": "ETD: Aug 09, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "12-Aug",
      "details": "Cutoff time: 1:30:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "12-Aug",
      "details": "Cutoff time: 1:30:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "11-Aug",
      "details": "Cutoff time: 11:00:00 AM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "EVER ARM 0LAKVW1MA loaded at CNSHA",
      "date": "Aug 09",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at NLRTM",
      "date": "Sep 21",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to NLRTM",
      "date": "Sep 22",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080055": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 02",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Aug 02",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "CMDU-6362376580 confirmed by carrier",
      "date": "Aug 03",
      "details": "ETD: Aug 09, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "12-Aug",
      "details": "Cutoff time: 1:30:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "12-Aug",
      "details": "Cutoff time: 1:30:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "11-Aug",
      "details": "Cutoff time: 11:00:00 AM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "EVER ARM 0LAKVW1MA loaded at CNSHA",
      "date": "Aug 09",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at NLRTM",
      "date": "Sep 21",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to NLRTM",
      "date": "Sep 22",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080056": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 02",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Aug 02",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "CMDU-6362376650 confirmed by carrier",
      "date": "Aug 03",
      "details": "ETD: Aug 09, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "12-Aug",
      "details": "Cutoff time: 1:30:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "12-Aug",
      "details": "Cutoff time: 1:30:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "11-Aug",
      "details": "Cutoff time: 11:00:00 AM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "EVER ARM 0LAKVW1MA loaded at CNSHA",
      "date": "Aug 09",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at GBFXT",
      "date": "Sep 21",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to GBFXT",
      "date": "Sep 22",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080057": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 01",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "accepted",
      "title": "Booking Accepted",
      "description": "Carrier accepted booking request",
      "date": "Aug 01",
      "details": "Acknowledged (301)",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "3",
      "type": "confirmed",
      "title": "Booking Confirmed",
      "description": "CMDU-6362376570 confirmed by carrier",
      "date": "Aug 02",
      "details": "ETD: Aug 09, 2025",
      "severity": "success",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
    },
    {
      "id": "4",
      "type": "cutoff",
      "title": "CY Cutoff",
      "description": "Container yard cutoff reached",
      "date": "12-Aug",
      "details": "Cutoff time: 1:30:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "5",
      "type": "cutoff",
      "title": "VGM Cutoff",
      "description": "VGM cutoff reached",
      "date": "12-Aug",
      "details": "Cutoff time: 1:30:00 PM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "6",
      "type": "cutoff",
      "title": "SI Cutoff",
      "description": "Shipping instruction cutoff reached",
      "date": "11-Aug",
      "details": "Cutoff time: 11:00:00 AM",
      "severity": "info",
      "highlight": false,
      "tags": [
        "cutoff"
      ]
    },
    {
      "id": "7",
      "type": "loaded",
      "title": "Vessel Loaded",
      "description": "EVER ARM 0LAKVW1MA loaded at CNSHA",
      "date": "Aug 09",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "8",
      "type": "eta",
      "title": "ETA at Port of Discharge",
      "description": "ETA at GBFXT",
      "date": "Sep 25",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "movement"
      ]
    },
    {
      "id": "9",
      "type": "delivered",
      "title": "Delivered",
      "description": "Delivered to GBFXT",
      "date": "Sep 26",
      "details": "",
      "severity": "success",
      "highlight": false,
      "tags": [
        "movement"
      ]
    }
  ],
  "CB-180080058": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 08",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 08",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 09",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 15-Aug to nan (unchanged by nan days)",
      "date": "Aug 09",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080059": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 07",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 07",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 08",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 15-Aug to nan (unchanged by nan days)",
      "date": "Aug 08",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080060": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 08",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 08",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 09",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 15-Aug to nan (unchanged by nan days)",
      "date": "Aug 09",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080061": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 07",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 07",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 08",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 15-Aug to nan (unchanged by nan days)",
      "date": "Aug 08",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080062": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 08",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 08",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 09",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 15-Aug to nan (unchanged by nan days)",
      "date": "Aug 09",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080063": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 09",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 09",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 10",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 15-Aug to nan (unchanged by nan days)",
      "date": "Aug 10",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080064": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 08",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 08",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 09",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 15-Aug to nan (unchanged by nan days)",
      "date": "Aug 09",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080065": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 08",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 08",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 09",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 15-Aug to nan (unchanged by nan days)",
      "date": "Aug 09",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ],
  "CB-180080066": [
    {
      "id": "1",
      "type": "submitted",
      "title": "SO Submitted",
      "description": "Shipping order submitted to carrier",
      "date": "Aug 09",
      "details": "",
      "severity": "info",
      "highlight": false,
      "tags": [
        "lifecycle"
      ]
      ,
      "reqETD": "01-Jul",
      "createDate": "2025-06-16"
    },
    {
      "id": "2",
      "type": "pending",
      "title": "Booking Pending",
      "description": "Awaiting carrier response",
      "date": "Aug 09",
      "details": "301 acknowledgment received",
      "severity": "success",
      "highlight": false,
      "tags": [
        "status"
      ]
    },
    {
      "id": "3",
      "type": "equipment_mismatch",
      "title": "Equipment Mismatch",
      "description": "Requested 40HCx1 (N/A), confirmed nan (N/A)",
      "date": "Aug 10",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "equipment",
        "exception"
      ]
    },
    {
      "id": "4",
      "type": "etd_change",
      "title": "ETD Changed",
      "description": "ETD updated from 15-Aug to nan (unchanged by nan days)",
      "date": "Aug 10",
      "details": "",
      "severity": "warning",
      "highlight": true,
      "tags": [
        "schedule",
        "exception"
      ]
    }
  ]
};

// Documents Data - organized by TMS ID
export const documentsData: Record<string, DocumentItem[]> = {
  "CB-185231641": [
    {
      "id": "1",
      "tmsId": "CB-185231641",
      "pdfRevision": "Original Version",
      "pdfLink": "/MAEU 264318575_1.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    }
  ],
  "CB-185231643": [
    {
      "id": "1",
      "tmsId": "CB-185231643",
      "pdfRevision": "Original Version",
      "pdfLink": "/MAEU 264318665_1.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    }
  ],
  "CB-186512583": [
    {
      "id": "1",
      "tmsId": "CB-186512583",
      "pdfRevision": "Original Version",
      "pdfLink": "/MAEU 264319062_1.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    }
  ],
  "CB-185901648": [
    {
      "id": "1",
      "tmsId": "CB-185901648",
      "pdfRevision": "Original Version",
      "pdfLink": "/HLCU-38538244_1.pdf",
      "uploadDate": "2025-07-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "1",
      "tmsId": "CB-185901648",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-38538244 NLRTM BC 1ST UPDATE.pdf",
      "uploadDate": "2025-07-16",
      "fileSize": "2.3 MB"
    }
  ],
  "CB-264229065": [
    {
      "id": "1",
      "tmsId": "CB-264229065",
      "pdfRevision": "Original Version",
      "pdfLink": "/HLCU-13545758_1.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    }
  ]
};