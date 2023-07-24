import { Outlet } from "react-router-dom";

import { Sidebar } from "@components/Sidebar";

import styles from "./appLayout.module.scss";

export const AppLayout = () => {
  return (
    <main className={styles.container}>
      <Sidebar />
      <Outlet />
    </main>
  );
};
