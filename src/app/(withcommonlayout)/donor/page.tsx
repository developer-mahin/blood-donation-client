import FilterDonor from "@/components/UI/HomePage/FilterDonor";
import SingleDonor from "@/components/UI/HomePage/SingleDonor";
import SectionTitle from "@/components/UI/Shared/SectionTitle";
import { baseurl } from "@/constant/URL";
import { TUser } from "@/types";
import generateDonorListApi from "@/utils/generateDonorListApi";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

const DonorPage = async ({
  searchParams,
}: {
  searchParams?: {
    searchTerm?: string;
    bloodType?: string;
    availability?: string;
  };
}) => {
  const URL = generateDonorListApi(`${baseurl}/donor/donor-list?limit=8`, {
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
    </Container>
  );
};

export default DonorPage;
