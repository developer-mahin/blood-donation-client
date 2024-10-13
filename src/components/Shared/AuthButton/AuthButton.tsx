import { isLoggedIn } from "@/service/auth.service";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import DropDownMenu from "./DropDownMenu";

const AuthButton = () => {
  const loginUser = isLoggedIn();

  return (
    <Box>
      <Stack direction="row" gap={3} alignItems="center">
        {loginUser ? (
          <DropDownMenu />
        ) : (
          <Link href="/login">
            <p className="lg:text-[#f4f4f4] text-black lg:font-semibold ">
              Login
            </p>
          </Link>
        )}
      </Stack>
    </Box>
  );
};

export default AuthButton;
