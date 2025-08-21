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
    id: "CB-185466007",
    destination: "IN W. - HMH",
    date: "2025-06-23"
  },
  {
    id: "CB-185494136",
    destination: "IN W. - HMH",
    date: "2025-06-23"
  },
  {
    id: "CB-185231641",
    destination: "CN E. - HMH",
    date: "2025-06-27"
  },
  {
    id: "CB-185231643",
    destination: "CN E. - HMH",
    date: "2025-06-28"
  },
  {
    id: "CB-185216294",
    destination: "CN S. - BBY",
    date: "2025-07-05"
  },
  {
    id: "CB-185789327",
    destination: "IN W. - HMH",
    date: "2025-07-07"
  },
  {
    id: "CB-186025014",
    destination: "IN W. - HMH",
    date: "2025-07-07"
  },
  {
    id: "CB-186067396",
    destination: "IN W. - HMH",
    date: "2025-07-07"
  },
  {
    id: "CB-186284713",
    destination: "IN W. - HMH",
    date: "2025-07-21"
  },
  {
    id: "CB-186317816",
    destination: "IN W. - HMH",
    date: "2025-07-21"
  },
  {
    id: "CB-186355903",
    destination: "IN S. - HMH",
    date: "2025-07-28"
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
    destination: "CN E. - HOD",
    date: "2025-08-01"
  },
  {
    id: "CB-186605681",
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
    destination: "CN S. - HMH",
    date: "2025-08-04"
  },
  {
    id: "CB-186322183",
    destination: "CN S. - HMH",
    date: "2025-08-05"
  },
  {
    id: "CB-186734576",
    destination: "CN S. - BBY",
    date: "2025-08-07"
  },
  {
    id: "CB-264229065",
    destination: "CN S. - BBY",
    date: "2025-08-07"
  }
];

// Export the data
export default carrierBookingsList;
