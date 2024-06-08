"use client";

import SectionTitle from "@/components/UI/Shared/SectionTitle";
import { requestStatus } from "@/constant/common";
import { Badge, Box, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

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

export default function TableWrapper({ data }: any) {
  return (
    <Box
      sx={{
        mt: 3,
      }}
    >
      <SectionTitle title="My Request Me a requester" />
      <TableContainer
        component={Paper}
        sx={{
          mt: 2,
        }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Donor&apos;s name</StyledTableCell>
              <StyledTableCell>Blood type</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Contact information</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item: any) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {item?.donor?.name}
                </StyledTableCell>
                <StyledTableCell>{item?.donor?.bloodType}</StyledTableCell>
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
                        Email: {item.donor?.email}
                      </Typography>
                      <Typography variant="body2" component="p">
                        Location: {item.donor?.location}
                      </Typography>
                      <Typography variant="body2" component="p">
                        Location: {item.donor?.userProfile?.contactNumber}
                      </Typography>
                    </>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
