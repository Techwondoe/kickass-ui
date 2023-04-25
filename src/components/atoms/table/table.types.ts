import {
  ColumnDef,
  Table as ReactTable,
  CellContext,
  HeaderContext,
  SortingState,
  Row,
} from '@tanstack/react-table';

/**
 * @param cellProps - Cell Props for the table
 * @param columns - Columns for the table
 * @param data - Data for the table
 * @param defaultPageSize - Default Page Size for the table
 * @param defaultSorting - Default sorting for the table
 * @param enablePagination -  Whether Pagination should be enabled of the table
 * @param enableRowSelection -  Whether row sorting should be enabled of the table
 * @param enableSorting - Whether sorting should be enabled of the table
 * @param footer - Footer of the table
 * @param header - Header of the table
 * @param headerCellProps - Header Cell props of the table
 * @param onAllRowsSelectionChange - Handler function for all row selection
 * @param onRowSelection - Handler for row selection
 * @param onSortingChange - Handler for sorting change
 * @param rowProps - Row props of table
 * @param sorting - Sorting state of table
 */

export interface TableProps<TData = unknown> {
  cellProps?: (context: CellContext<TData, unknown>) => React.HTMLProps<HTMLTableCellElement>;
  className?: string;
  columns: ColumnDef<TData, unknown>[];
  data: TData[];
  defaultPageSize?: number;
  defaultSorting?: SortingState;
  enablePagination?: boolean;
  enableRowSelection?: boolean;
  enableSorting?: boolean;
  footer?: (table: ReactTable<TData>) => React.ReactNode;
  header?: (table: ReactTable<TData>) => React.ReactNode;
  headerCellProps?: (
    context: HeaderContext<TData, unknown>
  ) => React.HTMLProps<HTMLTableCellElement>;
  onAllRowsSelectionChange?: (checked: boolean) => void;
  onRowSelection?: (v: { checked: boolean; row: Row<TData> }) => void;
  onSortingChange?: (sorting: SortingState) => void;
  rowProps?: (context: {
    row: Row<TData>;
    table: ReactTable<TData>;
  }) => React.HTMLProps<HTMLTableRowElement>;
  sorting?: SortingState;
}
