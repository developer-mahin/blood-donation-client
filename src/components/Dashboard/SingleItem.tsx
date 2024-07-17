import Link from "next/link";
import { TSidebarItems } from "./SidebarItems";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

type TProps = {
  item: TSidebarItems;
};

const SingleItem = ({ item }: TProps) => {
  return (
    <Link href={item.path}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>{<item.icon />}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SingleItem;
