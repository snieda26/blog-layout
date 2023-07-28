import { FC, useState } from "react";

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
  const [input, setInput] = useState(value);
  return (
    <div className={styles.container} style={{ width: `${width}` }}>
      <Label>{label}</Label>
      <fieldset>
        <input
          type={type}
          name=""
          value={input}
          placeholder={placeholder}
          className={styles.input}
          required
          onChange={e => setInput(e.target.value)}
        />
        <label className={styles.error}>Error</label>
      </fieldset>
    </div>
  );
};
