import GroupIcon from "@mui/icons-material/Group";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyIcon from "@mui/icons-material/Key";
import { MdBloodtype } from "react-icons/md";
import { BiSolidDonateBlood } from "react-icons/bi";
import { ElementType, ReactNode } from "react";

export type TSidebarItems = {
  name: string;
  path: string;
  icon: ElementType;
};

export const adminSidebarItems: TSidebarItems[] = [
  {
    name: "Profile",
    path: "/profile",
    icon: AccountBoxIcon,
  },
  {
    name: "Users",
    path: "/dashboard/admin/users",
    icon: GroupIcon,
  },
  {
    name: "Change Password",
    path: "/change_password",
    icon: KeyIcon,
  },
];

export const donorSidebarItems: TSidebarItems[] = [
  {
    name: "My Donation",
    path: "/dashboard/donor/my_donation",
    icon: BiSolidDonateBlood,
  },
  {
    name: "My Request",
    path: "/dashboard/donor/my_donation",
    icon: MdBloodtype,
  },
  {
    name: "Change Password",
    path: "/change_password",
    icon: KeyIcon,
  },
];
