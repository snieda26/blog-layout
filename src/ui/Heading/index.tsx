import { FC, ReactNode } from "react";

import styles from "./heading.module.scss";
import { SearchInput } from "ui/SearchInput";

interface IHeading {
  children: ReactNode;
  hasInput: boolean;
  placeholder: string;
}

export const Heading: FC<IHeading> = ({ children, hasInput, placeholder }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.title}>{children}</span>
        {hasInput && <SearchInput placeholder={placeholder} />}
      </div>
    </div>
  );
};
