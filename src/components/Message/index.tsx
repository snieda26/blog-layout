import { FC } from "react";

import styles from "./message.module.scss";
import { cropText } from "@utils/cropText";

interface IMessage {
  title: string;
  message: string;
}

export const Message: FC<IMessage> = ({ title, message }) => {
  return (
    <div className={styles.message}>
      <div className={styles.heading}>
        <span className={styles.title}>{title}</span>
        <span className={styles.date}>
          {new Date().toLocaleDateString("en-GB")}
        </span>
      </div>
      <span className={styles.content}>{cropText(message, 180)}</span>
    </div>
  );
};
