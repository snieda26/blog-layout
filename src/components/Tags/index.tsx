import { FC } from "react";

import { IArticlesData } from "@mock/articles";

import styles from "./tags.module.scss";

interface ITags extends Pick<IArticlesData, "tags"> {}

export const Tags: FC<ITags> = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {tags.map(item => (
        <div key={item} className={styles.tag}>
          <span className={styles.hashtag}>#</span>
          {item}
        </div>
      ))}
    </div>
  );
};
