"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledInformationBox = styled(Box)(({ theme }) => ({
  background: "#f4f7fe",
  borderRadius: theme.spacing(1),
  width: "45%",
  padding: "8px 16px",
  "& p": {
    fontWeight: 600,
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
