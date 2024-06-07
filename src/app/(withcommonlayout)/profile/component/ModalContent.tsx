"use client";

import { Box, Button } from "@mui/material";
import ProfileUpdateModal from "./ProfileUpdateModal";
import { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const ModalContent = ({ id }: { id: string }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <ProfileUpdateModal open={isModalOpen} setOpen={setIsModalOpen} id={id} />
      <Button
        fullWidth
        endIcon={<ModeEditIcon />}
        onClick={() => setIsModalOpen(true)}
      >
        Edit Profile
      </Button>
    </Box>
  );
};

export default ModalContent;
