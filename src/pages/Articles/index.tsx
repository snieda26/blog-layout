import { Card } from "@components/Card";
import { RegionOptions } from "@mock/dropDown";
import { DashboardLayout } from "layout/DashboardLayout";
import { DropDown } from "ui/DropDown";
import { Separator } from "ui/Separator";

import styles from "./articles.module.scss";
import { ArticlesData } from "@mock/articles";

export const Articles = () => {
  return (
    <DashboardLayout title="Статті" placeholder="Пошук">
      <Separator />
      <DropDown data={RegionOptions} label="" width="100%" />
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
    </DashboardLayout>
  );
};
