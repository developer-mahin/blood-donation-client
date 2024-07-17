import FilterDonor from "@/components/UI/HomePage/FilterDonor";
import SingleDonor from "@/components/UI/HomePage/SingleDonor";
import CContainer from "@/components/UI/Shared/Container";
import SectionTitle from "@/components/UI/Shared/SectionTitle";
import { baseurl } from "@/constant/URL";
import { TAuthUser, TMeta, TUser } from "@/types";
import generateDonorListApi from "@/utils/generateDonorListApi";
import { Box, Grid, Typography } from "@mui/material";
import PaginationController from "./components/PaginationController";
import { getUserInfo } from "@/service/auth.service";
import { cookies } from "next/headers";
import { decodedToken } from "@/utils/jwtDecode";

const DonorPage = async ({
  searchParams,
}: {
  searchParams?: {
    searchTerm?: string;
    bloodType?: string;
    availability?: string;
    page?: string;
    limit?: number;
  };
}) => {
  const page = searchParams?.page ? parseInt(searchParams.page, 10) : 1;
  const token = cookies().get("accessToken")?.value;
  let decoded: TAuthUser;
  if (token) {
    decoded = decodedToken(token) as TAuthUser;
  }

  const URL = generateDonorListApi(
    `${baseurl}/donor/donor-list?limit=9&page=${page}`,
    {
      searchTerm: searchParams?.searchTerm,
      bloodType: searchParams?.bloodType,
      availability: searchParams?.availability,
    }
  );

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
  const meta: TMeta = result.meta;

  const totalPage = Math.ceil(meta?.total / meta?.limit);

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
        <PaginationController totalPages={totalPage} currentPage={page} />
      </CContainer>
    </Box>
  );
};

export default DonorPage;
