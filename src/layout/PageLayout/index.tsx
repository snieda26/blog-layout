import { FC, ReactNode } from "react";

import styles from "./pageLayout.module.scss";
import { SearchInput } from "ui/SearchInput";

interface IPageLayout {
  children: ReactNode;
  title: string;
  search?: boolean;
}

export const PageLayout: FC<IPageLayout> = ({ children, title, search }) => {
  return (
    <section className={styles.layout}>
      <div className={styles.heading}>
        <span className={styles.title}>{title}</span>
        {search && <SearchInput placeholder="Пошук" />}
      </div>
      <div className={styles.container}>
        <span className={styles.separator} />
        {children}
      </div>
    </section>
  );
};
