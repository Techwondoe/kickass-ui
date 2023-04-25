import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';
import clsx from 'clsx';
import { Pagination } from '../Pagination/pagination';
import { TableHead } from './components/table-head';
import { TableBody } from './components/table-body';
import { TableProps } from './table.types';


export function Table({
  data,
  columns,
  enableRowSelection = false,
  enableSorting = false,
  enablePagination = false,
  cellProps = () => ({}),
  headerCellProps = () => ({}),
  rowProps = () => ({}),
  header,
  footer,
  defaultPageSize = 10,
  defaultSorting,
  sorting,
  onSortingChange,
  onAllRowsSelectionChange,
  onRowSelection,
  className = ''
}: TableProps<unknown>) {
  const [mouseOverRowIndex, setMouseOverRowIndex] = useState(-1);
  const table = useReactTable<unknown>({
    autoResetPageIndex: false,
    columns,
    data,
    debugTable: false,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: enablePagination ? getPaginationRowModel() : undefined,
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    initialState: {
      pagination: {
        pageSize: defaultPageSize,
      },
      sorting: defaultSorting,
    },
    ...(sorting && {
      state: {
        sorting,
      },
    }),
    manualPagination: !enablePagination,
    meta: {
      mouseOverRowIndex,
    },
  });

  const childClassName = `border-t first:border-t-0 border-gray-200`;

  return (
    <div
      className={`border border-gray-200 rounded-lg shadow-sm overflow-hidden ${className}`}
      onMouseLeave={() => setMouseOverRowIndex(-1)}>
      {header && <div>{header(table)}</div>}
      <div className={clsx('overflow-auto', childClassName)}>
        <table className={`w-full`}>
          <TableHead
            table={table}
            headerCellProps={headerCellProps}
            enableSorting={enableSorting}
            enableRowSelection={enableRowSelection}
            sorting={sorting}
            onSortingChange={onSortingChange}
            onAllRowsSelectionChange={onAllRowsSelectionChange}
          />
          <TableBody
            table={table}
            enableRowSelection={enableRowSelection}
            cellProps={cellProps}
            onRowSelection={onRowSelection}
            onMouseOverRow={(row) => setMouseOverRowIndex(row.index)}
            rowProps={rowProps}
          />
        </table>
      </div>
      {enablePagination && (
        <div className={childClassName}>
          <Pagination
            count={table.getPageCount()}
            page={table.getState().pagination.pageIndex}
            onChange={(page) => table.setPageIndex(page)}
          />
        </div>
      )}
      {footer && <div className={childClassName}>{footer(table)}</div>}
    </div>
  );
}
