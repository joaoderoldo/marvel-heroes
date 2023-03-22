import clsx from "clsx";
import { FC } from "react";

import { TableRowWrapper } from "./styles";
import { TableRowProps } from "./types";

const TableRow: FC<TableRowProps> = ({ children, classes, onClick, key }) => {
  return (
    <TableRowWrapper className={clsx(classes)} onClick={onClick} key={key}>
      {children}
    </TableRowWrapper>
  );
};

export default TableRow;
