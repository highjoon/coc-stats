import { ReactNode } from "react";

export interface IProps {
  toggleHandler: () => void;
  name: string;
  children: ReactNode;
}
