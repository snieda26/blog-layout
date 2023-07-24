import { FC } from "react";

import styles from "./input.module.scss";

interface IInput {
  label: string;
  type: "email" | "text" | "password";
  value?: string;
  placeholder?: string;
}

export const Input: FC<IInput> = ({
  label,
  type,
  value = "",
  placeholder = "Empty value",
}) => {
  return (
    <div>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        name=""
        value={value}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};
