import { logoutUser } from "@/service/actions/logoutUser";
import { getUserInfo, isLoggedIn } from "@/service/auth.service";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AuthButton = () => {
  const loginUser = isLoggedIn();
  const router = useRouter();
  const user = getUserInfo();

  const handleLogOut = () => {
    logoutUser(router);
    router.refresh();
    toast.success("log out successful");
  };

  return (
    <Box>
      <Stack direction="row" gap={3} alignItems="center">
        {loginUser ? (
          <>
            <Link href="/profile">
              <Typography fontWeight={600} color="secondary.main">
                My Profile
              </Typography>
            </Link>

            {user.role === "admin" && (
              <Link href="/dashboard/admin">
                <Typography fontWeight={600} color="secondary.main">
                  Dashboard
                </Typography>
              </Link>
            )}

            {/* <LogoutButton handleLogOut={handleLogOut} token={token} /> */}
            <Button
              sx={{
                fontWight: "600",
              }}
              onClick={handleLogOut}
            >
              Logout
            </Button>
          </>
        ) : (
          <Link href="/login">
            <Typography fontWeight={600} color="secondary.main">
              Login
            </Typography>
          </Link>
        )}
      </Stack>
    </Box>
  );
};

export default AuthButton;
