import { Menu } from "@components/Menu";
import { ProfileInfo } from "@components/ProfileInfo";

import { Plus } from "@components/Icons";
import logo from "@assets/logo.svg";
import avatar from "@assets/avatar.svg";

import styles from "./sidebar.module.scss";
import { ToggleTheme } from "ui/ToggleTheme";
import { Link } from "react-router-dom";
import { Button } from "ui/Button";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Link to="new-article">
          <Button borderRadius={10}>
            <Plus />
            <span>Створити статтю</span>
          </Button>
        </Link>
      </div>
      <Menu />
      <ProfileInfo
        email="jen.wilson@gmail.com"
        avatar={avatar}
        username="Jenny Wilson"
      />
      <div className={styles.theme}>
        <ToggleTheme />
      </div>
    </aside>
  );
};
