import { useParams } from "react-router";

import styles from "./article.module.scss";
import { ArticlesData } from "@mock/articles";
import { ErrorPage } from "@pages/ErrorPage";
import { Tags } from "@components/Tags";
import { Heading } from "ui/Heading";
import { Card } from "@components/Card";
import { Comments as CommentsMock } from "@mock/comments";
import { Comments } from "@components/Comments";
import { Input } from "ui/Input";
import { Button } from "ui/Button";
import { Send } from "@components/Icons";

export const Article = () => {
  const { id } = useParams();

  const currentArticle = ArticlesData.find(item => item.id === id);

  if (!currentArticle) {
    return <ErrorPage />;
  }

  const { image, title, tags, description } = currentArticle;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={image} alt="" className={styles.image} />
        <span className={styles.title}>{title}</span>
        <Tags tags={tags} />
        <span className={styles.description}>{description}</span>
      </div>
      <div>
        <Heading hasInput={false} placeholder="">
          Рекомендуємо
        </Heading>
        <div className={styles.articles}>
          {ArticlesData.slice(0, 3).map(item => (
            <Card
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
      <div>
        <Heading hasInput={false} placeholder="">
          Коментарі
        </Heading>
        <div className={styles.comments}>
          <Comments comments={CommentsMock} />
          <div className={styles.input}>
            <Input
              placeholder="Почніть писати..."
              type="text"
              width="100%"
              label=""
            />
            <Button borderRadius={4}>
              <Send />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
