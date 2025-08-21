export interface TransportPlanItem {
  term: string;
  departureArrival: string;
  port: string;
  terminal: string;
  timestamps: string;
  date: string;
  time: string;
  type: string;
  vesselVoyage: string;
}

export interface CutoffData {
  si: string;
  vgm: string;
  cy: string;
}

export interface TransportPlanData {
  tmsNumber: string;
  ts: TransportPlanItem[];
  cutoff: CutoffData;
}

// Mock data for transport plans using actual field names from bookingOverviewData.ts
export const transportPlanData: Record<string, TransportPlanData> = {
  "185901640": {
    tmsNumber: "185901640",
    ts: [
      {
        term: "POL",
        departureArrival: "Departure",
        port: "BR:POL",
        terminal: "",
        timestamps: "",
        date: "BC:ETD POL",
        time: "",
        type: "MV1",
        vesselVoyage: "BC:1st Vessel + BC:1st Voyage #"
      },
      {
        term: "2nd",
        departureArrival: "Arrival",
        port: "T/S port 1",
        terminal: "",
        timestamps: "",
        date: "",
        time: "",
        type: "",
        vesselVoyage: ""
      },
      {
        term: "3rd",
        departureArrival: "Departure",
        port: "T/S port 1",
        terminal: "",
        timestamps: "",
        date: "",
        time: "",
        type: "MV2",
        vesselVoyage: "BC:2nd Vessel + BC:2nd Voyage #"
      },
      {
        term: "4th",
        departureArrival: "Arrival",
        port: "T/S port 2",
        terminal: "",
        timestamps: "",
        date: "",
        time: "",
        type: "",
        vesselVoyage: ""
      },
      {
        term: "5th",
        departureArrival: "Departure",
        port: "T/S port 2",
        terminal: "",
        timestamps: "",
        date: "",
        time: "",
        type: "MV3",
        vesselVoyage: "BC:3rd Vessel + BC:3rd Voyage #"
      },
      {
        term: "POD",
        departureArrival: "Arrival",
        port: "BR:POD",
        terminal: "",
        timestamps: "",
        date: "BC:1st ETA POD",
        time: "",
        type: "",
        vesselVoyage: ""
      }
    ],
    cutoff: {
      si: "BC: SI Cut-off Date",
      vgm: "BC: VGM Cut-off Date",
      cy: "BC: CY Cut-off Date"
    }
  },
  "185901641": {
    tmsNumber: "185901641",
    ts: [
      {
        term: "POL",
        departureArrival: "Departure",
        port: "BR:POL",
        terminal: "",
        timestamps: "",
        date: "BC:ETD POL",
        time: "",
        type: "MV1",
        vesselVoyage: "BC:1st Vessel + BC:1st Voyage #"
      },
      {
        term: "POD",
        departureArrival: "Arrival",
        port: "BR:POD",
        terminal: "",
        timestamps: "",
        date: "BC:1st ETA POD",
        time: "",
        type: "",
        vesselVoyage: ""
      }
    ],
    cutoff: {
      si: "BC: SI Cut-off Date",
      vgm: "BC: VGM Cut-off Date",
      cy: "BC: CY Cut-off Date"
    }
  },
  "185901642": {
    tmsNumber: "185901642",
    ts: [
      {
        term: "POL",
        departureArrival: "Departure",
        port: "BR:POL",
        terminal: "",
        timestamps: "",
        date: "BC:ETD POL",
        time: "",
        type: "MV1",
        vesselVoyage: "BC:1st Vessel + BC:1st Voyage #"
      },
      {
        term: "2nd",
        departureArrival: "Arrival",
        port: "T/S port 1",
        terminal: "",
        timestamps: "",
        date: "",
        time: "",
        type: "",
        vesselVoyage: ""
      },
      {
        term: "3rd",
        departureArrival: "Departure",
        port: "T/S port 1",
        terminal: "",
        timestamps: "",
        date: "",
        time: "",
        type: "MV2",
        vesselVoyage: "BC:2nd Vessel + BC:2nd Voyage #"
      },
      {
        term: "POD",
        departureArrival: "Arrival",
        port: "BR:POD",
        terminal: "",
        timestamps: "",
        date: "BC:1st ETA POD",
        time: "",
        type: "",
        vesselVoyage: ""
      }
    ],
    cutoff: {
      si: "BC: SI Cut-off Date",
      vgm: "BC: VGM Cut-off Date",
      cy: "BC: CY Cut-off Date"
    }
  },
  "185901646": {
    tmsNumber: "185901646",
    ts: [
      {
        term: "POL",
        departureArrival: "Departure",
        port: "BR:POL",
        terminal: "",
        timestamps: "",
        date: "BC:ETD POL",
        time: "",
        type: "MV1",
        vesselVoyage: "BC:1st Vessel + BC:1st Voyage #"
      },
      {
        term: "POD",
        departureArrival: "Arrival",
        port: "BR:POD",
        terminal: "",
        timestamps: "",
        date: "BC:1st ETA POD",
        time: "",
        type: "",
        vesselVoyage: ""
      }
    ],
    cutoff: {
      si: "BC: SI Cut-off Date",
      vgm: "BC: VGM Cut-off Date",
      cy: "BC: CY Cut-off Date"
    }
  },
  "185901647": {
    tmsNumber: "185901647",
    ts: [
      {
        term: "POL",
        departureArrival: "Departure",
        port: "BR:POL",
        terminal: "",
        timestamps: "",
        date: "BC:ETD POL",
        time: "",
        type: "MV1",
        vesselVoyage: "BC:1st Vessel + BC:1st Voyage #"
      },
      {
        term: "2nd",
        departureArrival: "Arrival",
        port: "T/S port 1",
        terminal: "",
        timestamps: "",
        date: "",
        time: "",
        type: "",
        vesselVoyage: ""
      },
      {
        term: "3rd",
        departureArrival: "Departure",
        port: "T/S port 1",
        terminal: "",
        timestamps: "",
        date: "",
        time: "",
        type: "MV2",
        vesselVoyage: "BC:2nd Vessel + BC:2nd Voyage #"
      },
      {
        term: "4th",
        departureArrival: "Arrival",
        port: "T/S port 2",
        terminal: "",
        timestamps: "",
        date: "",
        time: "",
        type: "",
        vesselVoyage: ""
      },
      {
        term: "5th",
        departureArrival: "Departure",
        port: "T/S port 2",
        terminal: "",
        timestamps: "",
        date: "",
        time: "",
        type: "MV3",
        vesselVoyage: "BC:3rd Vessel + BC:3rd Voyage #"
      },
      {
        term: "POD",
        departureArrival: "Arrival",
        port: "BR:POD",
        terminal: "",
        timestamps: "",
        date: "BC:1st ETA POD",
        time: "",
        type: "",
        vesselVoyage: ""
      }
    ],
    cutoff: {
      si: "BC: SI Cut-off Date",
      vgm: "BC: VGM Cut-off Date",
      cy: "BC: CY Cut-off Date"
    }
  }
};
