import { FC } from "react";

import styles from "./socialButton.module.scss";

interface ISocialButton {
  Icon: string;
  title: string;
}

export const SocialButton: FC<ISocialButton> = ({ Icon, title }) => {
  return (
    <button className={styles.button}>
      <Icon />
      <span>{title}</span>
    </button>
  );
};
