import { TableColWrapper } from "./styles";

const TableCol = ({ children, ...props }) => {
  return <TableColWrapper {...props}>{children}</TableColWrapper>;
};

export default TableCol;
