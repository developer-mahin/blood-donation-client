import assets from "@/assets/assets";
import { baseurl } from "@/constant/URL";
import { authKey } from "@/constant/common";
import { TUser } from "@/types";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

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
    redirect("/login");
  }

  const res = await fetch(`${baseurl}/user/get-single-user/${id}`, {
    headers: {
      authorization: token.value as string,
    },
  });
  const result = await res.json();

  const userData = result.data as TUser;

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "1rem",
        height: "100%",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box component="label">
        {userData?.userProfile?.photo ? (
          <Image
            alt={"profile"}
            src={userData?.userProfile?.photo}
            width={150}
            height={150}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
        ) : (
          <Image
            alt={"profile"}
            src={assets.testimonial.one}
            width={150}
            height={150}
            style={{ borderRadius: "50%" }}
          />
        )}
      </Box>

      <Typography variant="body1" sx={{ textAlign: "center", my: "1rem" }}>
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
          <Typography variant="body1">Full Name</Typography>
          <Typography variant="body1">{userData?.name}</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1">Location</Typography>
          <Typography variant="body1">{userData?.location}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1">Blood Type</Typography>
          <Typography variant="body1">{userData?.bloodType}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1">Age</Typography>
          <Typography variant="body1">
            {userData?.userProfile?.age || "N/A"}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1">Last Blood Donation</Typography>
          <Typography variant="body1">
            {userData?.userProfile?.lastDonationDate || "N/A"}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1">Availability</Typography>
          <Typography variant="body1">
            {userData?.availability ? "Yes" : "No"}
          </Typography>
        </Grid>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Contact Information
        </Typography>
        {/* {data?.contactInfo && (
          <>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
              <Typography variant='body1'>Email</Typography>
              <Typography variant='body1'>{data?.contactInfo?.email}</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
              <Typography variant='body1'>Phone Number</Typography>
              <Typography variant='body1'>{data?.contactInfo?.phoneNumber}</Typography>
            </Grid>
          </>
        )} */}
      </Grid>
      <Button
        sx={{ mt: 1 }}
        LinkComponent={Link}
        href={`/donors/${id}/request`}
      >
        Create a Blood Request
      </Button>
    </Container>
  );
};

export default DonorDetailsPage;
