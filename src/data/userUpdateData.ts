export type TUserUpdateData = {
  column: number;
  name: string;
  label: string;
  type?: string;
};

export const userUpdateData: TUserUpdateData[] = [
  {
    column: 6,
    name: "name",
    label: "Name",
    type: "text",
  },
  {
    column: 6,
    name: "location",
    label: "Location",
    type: "text",
  },

  {
    column: 6,
    name: "age",
    label: "Age",
    type: "number",
  },
  {
    column: 6,
    name: "contactNumber",
    label: "Contact Number",
    type: "text",
  },
  {
    column: 6,
    name: "bio",
    label: "Bio",
    type: "text",
  },
];
