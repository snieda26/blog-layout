import { FC, ReactNode } from "react";

import styles from "./label.module.scss";

interface ILabel {
  children: ReactNode;
}

export const Label: FC<ILabel> = ({ children }) => {
  return <label className={styles.label}>{children}</label>;
};
