export type TChangePassword = {
  column: number;
  name: string;
  label: string;
  type?: string;
};

export const changePasswordData: TChangePassword[] = [
  {
    column: 6,
    name: "currentPassword",
    label: "Current Password",
    type: "password",
  },
  {
    column: 6,
    name: "newPassword",
    label: "New Password",
    type: "password",
  },
  {
    column: 6,
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
  },
];
