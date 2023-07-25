import { FC, FormEvent, ReactNode } from "react";

import styles from "./authLayout.module.scss";
import { Link, useLocation } from "react-router-dom";
import { Apple, Facebook, Google, Logo } from "@components/Icons";
import { Button } from "ui/Button";
import { SocialButton } from "ui/SocialButton";

interface IAuthLayout {
  children: ReactNode;
}

export const AuthLayout: FC<IAuthLayout> = ({ children }) => {
  const { pathname } = useLocation();

  console.log(pathname);

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.auth}>
        <Logo />
        <div className={styles.content}>
          <span className={styles.title}>
            {pathname === "sign-in" ? "Вхід" : "Реєстрація"}
          </span>
          <span className={styles.description}>
            Ласкаво просимо.{" "}
            {pathname === "/sign-in"
              ? "Уввійдіть в систему"
              : "Створіть собі обліковий запис"}
          </span>
          <form className={styles.form} onSubmit={handleSubmitForm}>
            {children}
            <div className={styles.checkbox}>
              <input type="checkbox" className={styles.input} id="remember" />
              <label htmlFor="remember">Залишитися в системі?</label>
            </div>
            <Button borderRadius={4}>Продожвити</Button>
          </form>
        </div>
        {pathname === "/sign-up" && (
          <>
            <span className={styles.divider}>
              <span>Уввійдіть з</span>
            </span>
            <div className={styles.icons}>
              <SocialButton Icon={Google} title="Google" />
              <SocialButton Icon={Apple} title="Apple" />
              <SocialButton Icon={Facebook} title="Facebook" />
            </div>
          </>
        )}
        <div className={styles.footer}>
          {pathname === "/sign-in" ? (
            <>
              <span>У вас ще немає аккаунту?</span>
              <Link to="/sign-up">Зареєструватися</Link>
            </>
          ) : (
            <>
              <span>У вас є аккаунт?</span>
              <Link to="/sign-in">Уввійти</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
