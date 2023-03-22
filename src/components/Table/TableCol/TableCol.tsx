import clsx from "clsx";
import { FC } from "react";

import { TableColWrapper } from "./styles";
import { TableColProps } from "./types";

const TableCol: FC<TableColProps> = ({ children, classes, dataLabel }) => {
  return (
    <TableColWrapper className={clsx(classes)} data-label={dataLabel}>
      {children}
    </TableColWrapper>
  );
};

export default TableCol;
