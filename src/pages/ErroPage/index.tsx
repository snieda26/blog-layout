import { Close, Error } from "@components/Icons";

import notFound from "@assets/not-found.png";

import styles from "./errorPage.module.scss";
import { SearchInput } from "ui/SearchInput";
import { Button } from "ui/Button";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.error}>
        <div className={styles.close} onClick={() => navigate("/")}>
          <Close />
        </div>
        <img src={notFound} alt="" />
        <div className={styles.errorInfo}>
          <div className={styles.errorTag}>
            <Error />
            <span>404 Error</span>
          </div>
          <span className={styles.heading}>Page Not Found</span>
          <span className={styles.description}>
            Sorry, the page you are looking for doesn’t exist or has been
            removed. Keep exploring out site:
          </span>
        </div>
        <div className={styles.search}>
          <SearchInput placeholder="Пошук по сайту" />
          <Button borderRadius={4}>Пошук</Button>
        </div>
      </div>
    </div>
  );
};
