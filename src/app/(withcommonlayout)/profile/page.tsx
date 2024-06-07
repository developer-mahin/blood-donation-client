import { baseurl } from "@/constant/URL";
import { authKey } from "@/constant/common";
import { logoutUser } from "@/service/actions/logoutUser";
import { TUser } from "@/types";
import KeyIcon from "@mui/icons-material/Key";
import { Box, Button, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import Information from "./component/Information";

const MyProfile = async () => {
  const Upload = dynamic(() => import("./component/Upload"), {
    ssr: false,
  });
  const ModalContent = dynamic(() => import("./component/ModalContent"), {
    ssr: false,
  });

  const token = cookies().get(authKey);

  if (!token?.value) {
    logoutUser();
    redirect("/login");
  }

  const res = await fetch(`${baseurl}/user/my-profile`, {
    headers: {
      authorization: token.value,
    },
  });

  const result = await res.json();
  const data: TUser = result?.data;

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
            <ModalContent id={data.id} />

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
    </>
  );
};

export default MyProfile;
