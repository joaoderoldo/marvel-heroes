export interface TableRowProps {
  children: React.ReactNode;
  classes?: string | string[];
  onClick?: () => void;
  key: string | number;
}
