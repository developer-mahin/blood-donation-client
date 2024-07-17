import assets from "@/assets/assets";
import { getUserInfo } from "@/service/auth.service";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  adminSidebarItems,
  donorSidebarItems,
  TSidebarItems,
} from "./SidebarItems";
import SingleItem from "./SingleItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { logoutUser } from "@/service/actions/logoutUser";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Sidebar = () => {
  const [userRole, setUserRole] = useState("");
  const router = useRouter();

  useEffect(() => {
    const { role } = getUserInfo();
    setUserRole(role);
  }, []);

  const handleLogOut = () => {
    logoutUser(router);
    router.refresh();
    toast.success("log out successful");
  };

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
        component={Link}
        href="/"
        py={2}
        px={1}
        mt={1}
      >
        <Image src={assets.images.logo} alt="" width={40} height={40} />
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
          }}
          fontWeight={600}
        >
          Ghuri Foundation
        </Typography>
      </Stack>
      <Divider />
      <List>
        {userRole === "admin"
          ? adminSidebarItems.map((item: TSidebarItems, i: number) => (
              <SingleItem key={i} item={item} />
            ))
          : donorSidebarItems.map((item: TSidebarItems, i: number) => (
              <SingleItem key={i} item={item} />
            ))}

        <ListItem disablePadding onClick={() => handleLogOut()}>
          <ListItemButton>
            <ListItemIcon>{<LogoutIcon />}</ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
