import { Card } from "@components/Card";
import { ArticlesData } from "@mock/articles";

import styles from "./articles.module.scss";

export const Articles = () => {
  return (
    <div className={styles.container}>
      {ArticlesData.map(item => (
        <Card
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          tags={item.tags}
        />
      ))}
    </div>
  );
};
