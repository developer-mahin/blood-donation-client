export type TLoginData = {
  name: string;
  label: string;
  type: string;
};

export const loginData: TLoginData[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
];
