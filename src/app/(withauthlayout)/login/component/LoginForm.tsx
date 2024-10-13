"use client";

import BForm from "@/components/Form/BForm";
import BInput from "@/components/Form/BInput";
import SocialPlatform from "@/components/Shared/SocialPlatform/SocialPlatform";
import LoginCredantial from "@/components/UI/Shared/LoginCredantial";
import { TLoginData, loginData } from "@/data/loginData";
import { TLoginProps, loginUser } from "@/service/actions/loginUser";
import { storeUserInfo } from "@/service/auth.service";
import {
  loginDefaultValues,
  loginValidationSchema,
} from "@/validation/login.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const LoginForm = () => {
  const router = useRouter();
  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data as TLoginProps);

      if (res.success) {
        storeUserInfo({ accessToken: res.data.token });
        toast.success(res.message);
        router.refresh();
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <BForm
      resolver={zodResolver(loginValidationSchema)}
      defaultValues={loginDefaultValues}
      onSubmit={handleLogin}
      className="mt-6"
    >
      <Grid container spacing={3}>
        {loginData?.map((data: TLoginData, i: number) => (
          <Grid item key={i} xs={12}>
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
      <LoginCredantial />
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
  );
};

export default LoginForm;
