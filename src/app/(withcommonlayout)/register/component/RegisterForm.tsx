"use client";

import BForm from "@/components/Form/BForm";
import BInput from "@/components/Form/BInput";
import BSelect from "@/components/Form/BSelect";
import SocialPlatform from "@/components/Shared/SocialPlatform/SocialPlatform";
import { TRegister, registerData } from "@/data/registerData";
import { loginUser } from "@/service/actions/loginUser";
import { registerUser } from "@/service/actions/registerUser";
import { storeUserInfo } from "@/service/auth.service";
import {
  defaultValues,
  registerValidation,
} from "@/validation/register.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const RegisterForm = () => {
  const router = useRouter();
  const handleRegister: SubmitHandler<FieldValues> = async (data) => {
    data.isDonate = data.isDonate === "yes" ? true : false;

    try {
      const res = await registerUser(data);

      if (res.success) {
        const result = await loginUser({
          email: data.email,
          password: data.password,
        });
        if (result.success) {
          storeUserInfo({ accessToken: result.data.token });
          toast.success("Account Created And Logged In Successfully");
          router.refresh();
        }
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <BForm
      resolver={zodResolver(registerValidation)}
      defaultValues={defaultValues}
      onSubmit={handleRegister}
      className="mt-6"
    >
      <Grid container spacing={3}>
        {registerData?.map((data: TRegister, i: number) => (
          <React.Fragment key={i}>
            {!data.isSelect ? (
              <Grid item md={data.column} xs={12}>
                <BInput
                  label={data.label}
                  type={data.type}
                  name={data.name}
                  variant="outlined"
                  size="small"
                />
              </Grid>
            ) : (
              <Grid item md={data.column} xs={12}>
                <BSelect
                  label={data.label}
                  name={data.name}
                  options={data.options!}
                />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>

      <Button
        type="submit"
        fullWidth
        sx={{
          mt: 3,
        }}
      >
        Register
      </Button>

      <SocialPlatform title="Registration with Social Platform" />

      <Typography
        sx={{
          textAlign: "center",
          mt: 1,
        }}
      >
        Do you already have an account?{" "}
        <Link href="/login" className="text-[#1586FD] font-medium">
          Login
        </Link>
      </Typography>
    </BForm>
  );
};

export default RegisterForm;
