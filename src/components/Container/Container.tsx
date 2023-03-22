import clsx from "clsx";
import { FC } from "react";

import { Wrapper } from "./styles";
import { ContainerProps } from "./types";

const Container: FC<ContainerProps> = ({ children, classes }) => {
  return (
    <Wrapper className={clsx(classes)} test-id="container-component">
      {children}
    </Wrapper>
  );
};

export default Container;
