import { DashboardLayout } from "layout/DashboardLayout";
import { Separator } from "ui/Separator";

import styles from "./dashboard.module.scss";
import { Card } from "@components/Card";

import { ArticlesData } from "@mock/articles";

export const Dashboard = () => {
  return (
    <DashboardLayout title="Дошка" placeholder="Пошук">
      <Separator />
      <div className={styles.cards}>
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
    </DashboardLayout>
  );
};
