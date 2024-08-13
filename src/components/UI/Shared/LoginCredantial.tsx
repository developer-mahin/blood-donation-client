"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    width: "600px",
    
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const LoginCredantial = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        mt: 2,
      }}
    >
      <Button
        variant="contained"
        sx={{
          textTransform: "capitalize",
        }}
        fullWidth
        onClick={handleClickOpen}
      >
        Show Demo Credentials
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          fontWeight={600}
          id="customized-dialog-title"
        >
          Demo Accounts
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography component="h5" fontWeight="600">
            Admin
          </Typography>
          <Typography>Email: mahenkhan83@gmail.com</Typography>
          <Typography>Password: 13104255</Typography>
          <Divider />
          <Typography component="h5" fontWeight="600">
            Donor
          </Typography>
          <Typography>Email:evelynadams@example.com</Typography>
          <Typography>Password: evelynpass654</Typography>
          <Divider />
        </DialogContent>
      </BootstrapDialog>
    </Box>
  );
};

export default LoginCredantial;
