import { ReactNode } from "react";
import s from "./ContentWrapper.module.css";

interface ContentWrapperProps {
  children: ReactNode;
}

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return <div className={s.container}>{children}</div>;
};

export default ContentWrapper;
