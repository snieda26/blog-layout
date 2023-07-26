import { FC, ReactNode } from "react";

import styles from "./pageLayout.module.scss";
import { Separator } from "ui/Separator";
import { Heading } from "ui/Heading";

interface IPageLayout {
  children: ReactNode;
  title: string;
  search: boolean;
}

export const PageLayout: FC<IPageLayout> = ({ children, title, search }) => {
  return (
    <section className={styles.layout}>
      <Heading placeholder="Пошук" hasInput={search}>
        {title}
      </Heading>
      <div className={styles.container}>
        <Separator />
        {children}
      </div>
    </section>
  );
};
