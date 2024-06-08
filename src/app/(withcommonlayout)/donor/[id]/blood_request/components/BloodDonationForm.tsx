"use client";

import { TRequest, bloodRequestData } from "@/data/bloodRequestData";
import createDonationRequest from "@/service/actions/createDontaionRequest";
import { TUser } from "@/types";
import { dateFormatter } from "@/utils/dateFormatter";
import { Button, Grid, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type TBloodRequestFormProps = {
  user: TUser | undefined;
  donorId: string;
};

const BloodDonationForm = ({ donorId, user }: TBloodRequestFormProps) => {
  const router = useRouter();
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs());
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const newDate = dateFormatter(dateValue);
    const data = {
      ...values,
      donorId,
      dateOfDonation: newDate,
      requesterId: user?.id,
    };

    try {
      const res = await createDonationRequest(data);
      if (res?.success) {
        router.push("/profile");
        toast.success("Request sent successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container gap={2}>
        {bloodRequestData.map((item: TRequest, i: number) => (
          <Grid item key={i} md={5.5}>
            <TextField
              label={item.label}
              type="text"
              variant="outlined"
              size="small"
              fullWidth
              {...register(item.name)}
              required
            />
          </Grid>
        ))}
        <Grid item md={5.5}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Donation Date"
              value={dateValue}
              disablePast
              onChange={(newValue) => setDateValue(newValue)}
              slotProps={{
                textField: {
                  size: "small",
                  variant: "outlined",
                  fullWidth: true,
                  required: true,
                },
              }}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>

      <Button
        type="submit"
        sx={{
          px: 8,
          mt: 2,
        }}
      >
        Request
      </Button>
    </form>
  );
};

export default BloodDonationForm;
