import { TSelectInput, bloodGroup, isDonateBlood } from "./selectOptions";

export type TRegister = {
  column: number;
  name: string;
  label: string;
  type?: string;
  isSelect?: boolean;
  options?: TSelectInput[];
};

export const registerData: TRegister[] = [
  {
    column: 6,
    name: "name",
    label: "Name",
    type: "text",
  },
  {
    column: 6,
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    column: 6,
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    column: 6,
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
  },

  {
    column: 6,
    name: "location",
    label: "Location",
    type: "text",
  },
  {
    column: 6,
    name: "isDonate",
    label: "Donate blood?",
    isSelect: true,
    options: isDonateBlood,
  },
  {
    column: 6,
    name: "bloodType",
    label: "Blood Type",
    isSelect: true,
    options: bloodGroup,
  },
];
