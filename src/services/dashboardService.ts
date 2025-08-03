import { DashboardAPI } from './dashboardAPI';
import type { 
  CBRequestsByStatus,
  DaysBeforeETD,
  ExceptionItem,
  DashboardFilters
} from '../data/dashboardData';

/**
 * Service layer for dashboard operations
 */
export class DashboardService {
  /**
   * Get CB Requests by Status with error handling
   */
  static async getCBRequestsByStatus(filters?: Partial<DashboardFilters>): Promise<CBRequestsByStatus[]> {
    try {
      return await DashboardAPI.getCBRequestsByStatus(filters);
    } catch (error) {
      console.error('DashboardService: Failed to fetch CB requests by status', error);
      throw new Error('Unable to load CB requests data. Please try again.');
    }
  }

  /**
   * Get Days Before ETD data
   */
  static async getDaysBeforeETD(filters?: Partial<DashboardFilters>): Promise<DaysBeforeETD[]> {
    try {
      return await DashboardAPI.getDaysBeforeETD(filters);
    } catch (error) {
      console.error('DashboardService: Failed to fetch days before ETD data', error);
      throw new Error('Unable to load days before ETD data. Please try again.');
    }
  }

  /**
   * Get Allocations by Carrier data
   */
  static async getAllocationsByCarrier(filters?: Partial<DashboardFilters>) {
    try {
      return await DashboardAPI.getAllocationsByCarrier(filters);
    } catch (error) {
      console.error('DashboardService: Failed to fetch allocations by carrier', error);
      throw new Error('Unable to load allocations data. Please try again.');
    }
  }

  /**
   * Get Exception Items
   */
  static async getExceptionItems(filters?: Partial<DashboardFilters>): Promise<ExceptionItem[]> {
    try {
      return await DashboardAPI.getExceptionItems(filters);
    } catch (error) {
      console.error('DashboardService: Failed to fetch exception items', error);
      throw new Error('Unable to load exception items. Please try again.');
    }
  }

  /**
   * Get all dashboard data in parallel
   */
  static async getAllDashboardData(filters?: Partial<DashboardFilters>): Promise<{
    cbRequestsByStatus: CBRequestsByStatus[];
    daysBeforeETD: DaysBeforeETD[];
    allocationsByCarrier: any;
    exceptionItems: ExceptionItem[];
    summary: {
      totalCBRequests: number;
      totalDaysBeforeETD: number;
      totalAllocations: number;
      totalExceptions: number;
    };
  }> {
    try {
      const [cbRequestsByStatus, daysBeforeETD, allocationsByCarrier, exceptionItems, summary] = 
        await Promise.allSettled([
          this.getCBRequestsByStatus(filters),
          this.getDaysBeforeETD(filters),
          this.getAllocationsByCarrier(filters),
          this.getExceptionItems(filters),
          DashboardAPI.getDashboardSummary(filters)
        ]);

      return {
        cbRequestsByStatus: cbRequestsByStatus.status === 'fulfilled' ? cbRequestsByStatus.value : [],
        daysBeforeETD: daysBeforeETD.status === 'fulfilled' ? daysBeforeETD.value : [],
        allocationsByCarrier: allocationsByCarrier.status === 'fulfilled' ? allocationsByCarrier.value : { name: 'carriers', children: [] },
        exceptionItems: exceptionItems.status === 'fulfilled' ? exceptionItems.value : [],
        summary: summary.status === 'fulfilled' ? summary.value : {
          totalCBRequests: 0,
          totalDaysBeforeETD: 0,
          totalAllocations: 0,
          totalExceptions: 0
        }
      };
    } catch (error) {
      console.error('DashboardService: Failed to fetch dashboard data', error);
      throw new Error('Unable to load dashboard data. Please try again.');
    }
  }

  /**
   * Get default filters
   */
  static getDefaultFilters(): DashboardFilters {
    return DashboardAPI.getDefaultFilters();
  }
}