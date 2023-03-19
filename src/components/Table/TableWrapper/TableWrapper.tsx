import { TableWrapperWrapper } from "./styles";

const TableWrapper = ({ children, ...props }) => {
  return <TableWrapperWrapper {...props}>{children}</TableWrapperWrapper>;
};

export { TableWrapper };
