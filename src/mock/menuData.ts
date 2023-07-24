import {
  Article,
  Dashboard,
  Moon,
  Notification,
  Settings,
} from "@components/Icons";
import { v4 as uuid } from "uuid";

interface IMenuData {
  id: string;
  icon: string;
  title: string;
  slug?: string;
  messagesCount?: number;
  class?: string;
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
    slug: "/notifications",
    messagesCount: 5,
  },
  {
    id: uuid(),
    icon: Settings,
    title: "Налаштування",
    slug: "/settings",
  },
  {
    id: uuid(),
    icon: Moon,
    title: "Темна тема",
    class: "moon",
  },
];
