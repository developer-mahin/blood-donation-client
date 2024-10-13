"use client";

import Link from "next/link";
import { TSidebarItems } from "./SidebarItems";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { usePathname } from "next/navigation";

type TProps = {
  item: TSidebarItems;
};

const SingleItem = ({ item }: TProps) => {
  const pathname = usePathname();

  return (
    <Link href={item.path}>
      <ListItem
        disablePadding
        className={
          item.path === pathname ? " border-r-8 border-[#D7212C] " : ""
        }
      >
        <ListItemButton>
          <ListItemIcon>
            {
              <item.icon
                className={item.path === pathname ? " text-[#D7212C]" : ""}
              />
            }
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SingleItem;
