import React, { FC } from "react";
import { LayoutContainer } from "./Layout.styles";

export const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};
