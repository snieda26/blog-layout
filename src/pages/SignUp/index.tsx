import { AuthLayout } from "layout/AuthLayout";
import { Input } from "ui/Input";

export const SignUp = () => {
  return (
    <AuthLayout>
      <Input
        type="text"
        label="Імʼя"
        placeholder="Введіть своє імʼя"
        value="Jenny"
      />
      <Input
        type="text"
        label="Прізвище"
        placeholder="Введіть своє прізвище"
        value="Wilson"
      />
      <Input
        type="text"
        label="Імʼя користувача"
        placeholder="Введіть імʼя користувача"
        value="jen.wilson"
      />
      <Input
        type="email"
        label="Email"
        placeholder="Введіть свій email"
        value="jen.wilson@gmail.com"
      />
      <Input
        type="password"
        label="Пароль"
        placeholder="Введіть пароль"
        value="12345"
      />
      <Input
        type="password"
        label="Повторіть пароль"
        placeholder="Введіть пароль"
        value="12345"
      />
    </AuthLayout>
  );
};
