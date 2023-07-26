import { FC } from "react";

import styles from "./card.module.scss";
import { Button } from "ui/Button";
import { Link } from "react-router-dom";
import { Like } from "ui/Like";

interface ICard {
  image: string;
  tags: string[];
  title: string;
  description: string;
}

export const Card: FC<ICard> = ({ image, tags, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="" className={styles.image} />
      <div className={styles.container}>
        <div className={styles.tags}>
          {tags.map(item => (
            <div key={item} className={styles.tag}>
              <span className={styles.hashtag}>#</span>
              {item}
            </div>
          ))}
        </div>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
        <div className={styles.buttons}>
          <Like />
          <Link to="/">
            <Button borderRadius={4}>Прочитати</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
