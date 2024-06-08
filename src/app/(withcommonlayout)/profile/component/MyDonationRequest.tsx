"use client";

import Spinner from "@/components/Shared/Spinner/Spinner";
import SectionTitle from "@/components/UI/Shared/SectionTitle";
import { requestStatus } from "@/constant/common";
import {
  useChangeDonationRequestStatusMutation,
  useGetMyDonationQuery,
} from "@/redux/api/Features/donation/dontaionApi";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Badge, Box, Button, Stack, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { toast } from "sonner";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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
            {data.map((item: any) => (
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
                  <Button
                    sx={{
                      // px: 2,
                      py: "5px",
                      px: "8px",
                      textTransform: "capitalize",
                    }}
                    size="small"
                    onClick={() =>
                      handleChangeRequestStatus(item.id, "PENDING")
                    }
                  >
                    PENDING
                  </Button>
                  <Button
                    sx={{
                      py: "5px",
                      mx: "5px",
                      px: "8px",
                      textTransform: "capitalize",
                    }}
                    size="small"
                    onClick={() =>
                      handleChangeRequestStatus(item.id, "APPROVED")
                    }
                  >
                    APPROVE
                  </Button>
                  <Button
                    sx={{
                      py: "5px",
                      px: "8px",
                      textTransform: "capitalize",
                    }}
                    size="small"
                    onClick={() =>
                      handleChangeRequestStatus(item.id, "REJECTED")
                    }
                  >
                    REJECT
                  </Button>
                  {/* <div>
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      variant="text"
                    >
                      <MoreVertIcon />
                    </Button>

                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleChangeRequestStatus}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem
                        onClick={() => {
                          handleChangeRequestStatus(item.id, "PENDING");
                        }}
                      >
                        PENDING
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleChangeRequestStatus(item.id, "APPROVE");
                        }}
                      >
                        APPROVE
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleChangeRequestStatus(item.id, "REJECT");
                        }}
                      >
                        REJECT
                      </MenuItem>
                    </Menu>
                  </div> */}
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
