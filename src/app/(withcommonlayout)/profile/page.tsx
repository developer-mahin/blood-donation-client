// import AutoFileUploader from "@/components/Form/AutoFileUploder";
import LoadingSpinner from "@/components/Shared/LoadingSpinner/LoadingSpinner";
import { baseurl } from "@/constant/URL";
import { authKey } from "@/constant/common";
import { TAuthUser, TUser } from "@/types";
import { getFromLocalStorage } from "@/utils/localStorage";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import KeyIcon from "@mui/icons-material/Key";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Box, Button, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const MyProfile = async () => {
  const token = cookies().get(authKey);

  let data: TUser | undefined;

  if (!token) {
    return redirect("/login");
  }

  // const res = await fetch(`${baseurl}/user/my-profile`, {
  //   headers: {
  //     "Content-type": "application/json",
  //     Authorization: token.value,
  //   },
  //   next: {
  //     tags: ["profile"],
  //   },
  // });
  // const result = await res.json();
  // console.log(result);
  // data = result?.data;

  // const fileUploadHandler = async (file: File) => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("data", JSON.stringify({}));

  //   try {
  //     updateMYProfile(formData);
  //   } catch (error: any) {
  //     console.error(error.message);
  //   }
  // };

  return (
    <>
      {/* <ProfileUpdateModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        id={data?.id}
      /> */}
      <Container sx={{ mt: 4 }}>
        {/* <Grid container spacing={4}>
          <Grid xs={12} md={4}>
            <Box
              sx={{
                height: 300,
                width: "100%",
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              {data.profilePhoto && (
                <Image
                  height={300}
                  width={400}
                  src={data?.profilePhoto && data?.profilePhoto}
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
            <DoctorInformation data={data} />
          </Grid>
        </Grid> */}
      </Container>
    </>
  );
};

export default MyProfile;
