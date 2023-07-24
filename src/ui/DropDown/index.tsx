import { FC } from "react";
import styles from "./dropDown.module.scss";
import { ISelectOptions } from "@mock/dropDown";

interface IDropDown {
  label: string;
  data: ISelectOptions[];
}

export const DropDown: FC<IDropDown> = ({ label, data }) => {
  return (
    <div>
      <label className={styles.label}>{label}</label>
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
