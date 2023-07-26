import { FC } from "react";

import styles from "./card.module.scss";
import { Button } from "ui/Button";
import { Link } from "react-router-dom";
import { Like } from "ui/Like";
import { cropText } from "@utils/cropText";
import { IArticlesData } from "@mock/articles";
import { Tags } from "@components/Tags";

interface ICard extends IArticlesData {}

export const Card: FC<ICard> = ({ id, image, tags, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="" className={styles.image} />
      <div className={styles.container}>
        <Tags tags={tags} />
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{cropText(description, 120)}</span>
        <div className={styles.buttons}>
          <Like />
          <Link to={`/articles/${id}`}>
            <Button borderRadius={4}>Прочитати</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
