"use client";

import {
  SmallButton,
  StyledTableCell,
  StyledTableRow,
} from "@/app/(withcommonlayout)/profile/component/StyledInformationBox";
import Spinner from "@/components/Shared/Spinner/Spinner";
import {
  useChangeUserProfileStatusMutation,
  useGetAlUserQuery,
} from "@/redux/api/Features/user/userApi";
import { Box, Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const UsersPage = () => {
  const { data, isLoading } = useGetAlUserQuery({});
  const [changeUserProfileStatus] = useChangeUserProfileStatusMutation();

  if (isLoading) {
    return <Spinner />;
  }

  const handleChangeStatus = async (id: string, status: string) => {
    const data = {
      id,
      status,
    };

    try {
      const res = await changeUserProfileStatus(data);
      console.log(res);
    } catch (error) {}
  };

  return (
    <Box
      sx={{
        mt: 3,
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          mt: 2,
        }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Blood type</StyledTableCell>
              <StyledTableCell>Location</StyledTableCell>
              <StyledTableCell>Role</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.result?.map((item: any) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {item?.name}
                </StyledTableCell>
                <StyledTableCell>{item?.email}</StyledTableCell>
                <StyledTableCell>
                  {item?.userProfile?.contactNumber || "N/A"}
                </StyledTableCell>
                <StyledTableCell>{item?.bloodType}</StyledTableCell>
                <StyledTableCell>{item?.location}</StyledTableCell>
                <StyledTableCell>{item?.role}</StyledTableCell>
                <StyledTableCell>{item?.status}</StyledTableCell>
                <StyledTableCell>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        Change Role:
                      </Typography>
                      <Box>
                        <SmallButton size="small">Admin</SmallButton>
                        <SmallButton size="small">Donor</SmallButton>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        Change Status
                      </Typography>

                      <Box>
                        <SmallButton
                          size="small"
                          onClick={() => handleChangeStatus(item.id, "ACTIVE")}
                        >
                          Active{" "}
                        </SmallButton>
                        <SmallButton
                          size="small"
                          onClick={() =>
                            handleChangeStatus(item.id, "DEACTIVE")
                          }
                        >
                          Deactivate
                        </SmallButton>
                      </Box>
                    </Box>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UsersPage;
