"use client";

import Spinner from "@/components/Shared/Spinner/Spinner";
import SectionTitle from "@/components/UI/Shared/SectionTitle";
import { requestStatus } from "@/constant/common";
import {
  useChangeDonationRequestStatusMutation,
  useGetMyDonationQuery,
} from "@/redux/api/Features/donation/dontaionApi";
import { Badge, Box, Button, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { toast } from "sonner";
import {
  SmallButton,
  StyledTableCell,
  StyledTableRow,
} from "./StyledInformationBox";

const MyDonationRequest = () => {
  const { data, isLoading } = useGetMyDonationQuery({});
  const [changeDonationRequestStatus] =
    useChangeDonationRequestStatusMutation();

  const handleChangeRequestStatus = async (id: string, value: string) => {
    try {
      const data = {
        requestStatus: value,
        id,
      };

      const res = await changeDonationRequestStatus(data);
      if (res.data) {
        toast.success("Changed blood request status");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box
      sx={{
        mt: 3,
      }}
    >
      <SectionTitle title="My Request Me as a donor" />
      <TableContainer
        component={Paper}
        sx={{
          mt: 2,
        }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Requester&apos;s name</StyledTableCell>
              <StyledTableCell>Blood type</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Contact information</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item: any) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {item?.requester?.name}
                </StyledTableCell>
                <StyledTableCell>{item?.requester?.bloodType}</StyledTableCell>
                <StyledTableCell>
                  <Stack direction="row" alignItems="center">
                    <Typography variant="body2" component="p">
                      <Badge
                        sx={{
                          color: "white",
                          fontWeight: "bold",
                          paddingY: "0.2rem",
                          paddingX: "0.5rem",
                          borderRadius: "0.5rem",
                          fontSize: ".7rem",
                          backgroundColor:
                            item.requestStatus === requestStatus.APPROVED
                              ? "green"
                              : item.requestStatus === requestStatus.REJECTED
                              ? "red"
                              : "orange",
                        }}
                      >
                        {item.requestStatus}
                      </Badge>
                    </Typography>
                  </Stack>
                </StyledTableCell>
                <StyledTableCell>
                  {item.requestStatus === requestStatus.APPROVED && (
                    <>
                      <Typography variant="body2" component="p">
                        Email: {item?.requester?.email}
                      </Typography>
                      <Typography variant="body2" component="p">
                        Location: {item?.requester?.location}
                      </Typography>
                      <Typography variant="body2" component="p">
                        Location: {item?.requester?.userProfile?.contactNumber}
                      </Typography>
                    </>
                  )}
                </StyledTableCell>

                <StyledTableCell>
                  <SmallButton
                    size="small"
                    onClick={() =>
                      handleChangeRequestStatus(item.id, "PENDING")
                    }
                  >
                    PENDING
                  </SmallButton>
                  <SmallButton
                    size="small"
                    onClick={() =>
                      handleChangeRequestStatus(item.id, "APPROVED")
                    }
                  >
                    APPROVE
                  </SmallButton>
                  <SmallButton
                    size="small"
                    onClick={() =>
                      handleChangeRequestStatus(item.id, "REJECTED")
                    }
                  >
                    REJECT
                  </SmallButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MyDonationRequest;
