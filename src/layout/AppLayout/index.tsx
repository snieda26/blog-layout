import { Outlet } from "react-router-dom";

import { Sidebar } from "@components/Sidebar";

import styles from "./appLayout.module.scss";
import { useContext } from "react";
import { ThemeContext } from "@providers/ThemeProvider";
import { MobileMenu } from "@components/MobileMenu";

export const AppLayout = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <main className={styles.wrapper} data-theme={currentTheme}>
      <div className={styles.container}>
        <MobileMenu />
        <Sidebar />
        <Outlet />
      </div>
    </main>
  );
};
