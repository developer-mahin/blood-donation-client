"use client";

import { StyledTableCell } from "@/app/(withcommonlayout)/profile/component/StyledInformationBox";
import Spinner from "@/components/Shared/Spinner/Spinner";
import { useGetAlUserQuery } from "@/redux/api/Features/user/userApi";
import {
  Box,
  Input,
  Pagination,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import TableContent from "./components/TableContent";

const UsersPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(8);

  const { data, isLoading } = useGetAlUserQuery([
    {
      name: "limit",
      value: limit,
    },
    {
      name: "page",
      value: currentPage,
    },
    {
      name: "searchTerm",
      value: searchTerm,
    },
  ]);

  if (isLoading) {
    return <Spinner />;
  }

  const totalPage = Math.ceil(data?.meta?.total / data?.meta?.limit);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Box
      sx={{
        mt: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography className="w-fit" fontWeight={600} variant="h5">
          All Users
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          type="text"
          placeholder="Search"
          label="Search User"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

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
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.result?.map((item: any) => {
              return <TableContent item={item} key={item._id} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack spacing={2} mt={4}>
        <Pagination
          count={totalPage}
          page={currentPage}
          onChange={handleChange}
        />
      </Stack>
    </Box>
  );
};

export default UsersPage;
