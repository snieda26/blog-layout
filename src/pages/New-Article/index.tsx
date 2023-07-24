import { PageLayout } from "layout/PageLayout";
import { Button } from "ui/Button";
import { TextArea } from "ui/TextArea";
import { UploadFile } from "ui/UploadFile";

import styles from "./newArticle.module.scss";
import { FormEvent } from "react";

export const NewArticle = () => {
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <PageLayout title="Створення Статті">
      <form className={styles.form} onSubmit={handleSubmitForm}>
        <UploadFile label="Завантажити фото" />
        <TextArea label="Текст статті" placeholder="Напишіть сюди ваш текст" />
        <Button borderRadius={4}>Опублікувати</Button>
      </form>
    </PageLayout>
  );
};
