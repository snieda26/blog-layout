import styles from "./toggleInput.module.scss";

export const ToggleInput = () => {
  return (
    <label>
      <input type="checkbox" />
      <span className={styles.background} />
    </label>
  );
};
