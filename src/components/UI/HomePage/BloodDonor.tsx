import { TAuthUser, TUser } from "@/types";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { baseurl } from "@/constant/URL";
import generateDonorListApi from "@/utils/generateDonorListApi";
import FilterDonor from "./FilterDonor";
import SingleDonor from "./SingleDonor";
import SectionTitle from "../Shared/SectionTitle";
import CContainer from "../Shared/Container";
import { cookies } from "next/headers";
import { decodedToken } from "@/utils/jwtDecode";

const BloodDonor = async ({
  searchParams,
}: {
  searchParams?: {
    searchTerm?: string;
    bloodType?: string;
    availability?: string;
  };
}) => {
  const token = cookies().get("accessToken")?.value;
  let decoded: TAuthUser;
  if (token) {
    decoded = decodedToken(token) as TAuthUser;
  }

  const URL = generateDonorListApi(`${baseurl}/donor/donor-list?limit=9`, {
    searchTerm: searchParams?.searchTerm,
    bloodType: searchParams?.bloodType,
    availability: searchParams?.availability,
  });

  const res = await fetch(`${URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const result = await res.json();
  let data: TUser[] = result?.data || [];
  data = data.filter((item) => item.id !== decoded?.userId);

  return (
    <Box
      sx={{
        py: 10,
      }}
    >
      <CContainer>
        <SectionTitle
          title=" Blood Donors"
          des="our prestigious voluntary work on campaigns by the team"
        />
        <FilterDonor />

        <Grid container spacing={3} sx={{ mt: ".5rem" }}>
          {!data.length ? (
            <Typography variant="h5" sx={{ textAlign: "center", mt: "1rem" }}>
              No data found
            </Typography>
          ) : (
            data.slice(0, 8).map((donor) => (
              <Grid item xs={12} md={6} lg={3} key={donor.id}>
                <SingleDonor donor={donor} />
              </Grid>
            ))
          )}
        </Grid>
        <Box sx={{ textAlign: "center", mt: "2rem" }}>
          <Button component={Link} href="/donor">
            View All
          </Button>
        </Box>
      </CContainer>
    </Box>
  );
};

export default BloodDonor;
