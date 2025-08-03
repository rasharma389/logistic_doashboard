import { 
  cbRequestsByStatusData,
  daysBeforeETDData,
  allocationsByCarrierData,
  exceptionItemsData,
  defaultFilters,
  type CBRequestsByStatus,
  type DaysBeforeETD,
  type ExceptionItem,
  type DashboardFilters
} from '../data/dashboardData';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simulate network errors occasionally
const shouldSimulateError = () => false; // Disabled error simulation

export class DashboardAPI {
  /**
   * Fetch CB Requests by Status data
   */
  static async getCBRequestsByStatus(filters?: Partial<DashboardFilters>): Promise<CBRequestsByStatus[]> {
    await delay(200 + Math.random() * 100);
    
    if (shouldSimulateError()) {
      throw new Error('Failed to fetch CB requests by status');
    }
    
    // Apply filters to modify data based on selection
    let filteredData = [...cbRequestsByStatusData];
    
    // Simulate filtering effect by adjusting values
    if (filters?.customer && filters.customer !== 'ALL') {
      filteredData = filteredData.map(item => ({
        ...item,
        value: Math.floor(item.value * 0.7) // Reduce values for filtered view
      }));
    }
    
    if (filters?.carrier && filters.carrier !== 'ALL') {
      filteredData = filteredData.map(item => ({
        ...item,
        value: Math.floor(item.value * 0.8) // Reduce values for carrier filter
      }));
    }
    
    if (filters?.region && filters.region !== 'ALL') {
      filteredData = filteredData.map(item => ({
        ...item,
        value: Math.floor(item.value * 0.6) // Reduce values for region filter
      }));
    }
    
    return filteredData;
  }

  /**
   * Fetch Days Before ETD data
   */
  static async getDaysBeforeETD(filters?: Partial<DashboardFilters>): Promise<DaysBeforeETD[]> {
    await delay(250 + Math.random() * 150);
    
    if (shouldSimulateError()) {
      throw new Error('Failed to fetch days before ETD data');
    }
    
    let filteredData = [...daysBeforeETDData];
    
    // Apply filters to modify data
    if (filters?.customer && filters.customer !== 'ALL') {
      filteredData = filteredData.map(item => ({
        ...item,
        confirmed: Math.floor(item.confirmed * 0.7),
        requestedWithResponse: Math.floor(item.requestedWithResponse * 0.7),
        requestedNoResponse: Math.floor(item.requestedNoResponse * 0.7),
        cancelledByCarrier: Math.floor(item.cancelledByCarrier * 0.7),
        cancelledBy3PL: Math.floor(item.cancelledBy3PL * 0.7)
      }));
    }
    
    if (filters?.carrier && filters.carrier !== 'ALL') {
      filteredData = filteredData.map(item => ({
        ...item,
        confirmed: Math.floor(item.confirmed * 0.8),
        requestedWithResponse: Math.floor(item.requestedWithResponse * 0.8),
        requestedNoResponse: Math.floor(item.requestedNoResponse * 0.8),
        cancelledByCarrier: Math.floor(item.cancelledByCarrier * 0.8),
        cancelledBy3PL: Math.floor(item.cancelledBy3PL * 0.8)
      }));
    }
    
    if (filters?.region && filters.region !== 'ALL') {
      filteredData = filteredData.map(item => ({
        ...item,
        confirmed: Math.floor(item.confirmed * 0.6),
        requestedWithResponse: Math.floor(item.requestedWithResponse * 0.6),
        requestedNoResponse: Math.floor(item.requestedNoResponse * 0.6),
        cancelledByCarrier: Math.floor(item.cancelledByCarrier * 0.6),
        cancelledBy3PL: Math.floor(item.cancelledBy3PL * 0.6)
      }));
    }
    
    return filteredData;
  }

  /**
   * Fetch Allocations by Carrier data
   */
  static async getAllocationsByCarrier(filters?: Partial<DashboardFilters>) {
    await delay(180 + Math.random() * 120);
    
    if (shouldSimulateError()) {
      throw new Error('Failed to fetch allocations by carrier');
    }
    
    let filteredData = JSON.parse(JSON.stringify(allocationsByCarrierData));
    
    // Apply filters to treemap data
    if (filters?.customer && filters.customer !== 'ALL') {
      filteredData.children = filteredData.children.map((item: any) => ({
        ...item,
        value: Math.floor(item.value * 0.7)
      }));
    }
    
    if (filters?.carrier && filters.carrier !== 'ALL') {
      // Filter to show only selected carrier with higher value
      const selectedCarrier = filters.carrier;
      filteredData.children = filteredData.children.map((item: any) => ({
        ...item,
        value: item.name === selectedCarrier ? item.value * 1.5 : Math.floor(item.value * 0.3)
      }));
    }
    
    if (filters?.region && filters.region !== 'ALL') {
      filteredData.children = filteredData.children.map((item: any) => ({
        ...item,
        value: Math.floor(item.value * 0.6)
      }));
    }
    
    return filteredData;
  }

  /**
   * Fetch Exception Items
   */
  static async getExceptionItems(filters?: Partial<DashboardFilters>): Promise<ExceptionItem[]> {
    await delay(300 + Math.random() * 200);
    
    if (shouldSimulateError()) {
      throw new Error('Failed to fetch exception items');
    }
    
    let filteredItems = [...exceptionItemsData];
    
    // Apply filters
    if (filters?.customer && filters.customer !== 'ALL') {
      filteredItems = filteredItems.filter(item => 
        item.customer.toLowerCase().includes(filters.customer!.toLowerCase())
      );
    }
    
    if (filters?.region && filters.region !== 'ALL') {
      filteredItems = filteredItems.filter(item => 
        item.region.toLowerCase().includes(filters.region!.toLowerCase())
      );
    }
    
    return filteredItems;
  }

  /**
   * Get dashboard summary stats
   */
  static async getDashboardSummary(filters?: Partial<DashboardFilters>): Promise<{
    totalCBRequests: number;
    totalDaysBeforeETD: number;
    totalAllocations: number;
    totalExceptions: number;
  }> {
    await delay(150 + Math.random() * 100);
    
    if (shouldSimulateError()) {
      throw new Error('Failed to fetch dashboard summary');
    }
    
    const cbRequests = await this.getCBRequestsByStatus(filters);
    const exceptions = await this.getExceptionItems(filters);
    
    return {
      totalCBRequests: cbRequests.reduce((sum, item) => sum + item.value, 0),
      totalDaysBeforeETD: 198,
      totalAllocations: 198,
      totalExceptions: exceptions.length
    };
  }

  /**
   * Get default filters
   */
  static getDefaultFilters(): DashboardFilters {
    return { ...defaultFilters };
  }
}