import { FieldId } from './field';
import { Filters } from './filter';

export type TableCalculation = {
    index?: number;
    name: string;
    displayName: string;
    sql: string;
};
export type CompiledTableCalculation = TableCalculation & {
    compiledSql: string;
};

// Object used to query an explore. Queries only happen within a single explore
export type MetricQuery = {
    dimensions: FieldId[]; // Dimensions to group by in the explore
    metrics: FieldId[]; // Metrics to compute in the explore
    filters: Filters;
    sorts: SortField[]; // Sorts for the data
    limit: number; // Max number of rows to return from query
    tableCalculations: TableCalculation[]; // calculations to append to results
};
export type CompiledMetricQuery = MetricQuery & {
    compiledTableCalculations: CompiledTableCalculation[];
};
// Sort by
export type SortField = {
    fieldId: string; // Field must exist in the explore
    descending: boolean; // Direction of the sort
};
