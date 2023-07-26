import { FC } from "react";
import styles from "./dropDown.module.scss";
import { ISelectOptions } from "@mock/dropDown";
import { Label } from "ui/Label";

interface IDropDown {
  label: string;
  data: ISelectOptions[];
  width: string;
}

export const DropDown: FC<IDropDown> = ({ label, data, width }) => {
  return (
    <div className={styles.dropdown} style={{ width: `${width}` }}>
      <Label>{label}</Label>
      <select className={styles.select}>
        {data.map(item => (
          <option value={item.value} key={item.id}>
            {item.option}
          </option>
        ))}
      </select>
    </div>
  );
};
