"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import assets from "@/assets/assets";
import BForm from "@/components/Form/BForm";
import BInput from "@/components/Form/BInput";
import BSelect from "@/components/Form/BSelect";
import { TRegister, registerData } from "@/data/registerData";
import {
  defaultValues,
  registerValidation,
} from "@/validation/register.validation";
import SocialPlatform from "@/components/Shared/SocialPlatform/SocialPlatform";

const RegisterPages = () => {
  const handleRegister: SubmitHandler<FieldValues> = async (data) => {
    try {
      console.log(data);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Stack justifyContent="center" alignItems="center">
      <Container
        maxWidth="sm"
        sx={{
          padding: "50px",
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
        <BForm
          resolver={zodResolver(registerValidation)}
          defaultValues={defaultValues}
          onSubmit={handleRegister}
          className="mt-6"
        >
          <Grid container spacing={3}>
            {registerData.map((data: TRegister, i: number) => (
              <>
                {!data.isSelect ? (
                  <Grid item key={i} md={data.column}>
                    <BInput
                      label={data.label}
                      type={data.type}
                      name={data.name}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                ) : (
                  <Grid item key={i} md={data.column}>
                    <BSelect
                      label={data.label}
                      name={data.name}
                      options={data.options!}
                    />
                  </Grid>
                )}
              </>
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
      </Container>
    </Stack>
  );
};

export default RegisterPages;
