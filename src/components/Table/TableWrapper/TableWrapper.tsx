import clsx from "clsx";
import { FC } from "react";

import { TableWrapperWrapper } from "./styles";
import { TableWrapperProps } from "./types";

const TableWrapper: FC<TableWrapperProps> = ({ children, classes }) => {
  return (
    <TableWrapperWrapper className={clsx(classes)}>
      {children}
    </TableWrapperWrapper>
  );
};

export { TableWrapper };
