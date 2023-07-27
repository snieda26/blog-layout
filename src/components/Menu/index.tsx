import { NavLink } from "react-router-dom";

import { MenuData } from "@mock/menuData";

import styles from "./menu.module.scss";
import { ToggleTheme } from "ui/ToggleTheme";
import { FC } from "react";

interface IMenu {
  handleCloseMenu?: () => void;
}

export const Menu: FC<IMenu> = ({ handleCloseMenu }) => {
  return (
    <div className={styles.menu}>
      <span className={styles.title}>Меню</span>
      <nav className={styles.navigation}>
        {MenuData.map(item => {
          const IconToRender = item.icon;
          return (
            <NavLink
              key={item.id}
              to={item.slug}
              className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.link}` : styles.link
              }
              onClick={handleCloseMenu}
            >
              <div className={styles.linkIcon}>
                <IconToRender />
                <span>{item.title}</span>
              </div>
              {item.messagesCount && (
                <div className={styles.messages}>{item.messagesCount}</div>
              )}
            </NavLink>
          );
        })}
        <div className={styles.theme}>
          <ToggleTheme />
        </div>
        <span className={styles.separator} />
      </nav>
    </div>
  );
};
