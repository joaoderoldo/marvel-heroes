export interface PaginationProps {
  totalPages: number;
  handleOffset: (offset: number) => void;
  classes?: string | string[];
}
