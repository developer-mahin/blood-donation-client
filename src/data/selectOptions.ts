export type TSelectInput = {
  value: string;
  label: string;
};

export const isDonateBlood: TSelectInput[] = [
  {
    value: "yes",
    label: "Yes",
  },
  {
    value: "no",
    label: "No",
  },
];

export const bloodGroup: TSelectInput[] = [
  {
    value: "A_POSITIVE",
    label: "A_POSITIVE",
  },
  {
    value: "B_POSITIVE",
    label: "B_POSITIVE",
  },
  {
    value: "B_NEGATIVE",
    label: "B_NEGATIVE",
  },
  {
    value: "AB_POSITIVE",
    label: "AB_POSITIVE",
  },
  {
    value: "AB_NEGATIVE",
    label: "AB_NEGATIVE",
  },
  {
    value: "O_POSITIVE",
    label: "O_POSITIVE",
  },
  {
    value: "O_NEGATIVE",
    label: "O_NEGATIVE",
  },
];

export const availabilityOption: TSelectInput[] = [
  {
    value: "yes",
    label: "Available",
  },
  {
    value: "no",
    label: "Unavailable",
  },
];
