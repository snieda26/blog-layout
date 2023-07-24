import { PageLayout } from "layout/PageLayout";

import styles from "./settings.module.scss";
import { Avatar, Brush } from "@components/Icons";
import { Button } from "ui/Button";
import { Input } from "ui/Input";
import { DropDown } from "ui/DropDown";
import { CountryOptions, CurrencyOptions } from "@mock/dropDown";
import { FormEvent } from "react";

export const Settings = () => {
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <PageLayout title="Налаштування">
      <div className={styles.edit}>
        <div className={styles.edit_avatar}>
          <Avatar />
          <div className={styles.brush}>
            <Brush />
          </div>
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmitForm}>
        <div className={styles.inputs}>
          <Input type="text" label="Імʼя" value="Jenny" />
          <Input type="text" label="Прізвище" value="Wilson" />
          <Input type="text" label="Імʼя користувача" value="jen.wilson" />
          <Input type="text" label="Email" value="jen.wilson@gmail.com" />
          <DropDown label="Валюта" data={CurrencyOptions} />
          <DropDown label="Країна" data={CountryOptions} />
        </div>
        <Button borderRadius={4}>Зберегти</Button>
      </form>
    </PageLayout>
  );
};
