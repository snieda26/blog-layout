import { Moon } from "@components/Icons";
import { ToggleInput } from "ui/ToggleInput";
import styles from "./toggleTheme.module.scss";

export const ToggleTheme = () => {
  return (
    <>
      <div className={styles.title}>
        <Moon />
        <span>Темна тема</span>
      </div>
      <ToggleInput />
    </>
  );
};
