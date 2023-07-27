import { DashboardLayout } from "layout/DashboardLayout";
import { Separator } from "ui/Separator";

import { Articles } from "@components/Articles";

export const Dashboard = () => {
  return (
    <DashboardLayout title="Дошка" placeholder="Пошук">
      <Separator />
      <Articles />
    </DashboardLayout>
  );
};
