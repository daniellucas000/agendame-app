import { object, string } from "yup";

export const schema = object({
  email: string().required().email().label("E-mail"),
  password: string().required().label("Senha"),
});
