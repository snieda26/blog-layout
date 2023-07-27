import { RegionOptions } from "@mock/dropDown";
import { DashboardLayout } from "layout/DashboardLayout";
import { DropDown } from "ui/DropDown";
import { Separator } from "ui/Separator";
import { Articles as ArticlesContent } from "@components/Articles";

export const Articles = () => {
  return (
    <DashboardLayout title="Статті" placeholder="Пошук">
      <Separator />
      <DropDown data={RegionOptions} label="" width="100%" />
      <ArticlesContent />
    </DashboardLayout>
  );
};
