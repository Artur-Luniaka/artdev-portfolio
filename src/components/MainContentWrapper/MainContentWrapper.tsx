import { ReactNode } from "react";

interface MainContentWrapperProps {
  children: ReactNode;
}

const MainContentWrapper = ({ children }: MainContentWrapperProps) => {
  return <main>{children}</main>;
};

export default MainContentWrapper;
