// Carrier Bookings List - Generated from Book6.csv with consistent data structure
export interface CarrierBooking {
  id: string;
  destination: string;
  date: string;
  selected?: boolean;
}

// Helper function to format date from CRD field
const formatDate = (crd: string): string => {
  if (!crd || crd === '--' || crd === 'TBD') return '2025-01-01';
  
  // Handle different date formats
  if (crd.includes('-')) {
    // Format like "24-Jun" or "01-Jul"
    const parts = crd.split('-');
    if (parts.length === 2) {
      const day = parts[0];
      const month = parts[1];
      
      // Map month abbreviations to numbers
      const monthMap: Record<string, string> = {
        'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04',
        'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
        'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
      };
      
      const monthNum = monthMap[month] || '01';
      return `2025-${monthNum}-${day.padStart(2, '0')}`;
    }
  }
  
  return '2025-01-01';
};

// Carrier Bookings List - Generated from Book6.csv
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

// Export the data
export default carrierBookingsList;
