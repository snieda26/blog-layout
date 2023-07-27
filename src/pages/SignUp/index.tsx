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
        width="100%"
      />
      <Input
        type="text"
        label="Прізвище"
        placeholder="Введіть своє прізвище"
        value="Wilson"
        width="100%"
      />
      <Input
        type="text"
        label="Імʼя користувача"
        placeholder="Введіть імʼя користувача"
        value="jen.wilson"
        width="100%"
      />
      <Input
        type="email"
        label="Email"
        placeholder="Введіть свій email"
        value="jen.wilson@gmail.com"
        width="100%"
      />
      <Input
        type="password"
        label="Пароль"
        placeholder="Введіть пароль"
        value="12345"
        width="100%"
      />
      <Input
        type="password"
        label="Повторіть пароль"
        placeholder="Введіть пароль"
        value="12345"
        width="100%"
      />
    </AuthLayout>
  );
};
