"use client";

import Spinner from "@/components/Shared/Spinner/Spinner";
import useUserInfo from "@/constant/hook";
import KeyIcon from "@mui/icons-material/Key";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Box, Button, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Information from "./component/Information";
import ProfileUpdateModal from "./component/ProfileUpdateModal";
import Upload from "./component/Upload";

const MyProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { userData, isLoading } = useUserInfo();
  
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid xs={12} md={4}>
            <Box
              sx={{
                height: 300,
                width: "100%",
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              {userData?.userProfile?.photo && (
                <Image
                  height={300}
                  width={400}
                  src={userData?.userProfile?.photo}
                  alt="Choose User Photo"
                />
              )}
            </Box>
            <Box my={3}>
              {/* For Profile Photo change */}
              <Upload />
            </Box>
            {/* For Profile info update */}
            {/* <ModalContent id={data.id} /> */}

            <Box>
              <ProfileUpdateModal open={isModalOpen} setOpen={setIsModalOpen} />
              <Button
                fullWidth
                endIcon={<ModeEditIcon />}
                onClick={() => setIsModalOpen(true)}
              >
                Edit Profile
              </Button>
            </Box>

            <Button
              fullWidth
              endIcon={<KeyIcon />}
              sx={{
                mt: 2,
              }}
              component={Link}
              href="/change_password"
            >
              Change Password
            </Button>
          </Grid>
          <Grid xs={12} md={8}>
            <Information data={userData} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MyProfile;
