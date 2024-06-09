"use server"

import assets from "@/assets/assets";
import CustomDivider from "@/components/Shared/CustomDivider/CustomDivider";
import { baseurl } from "@/constant/URL";
import { authKey } from "@/constant/common";
import { logoutUser } from "@/service/actions/logoutUser";
import { TUser } from "@/types";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

type TDonorDetailsPageProps = { params: { id: string } };

export const generateStaticParams = async ({
  params,
}: TDonorDetailsPageProps) => {
  const res = await fetch(`${baseurl}/donor/donor-list?limit=10`);

  const result = await res.json();
  const data = result?.data;
  return data?.map((donor: TUser) => ({ donorId: donor.id }));
};

const DonorDetailsPage = async ({ params }: TDonorDetailsPageProps) => {
  const { id } = params;

  const token = cookies().get(authKey);
  if (!token?.value) {
    // redirect("/login");
    return logoutUser();
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/get-single-user/${id}`, {
    headers: {
      authorization: token.value as string,
    },
    
  });
  const result = await res.json();

  const userData = result.data as TUser;

  return (
    <Box
      sx={{
        background: "#F8F8F8",
        py: 8,
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item md={4} component="label">
            {userData?.userProfile?.photo ? (
              <Image
                alt={"profile"}
                src={userData?.userProfile?.photo}
                width={500}
                height={150}
                className="rounded-xl"
              />
            ) : (
              <Image
                alt={"profile"}
                src={assets.testimonial.one}
                width={500}
                height={150}
                className="rounded-xl"
              />
            )}
          </Grid>

          <Grid item md={7.5}>
            <Typography variant="body1" textAlign="center" sx={{ my: 1 }}>
              {userData?.userProfile?.bio}
            </Typography>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography fontWeight={600} variant="body1">
                  Full Name
                </Typography>
                <Typography variant="body1">{userData?.name}</Typography>
              </Grid>
              <CustomDivider />

              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography fontWeight={600} variant="body1">
                  Location
                </Typography>
                <Typography variant="body1">{userData?.location}</Typography>
              </Grid>
              <CustomDivider />

              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography fontWeight={600} variant="body1">
                  Blood Type
                </Typography>
                <Typography variant="body1">{userData?.bloodType}</Typography>
              </Grid>
              <CustomDivider />

              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography fontWeight={600} variant="body1">
                  Age
                </Typography>
                <Typography variant="body1">
                  {userData?.userProfile?.age || "N/A"}
                </Typography>
              </Grid>
              <CustomDivider />

              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography fontWeight={600} variant="body1">
                  Last Blood Donation
                </Typography>
                <Typography variant="body1">
                  {userData?.userProfile?.lastDonationDate || "N/A"}
                </Typography>
              </Grid>
              <CustomDivider />

              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography fontWeight={600} variant="body1">
                  Availability
                </Typography>
                <Typography variant="body1">
                  {userData?.availability ? "Yes" : "No"}
                </Typography>
              </Grid>
              <CustomDivider />

              <Box sx={{ mt: 2, pl: 2 }}>
                <Typography variant="h6" fontWeight={600}>
                  Contact Information
                </Typography>
              </Box>
              <CustomDivider />

              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography fontWeight={600} variant="body1">
                  Email
                </Typography>
                <Typography variant="body1">
                  {userData?.email || "N/A"}
                </Typography>
              </Grid>
              <CustomDivider />

              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography fontWeight={600} variant="body1">
                  Phone Number
                </Typography>
                <Typography variant="body1">
                  {userData?.userProfile?.contactNumber || "N/A"}
                </Typography>
              </Grid>
              <CustomDivider />

              <Button
                sx={{ mt: 3, ml: 2 }}
                LinkComponent={Link}
                href={`/donor/${id}/blood_request`}
              >
                Create a Blood Request
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DonorDetailsPage;
