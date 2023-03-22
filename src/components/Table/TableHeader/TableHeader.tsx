import clsx from "clsx";
import { FC } from "react";

import { TableHeaderWrapper } from "./styles";
import { TableHeaderProps } from "./types";

const TableHeader: FC<TableHeaderProps> = ({ children, classes }) => {
  return (
    <TableHeaderWrapper className={clsx(classes)}>
      {children}
    </TableHeaderWrapper>
  );
};

export default TableHeader;
