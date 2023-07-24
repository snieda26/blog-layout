import { Outlet } from "react-router-dom";

import { Sidebar } from "@components/Sidebar";

import styles from "./appLayout.module.scss";

export const AppLayout = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <Sidebar />
        <Outlet />
      </div>
    </main>
  );
};
