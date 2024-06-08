"use client";

import BForm from "@/components/Form/BForm";
import BInput from "@/components/Form/BInput";
import { TChangePassword, changePasswordData } from "@/data/changePasswordData";
import { useChangePasswordMutation } from "@/redux/api/Features/auth/authApi";
import { logoutUser } from "@/service/actions/logoutUser";
import { zodResolver } from "@hookform/resolvers/zod";
import KeyIcon from "@mui/icons-material/Key";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const changePasswordValidation = z
  .object({
    currentPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
    newPassword: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const router = useRouter();

  const onSubmit = async (values: FieldValues) => {
    try {
      const res = await changePassword(values);

      if ("data" in res && res.data.id) {
        logoutUser(router);
        toast.success("Password Changed Successfully please login again");
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        maxWidth: 600,
        width: "100%",
        boxShadow: 1,
        borderRadius: 1,
        mx: "auto",
        mt: {
          xs: 2,
          md: 5,
        },
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        <Box
          sx={{
            "& svg": {
              width: 100,
              height: 100,
            },
          }}
        >
          <KeyIcon sx={{ color: "primary.main" }} />
        </Box>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 2, mt: -1.5 }}>
          Change password
        </Typography>
      </Stack>
      <BForm
        onSubmit={onSubmit}
        defaultValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        resolver={zodResolver(changePasswordValidation)}
      >
        <Grid>
          {changePasswordData.map((data: TChangePassword, i: number) => (
            <Grid item key={i} md={12} my={2}>
              <BInput label={data.label} type={data.type} name={data.name} />
            </Grid>
          ))}
        </Grid>

        <Stack direction="row" justifyContent="space-between" gap={3}>
          <Button
            component={Link}
            href={`/profile`}
            sx={{ width: "100%", my: 2 }}
          >
            Go Back
          </Button>
          <Button type="submit" sx={{ width: "100%", my: 2 }}>
            change Password
          </Button>
        </Stack>
      </BForm>
    </Box>
  );
};

export default ChangePassword;
