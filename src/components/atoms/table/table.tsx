import React, { useState } from "react";
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    ColumnDef,
    getSortedRowModel,
    Table as ReactTable,
    CellContext,
    HeaderContext,
    SortingState,
    Row,
} from "@tanstack/react-table";
import clsx from "clsx";
import {Pagination} from "../Pagination/pagination";
import TableHead from "./components/table-head";
import TableBody from "./components/table-body";

export interface TableProps<TData = any> {
    data: TData[];
    columns: ColumnDef<TData, any>[];
    enableRowSelection?: boolean;
    enableSorting?: boolean;
    enablePagination?: boolean;
    defaultPageSize?: number;
    defaultSorting?: SortingState;
    sorting?: SortingState;
    onSortingChange?: (sorting: SortingState) => void;
    onAllRowsSelectionChange?: (checked: boolean) => void;
    onRowSelection?: (v: { row: Row<TData>; checked: boolean }) => void;
    cellProps?: (
        context: CellContext<TData, any>
    ) => React.HTMLProps<HTMLTableCellElement>;
    headerCellProps?: (
        context: HeaderContext<TData, any>
    ) => React.HTMLProps<HTMLTableCellElement>;
    rowProps?: (context: {
        table: ReactTable<TData>;
        row: Row<TData>;
    }) => React.HTMLProps<HTMLTableRowElement>;
    header?: (table: ReactTable<TData>) => React.ReactNode;
    footer?: (table: ReactTable<TData>) => React.ReactNode;
}

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
}: TableProps<any>) {
    const [mouseOverRowIndex, setMouseOverRowIndex] = useState(-1);
    const table = useReactTable<any>({
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
        data,
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
        getPaginationRowModel: enablePagination
            ? getPaginationRowModel()
            : undefined,
        debugTable: false,
        autoResetPageIndex: false,
        manualPagination: !enablePagination,
        meta: {
            mouseOverRowIndex,
        },
    });

    const childClassName = `border-t first:border-t-0 border-gray-200`;

    return (
        <div
            className={`border border-gray-200 rounded-lg shadow-sm overflow-hidden`}
            onMouseLeave={() => setMouseOverRowIndex(-1)}
        >
            {header && <div>{header(table)}</div>}
            <div className={clsx("overflow-auto", childClassName)}>
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
                        onMouseOverRow={row => setMouseOverRowIndex(row.index)}
                        rowProps={rowProps}
                    />
                </table>
            </div>
            {enablePagination && (
                <div className={childClassName}>
                    <Pagination
                        count={table.getPageCount()}
                        page={table.getState().pagination.pageIndex}
                        onChange={page => table.setPageIndex(page)}
                    />
                </div>
            )}
            {footer && <div className={childClassName}>{footer(table)}</div>}
        </div>
    );
}

export default Table;
