import assets from "@/assets/assets";
import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import RegisterForm from "./component/RegisterForm";
import LoginCredantial from "@/components/UI/Shared/LoginCredantial";

const RegisterPages = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        my: 4,
        mx: 1,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          padding: "20px",
          boxShadow: 2,
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
            Registration with Ghuri Foundation
          </Typography>
        </Stack>
        <RegisterForm />
        <LoginCredantial />
      </Container>
    </Stack>
  );
};

export default RegisterPages;
