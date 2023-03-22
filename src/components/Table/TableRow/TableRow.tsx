import clsx from "clsx";
import { FC } from "react";

import { TableRowWrapper } from "./styles";
import { TableRowProps } from "./types";

const TableRow: FC<TableRowProps> = ({
  children,
  classes,
  onClick,
  clickable,
}) => {
  return (
    <TableRowWrapper className={clsx(classes)} onClick={onClick}>
      {children}
    </TableRowWrapper>
  );
};

export default TableRow;
