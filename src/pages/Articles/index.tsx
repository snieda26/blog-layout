import { Card } from "@components/Card";
import { RegionOptions } from "@mock/dropDown";
import { DashboardLayout } from "layout/DashboardLayout";
import { DropDown } from "ui/DropDown";
import { Separator } from "ui/Separator";

import cardImage from "@assets/cardImage.png";

import styles from "./articles.module.scss";

export const Articles = () => {
  return (
    <DashboardLayout title="Статті" placeholder="Пошук">
      <Separator />
      <DropDown data={RegionOptions} label="" width="100%" />
      <div className={styles.container}>
        {new Array(6).fill(
          <Card
            image={cardImage}
            title="Intro to Product Design"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit nibh et nisl, pellentesque scelerisque faucibus facilisis at. Placerat morbi sem viverra diam lectus odio orci... "
            tags={["UI Design", "Web Design", "Design"]}
          />
        )}
      </div>
    </DashboardLayout>
  );
};
