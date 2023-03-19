import { TableHeaderWrapper } from "./styles";

const TableHeader = ({ children, ...props }) => {
  return <TableHeaderWrapper {...props}>{children}</TableHeaderWrapper>;
};

export default TableHeader;
