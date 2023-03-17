import { flexRender, HeaderContext, SortingState, Table } from '@tanstack/react-table';
import React, { FC } from 'react';
import { Checkbox } from '../../checkbox/checkbox';
import { Icon } from '../../icon';

interface TableHeadProps<TData = unknown> {
  enableRowSelection?: boolean;
  enableSorting?: boolean;
  headerCellProps?: (
    context: HeaderContext<unknown, unknown>
  ) => React.HTMLProps<HTMLTableCellElement>;
  onAllRowsSelectionChange?: (checked: boolean) => void;
  onSortingChange?: (sorting: SortingState) => void;
  sorting?: SortingState;
  table: Table<TData>;
}

export const TableHead: FC<TableHeadProps> = ({
  table,
  headerCellProps,
  enableSorting = false,
  enableRowSelection = false,
  onAllRowsSelectionChange,
  onSortingChange,
}) => {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup, headerGroupIndex) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header, headerIndex) => {
            const props = headerCellProps?.(header.getContext()) ?? {};
            const sortDirection = header.column.getIsSorted();
            return (
              <th
                key={header.id}
                colSpan={header.colSpan}
                {...props}
                className={`bg-gray-50 ${
                  headerGroupIndex === 0 ? '' : 'border-t'
                } border-gray-200 px-6 py-3 text-xs font-Inter font-normal text-gray-500 ${
                  header.subHeaders.length ? 'text-center' : 'text-left'
                } ${props?.className}`}>
                {header.isPlaceholder ? null : (
                  <div
                    {...(enableSorting
                      ? {
                          className: `${
                            header.column.getCanSort() ? 'cursor-pointer select-none flex' : 'flex'
                          }`,
                        }
                      : {})}>
                    <div className="flex items-center">
                      {enableRowSelection &&
                        headerGroupIndex === table.getHeaderGroups().length - 1 &&
                        headerIndex === 0 && (
                          <div className="flex justify-center items-center pr-3">
                            <Checkbox
                              name="row_select"
                              checked={table.getIsAllRowsSelected()}
                              indeterminate={table.getIsSomeRowsSelected()}
                              onChange={(checked) => {
                                table.toggleAllRowsSelected(checked);
                                onAllRowsSelectionChange?.(checked);
                              }}
                            />
                          </div>
                        )}
                      <div
                        className="grow flex items-center"
                        onClick={(event) => {
                          if (header.column.getCanSort()) {
                            header.column.getToggleSortingHandler()?.(event);
                            const nextSortOrder = header.column.getNextSortingOrder();
                            onSortingChange?.(
                              nextSortOrder
                                ? [
                                    {
                                      id: header.id,
                                      desc: nextSortOrder === 'desc',
                                    },
                                  ]
                                : []
                            );
                          }
                        }}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {sortDirection && (
                          <Icon
                            name={sortDirection === 'asc' ? 'arrow-up' : 'arrow-down'}
                            color="gray-500"
                            size={16}
                            className="ml-1"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};
