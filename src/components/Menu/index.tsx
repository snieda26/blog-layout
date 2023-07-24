import { NavLink } from "react-router-dom";

import { MenuData } from "@mock/menuData";

import styles from "./menu.module.scss";
import { ToggleTheme } from "@components/ToggleTheme";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <span className={styles.title}>Меню</span>
      <nav className={styles.navigation}>
        {MenuData.map(item => {
          const IconToRender = item.icon;
          return item.slug ? (
            <NavLink
              key={item.id}
              to={item.slug}
              className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.link}` : styles.link
              }
            >
              <div className={styles.linkIcon}>
                <IconToRender />
                <span>{item.title}</span>
              </div>
              {item.messagesCount && (
                <div className={styles.messages}>{item.messagesCount}</div>
              )}
            </NavLink>
          ) : (
            <div className={styles.theme}>
              <ToggleTheme />
            </div>
          );
        })}
        <span className={styles.separator} />
      </nav>
    </div>
  );
};
