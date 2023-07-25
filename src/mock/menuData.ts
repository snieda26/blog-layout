import { Article, Dashboard, Notification, Settings } from "@components/Icons";
import { v4 as uuid } from "uuid";

interface IMenuData {
  id: string;
  icon: string;
  title: string;
  slug?: string;
  messagesCount?: number;
}

export const MenuData: IMenuData[] = [
  {
    id: uuid(),
    title: "Дошка",
    slug: "/",
    messagesCount: 23,
    icon: Dashboard,
  },
  {
    id: uuid(),
    icon: Article,
    title: "Статті",
    slug: "/articles",
  },
  {
    id: uuid(),
    icon: Notification,
    title: "Повідомлення",
    slug: "/messages",
    messagesCount: 5,
  },
  {
    id: uuid(),
    icon: Settings,
    title: "Налаштування",
    slug: "/settings",
  },
];
