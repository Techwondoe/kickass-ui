import { Button } from '../Button/Button';

export interface UsePaginationProps {
  boundaryCount?: number;
  className?: string;
  count?: number;
  defaultPage?: number;
  onChange?: (page: number) => void;
  page?: number;
  siblingCount?: number;
}

export interface UsePaginationReturnType {
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
