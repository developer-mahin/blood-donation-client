"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  loginDefaultValues,
  loginValidationSchema,
} from "@/validation/login.validation";
import assets from "@/assets/assets";
import BForm from "@/components/Form/BForm";
import BInput from "@/components/Form/BInput";
import { TRegister, registerData } from "@/data/registerData";
import {
  defaultValues,
  registerValidation,
} from "@/validation/register.validation";
import BSelect from "@/components/Form/BSelect";

const options = [
  {
    value: "yes",
    label: "Yes",
  },
  {
    value: "no",
    label: "No",
  },
];
const RegisterPages = () => {
  const router = useRouter();

  const handleRegister: SubmitHandler<FieldValues> = async (data) => {
    try {
      console.log(data);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      //   sx={{
      //     height: "100vh",
      //   }}
    >
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
          <Image src={assets.images.logo} alt="" width={250} height={100} />
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
              <Grid item key={i} md={data.column}>
                <BInput
                  label={data.label}
                  type={data.type}
                  name={data.name}
                  variant="outlined"
                  size="small"
                />
              </Grid>
            ))}
          </Grid>
          <BSelect options={options} label="Ready" name="blood" />
          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 3,
            }}
          >
            Register
          </Button>
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

        {/* <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <Grid container spacing={3}>
            {registerData.map((data: TRegister, i: number) => (
              <Grid item key={i} md={data.column}>
                <TextField
                  label={data.label}
                  type={data.type}
                  variant="outlined"
                  size="small"
                  fullWidth
                  {...register(data.name)}
                  required
                />
              </Grid>
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
        </form> */}
      </Container>
    </Stack>
  );
};

export default RegisterPages;
