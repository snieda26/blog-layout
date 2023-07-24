import { FC } from "react";

import styles from "./uploadFile.module.scss";
import { Label } from "ui/Label";
import { Plus, Upload } from "@components/Icons";

interface IUploadFile {
  label: string;
}

export const UploadFile: FC<IUploadFile> = ({ label }) => {
  return (
    <div>
      <Label>{label}</Label>
      <div className={styles.fileUpload}>
        <div className={styles.icon}>
          <Upload />
          <span className={styles.text}>
            Виберіть файл, завантажений з компʼютера
          </span>
        </div>
        <label
          id="file-input-label"
          htmlFor="file-input"
          className={styles.label}
        >
          <Plus />
          <span>Завантажити</span>
        </label>
        <input type="file" id="file-input" name="file-input" />
      </div>
    </div>
  );
};
