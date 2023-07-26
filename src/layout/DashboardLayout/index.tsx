import { FC, ReactNode } from "react";

import styles from "./dashboardLayout.module.scss";
import { Heading } from "ui/Heading";

interface IDashboardLayout {
  children: ReactNode;
  title: string;
  placeholder: string;
}

export const DashboardLayout: FC<IDashboardLayout> = ({
  title,
  children,
  placeholder,
}) => {
  return (
    <section className={styles.layout}>
      <Heading placeholder={placeholder} hasInput>
        {title}
      </Heading>
      <div className={styles.content}>{children}</div>
    </section>
  );
};
