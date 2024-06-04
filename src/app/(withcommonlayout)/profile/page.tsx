"use client";

import { Box, Button, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";
import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import KeyIcon from "@mui/icons-material/Key";
import Link from "next/link";
import {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/Features/user/myProfile";
import Spinner from "@/components/Shared/Spinner/Spinner";
import AutoFileUploader from "@/components/Form/AutoFileUploder";
import Information from "./component/Information";
import ProfileUpdateModal from "./component/ProfileUpdateModal";
import { imageUploadIntoImgbb } from "@/utils/imageUploadIntoImgBB";

const MyProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading } = useGetMyProfileQuery({});
  const [updateMyProfile, { isLoading: updating }] =
    useUpdateMyProfileMutation();

  const fileUploadHandler = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    const uploadedImage = await imageUploadIntoImgbb(formData);

    let data = {
      photo: uploadedImage,
    };

    if (uploadedImage) {
      data = {
        photo: uploadedImage,
      };
    }

    try {
      updateMyProfile(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <>
      <ProfileUpdateModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        id={data?.id}
      />
      {isLoading ? (
        <Spinner />
      ) : (
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
                {updating ? (
                  <p>Uploading...</p>
                ) : (
                  <AutoFileUploader
                    name="file"
                    label="Choose Your Profile Photo"
                    icon={<CloudUploadIcon />}
                    onFileUpload={fileUploadHandler}
                    variant="text"
                  />
                )}
              </Box>

              <Button
                fullWidth
                endIcon={<ModeEditIcon />}
                onClick={() => setIsModalOpen(true)}
              >
                Edit Profile
              </Button>
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
        </Container>
      )}
    </>
  );
};

export default MyProfile;
