import { FC, ReactNode } from "react";

import styles from "./pageLayout.module.scss";

interface IPageLayout {
  children: ReactNode;
  title: string;
}

export const PageLayout: FC<IPageLayout> = ({ children, title }) => {
  return (
    <section className={styles.layout}>
      <span className={styles.heading}>{title}</span>
      <div className={styles.container}>
        <span className={styles.separator} />
        {children}
      </div>
    </section>
  );
};
