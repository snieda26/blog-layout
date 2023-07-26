import { FC } from "react";

import styles from "./input.module.scss";
import { Label } from "ui/Label";

interface IInput {
  label: string;
  type: "email" | "text" | "password";
  value?: string;
  placeholder?: string;
  width: string;
}

export const Input: FC<IInput> = ({
  label,
  type,
  value = "",
  placeholder = "Empty value",
  width,
}) => {
  return (
    <div className={styles.container} style={{ width: `${width}` }}>
      <Label>{label}</Label>
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
