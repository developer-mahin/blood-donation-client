"use client";

import Spinner from "@/components/Shared/Spinner/Spinner";
import { useGetMyDonationRequestQuery } from "@/redux/api/Features/donation/dontaionApi";
import { Box } from "@mui/material";
import TableWrapper from "./TableWrapper";

const MyBloodRequest = () => {
  const { data, isLoading } = useGetMyDonationRequestQuery({});

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box
      sx={{
        mt: 2,
      }}
    >
      <TableWrapper data={data} />
    </Box>
  );
};

export default MyBloodRequest;
