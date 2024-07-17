"use client";

import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { useGetMyProfileQuery } from "@/redux/api/Features/user/userApi";
import { useRouter } from "next/navigation";

export default function DashboardAppBar() {
  const { data, isLoading } = useGetMyProfileQuery({});
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const router = useRouter();

  const isMenuOpen = Boolean(anchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      sx={{
        color: "#000",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box position="static">
        <Toolbar>
          <Box>
            <Typography>Hi,{data?.name}</Typography>
            <Typography
              color="primary.main"
              variant="h5"
              component="h4"
              fontWeight={500}
            >
              Welcome To Ghuri Foundation
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              sx={{
                color: "#000",
              }}
            >
              <Avatar
                alt={data?.name}
                sx={{
                  objectFit: "cover",
                }}
                src={data?.userProfile?.photo}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Box>
      {renderMenu}
    </Box>
  );
}
