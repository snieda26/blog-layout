import { useContext } from "react";
import styles from "./toggleInput.module.scss";
import { ThemeContext } from "@providers/ThemeProvider";

export const ToggleInput = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <label>
      <input type="checkbox" onChange={toggleTheme} />
      <span className={styles.background} />
    </label>
  );
};
