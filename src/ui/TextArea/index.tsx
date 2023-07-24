import { FC } from "react";

import { Label } from "ui/Label";

import styles from "./textArea.module.scss";

interface ITextArea {
  label: string;
  placeholder: string;
}

export const TextArea: FC<ITextArea> = ({ label, placeholder }) => {
  return (
    <div className={styles.container}>
      <Label>{label}</Label>
      <textarea
        cols={30}
        rows={10}
        placeholder={placeholder}
        className={styles.textArea}
      />
    </div>
  );
};
