import { PageLayout } from "layout/PageLayout";

import styles from "./settings.module.scss";
import { Brush } from "@components/Icons";
import { Button } from "ui/Button";
import { Input } from "ui/Input";
import { DropDown } from "ui/DropDown";
import { CountryOptions, CurrencyOptions } from "@mock/dropDown";
import { FormEvent } from "react";
import avatar from "@assets/avatar.svg";

export const Settings = () => {
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <PageLayout title="Налаштування" search={false}>
      <div className={styles.edit}>
        <div className={styles.edit_avatar}>
          <img src={avatar} alt="Avatar Image" />
          <div className={styles.brush}>
            <Brush />
          </div>
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmitForm}>
        <div className={styles.inputs}>
          <Input type="text" label="Імʼя" value="Jenny" width="420px" />
          <Input type="text" label="Прізвище" value="Wilson" width="420px" />
          <Input
            type="text"
            label="Імʼя користувача"
            value="jen.wilson"
            width="420px"
          />
          <Input
            type="text"
            label="Email"
            value="jen.wilson@gmail.com"
            width="420px"
          />
          <DropDown label="Валюта" data={CurrencyOptions} width="420px" />
          <DropDown label="Країна" data={CountryOptions} width="420px" />
        </div>
        <Button borderRadius={4}>Зберегти</Button>
      </form>
    </PageLayout>
  );
};
