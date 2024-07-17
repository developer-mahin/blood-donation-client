import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GroupIcon from "@mui/icons-material/Group";
import KeyIcon from "@mui/icons-material/Key";
import { ElementType } from "react";
import { BiSolidDonateBlood } from "react-icons/bi";
import { MdBloodtype } from "react-icons/md";

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
    name: "Profile",
    path: "/profile",
    icon: AccountBoxIcon,
  },
  {
    name: "My Donation",
    path: "/dashboard/donor/my_donation",
    icon: BiSolidDonateBlood,
  },
  {
    name: "My Request",
    path: "/dashboard/donor/my_request",
    icon: MdBloodtype,
  },
  {
    name: "Change Password",
    path: "/change_password",
    icon: KeyIcon,
  },
];
