import { FC, ReactNode } from "react";

import styles from "./pageLayout.module.scss";

interface IPageLayout {
  children: ReactNode;
}

export const PageLayout: FC<IPageLayout> = ({ children }) => {
  return <section className={styles.layout}>{children}</section>;
};
