import assets from "@/assets/assets";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import LoginForm from "./component/LoginForm";

const LoginPage = () => {
  return (
    <Box
      sx={{
        my: 4,
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          padding: "50px",
          boxShadow: 1,
          borderRadius: "10px",
        }}
      >
        <Stack
          alignItems="center"
          sx={{
            mb: 2,
          }}
        >
          <Image src={assets.images.logo} alt="" width={150} height={100} />
          <Typography variant="h5" component="h5" mt={1} fontWeight={600}>
            Login With Ghuri Foundation
          </Typography>
        </Stack>
        <LoginForm />
      </Container>
    </Box>
  );
};

export default LoginPage;
