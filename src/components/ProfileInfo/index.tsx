import { FC } from "react";

import styles from "./profile.info.module.scss";
import { Logout } from "@components/Icons";

interface IProfileInfo {
  avatar: string;
  username: string;
  email: string;
}

export const ProfileInfo: FC<IProfileInfo> = ({ avatar, username, email }) => {
  return (
    <div className={styles.profileInfo}>
      <span className={styles.title}>Профіль</span>
      <div className={styles.profile}>
        <div>
          <img src={avatar} alt="" />
        </div>
        <div className={styles.profileName}>
          <span className={styles.username}>{username}</span>
          <span className={styles.email}>{email}</span>
        </div>
      </div>
      <button className={styles.logout}>
        <Logout />
        <span>Вийти</span>
      </button>
    </div>
  );
};
