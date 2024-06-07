export type TRequest = {
  name: string;
  label: string;
};

export const bloodRequestData: TRequest[] = [
  {
    name: "phoneNumber",
    label: "Phone Number",
  },
  {
    name: "hospitalName",
    label: "Hospital Name",
  },
  {
    name: "hospitalAddress",
    label: "Hospital Address",
  },
  {
    name: "reason",
    label: "Reason",
  },
];
