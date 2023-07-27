import { Link } from "react-router-dom";
import styles from "./mobileMenu.module.scss";
import { Burger, Logo } from "@components/Icons";
import { useState } from "react";
import { Menu } from "@components/Menu";
import { ProfileInfo } from "@components/ProfileInfo";
import avatar from "@assets/avatar.svg";

export const MobileMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeVisibility = () => {
    setIsVisible(!isVisible);
    window.scroll(0, 0);
  };
  return (
    <div className={styles.mobileMenu}>
      <div className={styles.heading}>
        <Link to="/">
          <Logo />
        </Link>
        <div onClick={handleChangeVisibility}>
          <Burger />
        </div>
      </div>
      {isVisible && (
        <div className={styles.container}>
          <Menu handleCloseMenu={handleChangeVisibility} />
          <ProfileInfo
            avatar={avatar}
            username="Jenny Wilson"
            email="jen.wilson@gmail.com"
          />
        </div>
      )}
    </div>
  );
};
