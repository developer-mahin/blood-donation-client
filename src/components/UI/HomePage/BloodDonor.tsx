import { TUser } from "@/types";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { baseurl } from "@/constant/URL";
import generateDonorListApi from "@/utils/generateDonorListApi";
import FilterDonor from "./FilterDonor";
import SingleDonor from "./SingleDonor";
import SectionTitle from "../Shared/SectionTitle";

const BloodDonor = async ({
  searchParams,
}: {
  searchParams?: {
    searchTerm?: string;
    bloodType?: string;
    availability?: string;
  };
}) => {
  const URL = generateDonorListApi(`${baseurl}/donor/donor-list?limit=6`, {
    searchTerm: searchParams?.searchTerm,
    bloodType: searchParams?.bloodType,
    availability: searchParams?.availability,
  });

  const res = await fetch(`${URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await res.json();
  const data: TUser[] = result?.data || [];

  return (
    <Container
      sx={{
        py: 10,
      }}
    >
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
            <Grid item xs={12} md={6} lg={4} key={donor.id}>
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
    </Container>
  );
};

export default BloodDonor;
