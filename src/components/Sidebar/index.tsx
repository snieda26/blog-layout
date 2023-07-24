import { Menu } from "@components/Menu";
import { ProfileInfo } from "@components/ProfileInfo";

import { Avatar, Logo, Plus } from "@components/Icons";

import styles from "./sidebar.module.scss";
import { ToggleTheme } from "@components/ToggleTheme";
import { Link } from "react-router-dom";
import { Button } from "ui/Button";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Link to="/">
          <Logo />
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
        Avatar={Avatar}
        username="Jenny Wilson"
      />
      <div className={styles.theme}>
        <ToggleTheme />
      </div>
    </aside>
  );
};
