import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import { Button } from '../Button/Button';
import { IconButton } from '../iconButton/icon-button';
import { Typography } from '../Typography/Typography';

interface UsePaginationProps {
  boundaryCount?: number;
  count?: number;
  defaultPage?: number;
  onChange?: (page: number) => void;
  page?: number;
  siblingCount?: number;
}

interface UsePaginationReturnType {
  currentPage: number;
  goToFirstPage: () => void;
  goToLastPage: () => void;
  goToNextPage: () => void;
  goToPage: (page: number) => void;
  goToPrevPage: () => void;
  items: {
    goToThisPage?: () => void;
    page?: number;
    selected?: boolean;
    type: 'page' | 'start-ellipsis' | 'end-ellipsis';
  }[];
  nextPageExists: boolean;
  prevPageExists: boolean;
}

/* eslint-disable-next-line */
export interface PaginationProps extends UsePaginationProps {
  shape?: React.ComponentProps<typeof Button>['shape'];
}

const range = (start: number, stop: number, step = 1) =>
  Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);

export function usePagination({
  boundaryCount = 1,
  count = 1,
  defaultPage = 1,
  onChange,
  page,
  siblingCount = 1,
}: UsePaginationProps): UsePaginationReturnType {
  const [internalPageIndex, setInternalPageIndex] = useState(defaultPage);

  const pageIndex = page ?? internalPageIndex;
  const goToPage = onChange ?? setInternalPageIndex;
  const initialPageIndex = 0;
  const finalPageIndex = count - 1;
  const prevPageExists = pageIndex > initialPageIndex;
  const nextPageExists = pageIndex < finalPageIndex;
  const prevPageIndex = prevPageExists ? pageIndex - 1 : pageIndex;
  const nextPageIndex = nextPageExists ? pageIndex + 1 : pageIndex;
  const goToNextPage = useCallback(() => goToPage(nextPageIndex), [goToPage, nextPageIndex]);
  const goToPrevPage = useCallback(() => goToPage(prevPageIndex), [goToPage, prevPageIndex]);
  const goToFirstPage = useCallback(() => goToPage(initialPageIndex), [goToPage, initialPageIndex]);
  const goToLastPage = useCallback(() => goToPage(finalPageIndex), [goToPage, finalPageIndex]);

  const createItem = useCallback(
    (page: number) => ({
      page,
      type: 'page',
      selected: page === pageIndex,
      goToThisPage: () => goToPage(page),
    }),
    [goToPage, pageIndex]
  );

  let items = [];
  const minLength = 2 * boundaryCount + 2 * siblingCount + 3;
  if (count <= minLength) {
    items = range(initialPageIndex, initialPageIndex + count).map(createItem);
  } else {
    const startingArea = initialPageIndex + boundaryCount + siblingCount + 1;
    const endingArea = finalPageIndex - boundaryCount - siblingCount - 1;
    const isIndexNearStarting = pageIndex >= initialPageIndex && pageIndex <= startingArea;
    const isIndexNearEnding = pageIndex <= finalPageIndex && pageIndex >= endingArea;

    if (isIndexNearStarting) {
      items = [
        ...range(initialPageIndex, startingArea + siblingCount + 1).map(createItem),
        { type: 'end-ellipsis' },
        ...range(finalPageIndex - boundaryCount + 1, finalPageIndex + 1).map(createItem),
      ];
    } else if (isIndexNearEnding) {
      items = [
        ...range(initialPageIndex, initialPageIndex + boundaryCount).map(createItem),
        { type: 'start-ellipsis' },
        ...range(endingArea - siblingCount, finalPageIndex + 1).map(createItem),
      ];
    } else {
      items = [
        ...range(initialPageIndex, initialPageIndex + boundaryCount).map(createItem),
        { type: 'start-ellipsis' },
        ...range(pageIndex - siblingCount, pageIndex + siblingCount + 1).map(createItem),
        { type: 'end-ellipsis' },
        ...range(finalPageIndex - boundaryCount + 1, finalPageIndex + 1).map(createItem),
      ];
    }
  }

  return {
    currentPage: pageIndex,
    goToFirstPage,
    goToLastPage,
    goToNextPage,
    goToPage,
    goToPrevPage,
    items,
    nextPageExists,
    prevPageExists,
  } as UsePaginationReturnType;
}

export function Pagination({
  boundaryCount = 1,
  count = 1,
  defaultPage = 0,
  onChange,
  page,
  siblingCount = 1,
  shape = 'square',
}: PaginationProps) {
  const { items, prevPageExists, nextPageExists, currentPage, goToNextPage, goToPrevPage } =
    usePagination({
      boundaryCount,
      count,
      defaultPage,
      onChange,
      page,
      siblingCount,
    });

  return (
    <div className="px-6 py-4">
      <div className="hidden sm:flex items-center gap-2 justify-between">
        <Button
          label="Previous"
          color="gray"
          variant="outlined"
          icon="arrow-left"
          onClick={goToPrevPage}
          disabled={!prevPageExists}
        />
        <div className="hidden sm:flex items-end">
          {items.map(({ page, type, selected, goToThisPage }, index) => {
            return (
              <div
                key={index}
                className={clsx(
                  'w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-50',
                  {
                    'bg-gray-50': selected,
                    'rounded-lg': shape === 'square',
                    'rounded-full': shape === 'rounded',
                  }
                )}
                onClick={goToThisPage}>
                <Typography size="sm" color={selected ? 'gray-800' : 'gray-500'}>
                  {type === 'page' ? `${Number(page) + 1}` : '..'}
                </Typography>
              </div>
            );
          })}
        </div>
        <Button
          label="Next"
          color="gray"
          variant="outlined"
          endIcon="arrow-right"
          onClick={goToNextPage}
          disabled={!nextPageExists}
        />
      </div>
      <div className="flex items-center gap-2 justify-between sm:hidden">
        <IconButton
          color="gray"
          variant="outlined"
          icon="arrow-left"
          onClick={goToPrevPage}
          disabled={!prevPageExists}
        />
        <Typography color="gray-700" size="sm">
          Page {currentPage + 1} of {count}
        </Typography>
        <IconButton
          color="gray"
          variant="outlined"
          icon="arrow-right"
          onClick={goToNextPage}
          disabled={!nextPageExists}
        />
      </div>
    </div>
  );
}

export default Pagination;
