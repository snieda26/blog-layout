import { AuthLayout } from "layout/AuthLayout";
import { Input } from "ui/Input";

export const SignIn = () => {
  return (
    <AuthLayout>
      <Input
        label="Email"
        type="email"
        placeholder="Введіть свій email"
        value="jen.wilson@gmail.com"
      />
      <Input
        label="Пароль"
        type="password"
        placeholder="Введіть свій пароль"
        value="12345"
      />
    </AuthLayout>
  );
};
