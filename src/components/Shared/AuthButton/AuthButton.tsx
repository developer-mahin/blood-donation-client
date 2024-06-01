import { isLoggedIn } from "@/service/auth.service";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

const AuthButton = () => {
  const loginUser = isLoggedIn();

  return (
    <Box>
      <Stack direction="row" gap={3}>
        {loginUser ? (
          <Link href="/">
            <Typography fontWeight={500} color="secondary.main">
              My Profile
            </Typography>
          </Link>
        ) : (
          <Link href="/login">
            <Typography fontWeight={500} color="secondary.main">
              Login
            </Typography>
          </Link>
        )}
      </Stack>
    </Box>
  );
};

export default AuthButton;
