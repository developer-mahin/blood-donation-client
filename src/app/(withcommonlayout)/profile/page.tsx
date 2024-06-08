"use client";

import Spinner from "@/components/Shared/Spinner/Spinner";
import { authKey } from "@/constant/common";
import { useGetMyProfileQuery } from "@/redux/api/Features/user/userApi";
import { TAuthUser } from "@/types";
import { decodedToken } from "@/utils/jwtDecode";
import { getFromLocalStorage } from "@/utils/localStorage";
import KeyIcon from "@mui/icons-material/Key";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Box, Button, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { useState } from "react";
import Information from "./component/Information";
import MyBloodRequest from "./component/MyBloodRequest";
import MyDonationRequest from "./component/MyDonationRequest";
import ProfileUpdateModal from "./component/ProfileUpdateModal";
import Upload from "./component/Upload";
import { JwtPayload } from "jwt-decode";
import { useRouter } from "next/navigation";

const MyProfile = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetMyProfileQuery({});
  const token = getFromLocalStorage(authKey);
  let userData;

  if (token) {
    userData = decodedToken(token) as any;
  }

  if (data?.role !== userData?.role) {
    router.refresh();
  }

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
              {data?.userProfile?.photo && (
                <Image
                  height={300}
                  width={400}
                  src={data?.userProfile?.photo}
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
              <ProfileUpdateModal
                open={isModalOpen}
                setOpen={setIsModalOpen}
                // id={data?.id}
              />
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
            <Information data={data} />
          </Grid>
        </Grid>
        <>
          <MyBloodRequest />
          <MyDonationRequest />
        </>
      </Container>
    </>
  );
};

export default MyProfile;
