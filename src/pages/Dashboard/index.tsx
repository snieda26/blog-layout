import { DashboardLayout } from "layout/DashboardLayout";
import { Separator } from "ui/Separator";

import styles from "./dashboard.module.scss";
import { Card } from "@components/Card";

import cardImage from "@assets/cardImage.png";

export const Dashboard = () => {
  return (
    <DashboardLayout title="Дошка" placeholder="Пошук">
      <Separator />
      <div className={styles.cards}>
        {new Array(3).fill(
          <Card
            image={cardImage}
            title="Info Product Design"
            tags={["UI Design", "Web Design", "Design"]}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, elit nibh et nisl, pellentesque scelerisque faucibus facilisis at. Placerat morbi sem viverra diam lectus odio orci... "
          />
        )}
      </div>
    </DashboardLayout>
  );
};
