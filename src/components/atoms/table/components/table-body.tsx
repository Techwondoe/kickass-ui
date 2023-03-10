import { CellContext, flexRender, Row, Table } from '@tanstack/react-table';
import React, { FC } from 'react';
import { Checkbox } from '../../checkbox/checkbox';

interface TableBodyProps<TData = unknown> {
  cellProps?: (context: CellContext<unknown, unknown>) => React.HTMLProps<HTMLTableCellElement>;
  enableRowSelection?: boolean;
  onMouseLeaveRow?: (row: Row<TData>) => void;
  onMouseOverRow?: (row: Row<TData>) => void;
  onRowSelection?: (v: { checked: boolean; row: Row<TData> }) => void;
  rowProps?: (context: {
    row: Row<TData>;
    table: Table<TData>;
  }) => React.HTMLProps<HTMLTableRowElement>;
  table: Table<TData>;
}

const TableBody: FC<TableBodyProps> = ({
  table,
  cellProps,
  rowProps,
  enableRowSelection = false,
  onRowSelection,
  onMouseOverRow,
  onMouseLeaveRow,
}) => {
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => {
        return (
          <tr
            key={row.id}
            {...rowProps?.({ table, row })}
            onMouseOver={() => onMouseOverRow?.(row)}
            onMouseLeave={() => onMouseLeaveRow?.(row)}>
            {row.getVisibleCells().map((cell, cellIndex) => {
              const props = cellProps?.(cell.getContext()) ?? {};
              return (
                <td
                  key={cell.id}
                  {...props}
                  className={`px-6 py-4 text-sm font-normal font-Inter text-gray-500 text-left border-t border-gray-200 ${props?.className}`}>
                  <div className="flex items-center">
                    {enableRowSelection && cellIndex === 0 && (
                      <div className="flex justify-center items-center pr-3">
                        <Checkbox
                          name="row_select"
                          {...{
                            checked: row.getIsSelected(),
                            indeterminate: row.getIsSomeSelected(),
                            onChange: (checked) => {
                              row.getToggleSelectedHandler()(checked);
                              onRowSelection?.({
                                row,
                                checked,
                              });
                            },
                          }}
                        />
                      </div>
                    )}
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
