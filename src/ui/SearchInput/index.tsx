import { FC } from "react";

import { Search } from "@components/Icons";

import styles from "./searchInput.module.scss";

interface ISearchInput {
  placeholder: string;
}

export const SearchInput: FC<ISearchInput> = ({ placeholder }) => {
  return (
    <div className={styles.search}>
      <Search />
      <input type="text" className={styles.input} placeholder={placeholder} />
    </div>
  );
};
