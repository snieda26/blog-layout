import { FC, ReactNode } from "react";

import styles from "./button.module.scss";

interface IButton {
  borderRadius: number;
  children: ReactNode;
}

export const Button: FC<IButton> = ({ borderRadius, children }) => {
  return (
    <button className={styles.button} style={{ borderRadius }}>
      {children}
    </button>
  );
};
