import { Button } from "@mui/material";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

type TLogoutButton = {
  handleLogOut: any;
  token?: RequestCookie | undefined;
};

const LogoutButton = ({ handleLogOut }: TLogoutButton) => {
  return (
    <Button
      sx={{
        fontWight: "600",
      }}
      onClick={() => handleLogOut()}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
