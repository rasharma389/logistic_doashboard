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
    "portOfLoadEtd": "",
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
    "placeOfReceiptEtd": "Aug 12, 2025",
    "portOfLoadEtd": "Aug 16, 2025",
    "portOfDischargeEta": "Sep 15, 2025",
    "placeOfDeliveryEta": "Sep 15, 2025",
    "requestedEtdWeek": "33",
    "contractNumber": "90-0080",
    "tradeLane": "AP > EU",
    "vesselNVoyage": "MARGRETHE MAERSK 532W",
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
    "placeOfReceiptEtd": "Aug 13, 2025",
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
  "CB-180080002": [
    {
      "id": "1",
      "tmsId": "CB-180080002",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080002",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080002",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080004": [
    {
      "id": "1",
      "tmsId": "CB-180080004",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080004",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080004",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080003": [
    {
      "id": "1",
      "tmsId": "CB-180080003",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080003",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080003",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080005": [
    {
      "id": "1",
      "tmsId": "CB-180080005",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080005",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080005",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080001": [
    {
      "id": "1",
      "tmsId": "CB-180080001",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080001",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080001",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080006": [
    {
      "id": "1",
      "tmsId": "CB-180080006",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080006",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080006",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080007": [
    {
      "id": "1",
      "tmsId": "CB-180080007",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080007",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080007",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-185231641": [
    {
      "id": "1",
      "tmsId": "CB-185231641",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-185231641",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-185231641",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-185231643": [
    {
      "id": "1",
      "tmsId": "CB-185231643",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-185231643",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-185231643",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080008": [
    {
      "id": "1",
      "tmsId": "CB-180080008",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080008",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080008",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080011": [
    {
      "id": "1",
      "tmsId": "CB-180080011",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080011",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080011",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080009": [
    {
      "id": "1",
      "tmsId": "CB-180080009",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080009",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080009",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080010": [
    {
      "id": "1",
      "tmsId": "CB-180080010",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080010",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080010",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080014": [
    {
      "id": "1",
      "tmsId": "CB-180080014",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080014",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080014",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080015": [
    {
      "id": "1",
      "tmsId": "CB-180080015",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080015",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080015",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080013": [
    {
      "id": "1",
      "tmsId": "CB-180080013",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080013",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080013",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080016": [
    {
      "id": "1",
      "tmsId": "CB-180080016",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080016",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080016",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080017": [
    {
      "id": "1",
      "tmsId": "CB-180080017",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080017",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080017",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080018": [
    {
      "id": "1",
      "tmsId": "CB-180080018",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080018",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080018",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080019": [
    {
      "id": "1",
      "tmsId": "CB-180080019",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080019",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080019",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080020": [
    {
      "id": "1",
      "tmsId": "CB-180080020",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080020",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080020",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080021": [
    {
      "id": "1",
      "tmsId": "CB-180080021",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080021",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080021",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080023": [
    {
      "id": "1",
      "tmsId": "CB-180080023",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080023",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080023",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080035": [
    {
      "id": "1",
      "tmsId": "CB-180080035",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080035",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080035",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080024": [
    {
      "id": "1",
      "tmsId": "CB-180080024",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080024",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080024",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080036": [
    {
      "id": "1",
      "tmsId": "CB-180080036",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080036",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080036",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080037": [
    {
      "id": "1",
      "tmsId": "CB-180080037",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080037",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080037",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080051": [
    {
      "id": "1",
      "tmsId": "CB-180080051",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080051",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080051",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080052": [
    {
      "id": "1",
      "tmsId": "CB-180080052",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080052",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080052",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080025": [
    {
      "id": "1",
      "tmsId": "CB-180080025",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080025",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080025",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080026": [
    {
      "id": "1",
      "tmsId": "CB-180080026",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080026",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080026",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080027": [
    {
      "id": "1",
      "tmsId": "CB-180080027",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080027",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080027",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080038": [
    {
      "id": "1",
      "tmsId": "CB-180080038",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080038",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080038",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080039": [
    {
      "id": "1",
      "tmsId": "CB-180080039",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080039",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080039",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-186512583": [
    {
      "id": "1",
      "tmsId": "CB-186512583",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-186512583",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-186512583",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080012": [
    {
      "id": "1",
      "tmsId": "CB-180080012",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080012",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080012",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080028": [
    {
      "id": "1",
      "tmsId": "CB-180080028",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080028",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080028",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080029": [
    {
      "id": "1",
      "tmsId": "CB-180080029",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080029",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080029",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080030": [
    {
      "id": "1",
      "tmsId": "CB-180080030",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080030",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080030",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080031": [
    {
      "id": "1",
      "tmsId": "CB-180080031",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080031",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080031",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080032": [
    {
      "id": "1",
      "tmsId": "CB-180080032",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080032",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080032",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080033": [
    {
      "id": "1",
      "tmsId": "CB-180080033",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080033",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080033",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080034": [
    {
      "id": "1",
      "tmsId": "CB-180080034",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080034",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080034",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080040": [
    {
      "id": "1",
      "tmsId": "CB-180080040",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080040",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080040",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080041": [
    {
      "id": "1",
      "tmsId": "CB-180080041",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080041",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080041",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080042": [
    {
      "id": "1",
      "tmsId": "CB-180080042",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080042",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080042",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080043": [
    {
      "id": "1",
      "tmsId": "CB-180080043",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080043",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080043",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080044": [
    {
      "id": "1",
      "tmsId": "CB-180080044",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080044",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080044",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080045": [
    {
      "id": "1",
      "tmsId": "CB-180080045",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080045",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080045",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080046": [
    {
      "id": "1",
      "tmsId": "CB-180080046",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080046",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080046",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080047": [
    {
      "id": "1",
      "tmsId": "CB-180080047",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080047",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080047",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080048": [
    {
      "id": "1",
      "tmsId": "CB-180080048",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080048",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080048",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080049": [
    {
      "id": "1",
      "tmsId": "CB-180080049",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080049",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080049",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080050": [
    {
      "id": "1",
      "tmsId": "CB-180080050",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080050",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080050",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080067": [
    {
      "id": "1",
      "tmsId": "CB-180080067",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080067",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080067",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080068": [
    {
      "id": "1",
      "tmsId": "CB-180080068",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080068",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080068",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080069": [
    {
      "id": "1",
      "tmsId": "CB-180080069",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080069",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080069",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080070": [
    {
      "id": "1",
      "tmsId": "CB-180080070",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080070",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080070",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-185901648": [
    {
      "id": "1",
      "tmsId": "CB-185901648",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-185901648",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-185901648",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080022": [
    {
      "id": "1",
      "tmsId": "CB-180080022",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080022",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080022",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080053": [
    {
      "id": "1",
      "tmsId": "CB-180080053",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080053",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080053",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-264229065": [
    {
      "id": "1",
      "tmsId": "CB-264229065",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-264229065",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-264229065",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080054": [
    {
      "id": "1",
      "tmsId": "CB-180080054",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080054",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080054",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080055": [
    {
      "id": "1",
      "tmsId": "CB-180080055",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080055",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080055",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080056": [
    {
      "id": "1",
      "tmsId": "CB-180080056",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080056",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080056",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080057": [
    {
      "id": "1",
      "tmsId": "CB-180080057",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080057",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080057",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080058": [
    {
      "id": "1",
      "tmsId": "CB-180080058",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080058",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080058",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080059": [
    {
      "id": "1",
      "tmsId": "CB-180080059",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080059",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080059",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080060": [
    {
      "id": "1",
      "tmsId": "CB-180080060",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080060",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080060",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080061": [
    {
      "id": "1",
      "tmsId": "CB-180080061",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080061",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080061",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080062": [
    {
      "id": "1",
      "tmsId": "CB-180080062",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080062",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080062",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080063": [
    {
      "id": "1",
      "tmsId": "CB-180080063",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080063",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080063",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080064": [
    {
      "id": "1",
      "tmsId": "CB-180080064",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080064",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080064",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080065": [
    {
      "id": "1",
      "tmsId": "CB-180080065",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080065",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080065",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ],
  "CB-180080066": [
    {
      "id": "1",
      "tmsId": "CB-180080066",
      "pdfRevision": "Original Version",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-15",
      "fileSize": "2.3 MB"
    },
    {
      "id": "2",
      "tmsId": "CB-180080066",
      "pdfRevision": "Version 1",
      "pdfLink": "/HL-24933427.PDF",
      "uploadDate": "2024-01-20",
      "fileSize": "2.5 MB"
    },
    {
      "id": "3",
      "tmsId": "CB-180080066",
      "pdfRevision": "Version 2",
      "pdfLink": "/SG123456.pdf",
      "uploadDate": "2024-01-25",
      "fileSize": "2.4 MB"
    }
  ]
};