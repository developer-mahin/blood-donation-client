"use client";

import { TNavItems, navItems } from "@/data/navItems";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import Link from "next/link";
import * as React from "react";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function Header(props: Props) {
  const AuthButton = dynamic(
    () => import("../../Shared/AuthButton/AuthButton"),
    {
      ssr: false,
    }
  );

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Ghuri Foundation
      </Typography>
      <Divider />
      <List>
        {navItems.map((item: TNavItems, i: number) => (
          <ListItem component={Link} href={item.path} key={i} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        component="nav"
        color="info"
        sx={{
          boxShadow: "2px 0px 5px 2px #ddd",
        }}
      >
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component={Link}
              href="/"
              fontWeight={600}
              color="secondary.main"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Ghuri Foundation
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Stack direction="row" gap={3} alignItems="center">
                {navItems.map((item: TNavItems, i: number) => (
                  <Link href={item.path} key={i}>
                    <Typography fontWeight={600} color="secondary.main">
                      {item.title}
                    </Typography>
                  </Link>
                ))}
                <AuthButton />
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}
