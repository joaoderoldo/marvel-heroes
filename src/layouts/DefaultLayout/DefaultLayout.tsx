import { FC } from "react";

import { Header } from "@/components";

import { DefaultLayoutProps } from "./types";

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default DefaultLayout;
