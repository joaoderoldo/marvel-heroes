import { TableRowWrapper } from "./styles";

const TableRow = ({ children, ...props }) => {
  return <TableRowWrapper {...props}>{children}</TableRowWrapper>;
};

export default TableRow;
