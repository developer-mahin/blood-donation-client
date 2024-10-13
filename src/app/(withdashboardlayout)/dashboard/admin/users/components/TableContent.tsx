import {
  SmallButton,
  StyledTableCell,
  StyledTableRow,
} from "@/app/(withcommonlayout)/profile/component/StyledInformationBox";
import { useChangeUserProfileStatusMutation, useChangeUserRoleMutation } from "@/redux/api/Features/user/userApi";
import { Box } from "@mui/material";
import { toast } from "sonner";

type TProps = {
  item: any;
};

const TableContent: React.FC<TProps> = ({ item }) => {
  const [changeUserProfileStatus] = useChangeUserProfileStatusMutation();
  const [changeUserRole] = useChangeUserRoleMutation();

  const handleChangeStatus = async (id: string, status: string) => {
    const data = {
      id,
      status,
    };

    try {
      const res = await changeUserProfileStatus(data);
      if (res.data) {
        toast.success("successfully update the status");
      }
    } catch (error) {}
  };

  const handleChangeRole = async (id: string, role: { role: string }) => {
    const data = {
      id,
      role: role.role,
    };

    try {
      const res = await changeUserRole(data);
      if (res.data) {
        toast.success("successfully update the role");
      }
    } catch (error) {}
  };

  return (
    <StyledTableRow key={item?.id}>
      <StyledTableCell component="th" scope="row">
        {item?.name || ""}
      </StyledTableCell>
      <StyledTableCell>{item?.email}</StyledTableCell>
      <StyledTableCell>
        {item?.userProfile?.contactNumber || "N/A"}
      </StyledTableCell>
      <StyledTableCell>{item?.bloodType}</StyledTableCell>
      <StyledTableCell>{item?.status}</StyledTableCell>
      <StyledTableCell>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <SmallButton
              size="small"
              onClick={() =>
                handleChangeRole(item.id, {
                  role: item.role === "DONOR" ? "ADMIN" : "DONOR",
                })
              }
            >
              {item.role}
            </SmallButton>
            <SmallButton
              size="small"
              onClick={() =>
                handleChangeStatus(
                  item.id,
                  item.status === "ACTIVE" ? "DEACTIVE" : "ACTIVE"
                )
              }
            >
              {item.status}
            </SmallButton>
          </Box>
        </Box>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default TableContent;
