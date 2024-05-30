"use client";

import assets from "@/assets/assets";
import BForm from "@/components/Form/BForm";
import BInput from "@/components/Form/BInput";
import SocialPlatform from "@/components/Shared/SocialPlatform/SocialPlatform";
import { TLoginData, loginData } from "@/data/loginData";
import {
  loginDefaultValues,
  loginValidationSchema,
} from "@/validation/login.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const LoginPage = () => {
  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    try {
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "80vh",
      }}
    >
      <Container
        maxWidth="sm"
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
        <BForm
          resolver={zodResolver(loginValidationSchema)}
          defaultValues={loginDefaultValues}
          onSubmit={handleLogin}
          className="mt-6"
        >
          <Grid container spacing={3}>
            {loginData.map((data: TLoginData, i: number) => (
              <Grid item key={i} md={12}>
                <BInput label={data.label} type={data.type} name={data.name} />
              </Grid>
            ))}
          </Grid>

          <Typography
            textAlign="end"
            sx={{
              mt: 1,
            }}
          >
            <Link href="/register">Forgot Password?</Link>
          </Typography>

          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 3,
            }}
          >
            Login
          </Button>

          <SocialPlatform title="Login with Social Platform" />

          <Typography
            sx={{
              textAlign: "center",
              mt: 1,
            }}
          >
            Don&apost have an account?{" "}
            <Link href="/register" className="text-[#1586FD] font-medium">
              Create an account
            </Link>
          </Typography>
        </BForm>
      </Container>
    </Stack>
  );
};

export default LoginPage;
