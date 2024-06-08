import assets from "@/assets/assets";
import { getUserInfo } from "@/service/auth.service";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import GroupIcon from '@mui/icons-material/Group';
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import { useEffect, useState } from "react";

const Sidebar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = getUserInfo();
    setUserRole(role);
  }, []);

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
          PH Health Care
        </Typography>
      </Stack>
      <Divider />
      <List>
        <Link href="/profile">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{<AccountBoxIcon />}</ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/dashboard/admin/users">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{<GroupIcon />}</ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
};

export default Sidebar;
