"use client";

import HCModal from "@/components/Modal/BFullScreenModal";
import Spinner from "@/components/Shared/Spinner/Spinner";
import { TSelectInput, availabilityOption } from "@/data/selectOptions";
import {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/Features/user/userApi";
import { dateFormatter } from "@/utils/dateFormatter";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const ProfileUpdateModal = ({ open, setOpen }: TProps) => {
  const { data, isLoading } = useGetMyProfileQuery({});
  const [updateMyProfile] = useUpdateMyProfileMutation();

  const [dateValue, setDateValue] = useState<Dayjs | null>();
  const [available, setAvailable] = useState<string>("");
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const lastDonationDate = dateFormatter(dateValue);
    const availability = available === "yes" ? true : false;
    values.age = Number(values.age);

    const data = {
      ...values,
      lastDonationDate,
      availability,
    };

    try {
      const res = await updateMyProfile(data);
      setOpen(false);
      if (res.data) {
        toast.success("Successfully update your profile");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <HCModal open={open} setOpen={setOpen} title="Update User Information">
      {isLoading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} mt={2}>
            <Grid item md={6}>
              <TextField
                label="Name"
                type="text"
                variant="outlined"
                size="small"
                fullWidth
                defaultValue={data?.name || ""}
                {...register("name")}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Location"
                type="text"
                variant="outlined"
                size="small"
                defaultValue={data?.location || ""}
                fullWidth
                {...register("location")}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Age"
                type="number"
                variant="outlined"
                size="small"
                defaultValue={data?.userProfile?.age || ""}
                fullWidth
                {...register("age")}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Contact Number"
                type="text"
                variant="outlined"
                size="small"
                defaultValue={data?.userProfile?.contactNumber || ""}
                fullWidth
                {...register("contactNumber")}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Bio"
                type="text"
                variant="outlined"
                size="small"
                fullWidth
                defaultValue={data?.userProfile?.bio || ""}
                {...register("bio")}
              />
            </Grid>

            <Grid item md={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Last Donation Date"
                  // value={dateValue}
                  disableFuture
                  onChange={(newValue) => setDateValue(newValue)}
                  slotProps={{
                    textField: {
                      size: "small",
                      variant: "outlined",
                      fullWidth: true,
                    },
                  }}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item md={6}>
              <FormControl fullWidth size="small">
                <InputLabel id={`Available-label`}>Available</InputLabel>
                <Select
                  name="available"
                  labelId={`Available-label`}
                  id={`Available-select`}
                  label="Available"
                  // onChange={onChange}
                  onChange={(e: any) => setAvailable(e.target.value)}
                >
                  {availabilityOption?.map((item: TSelectInput) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            sx={{
              mt: 2,
            }}
          >
            Submit
          </Button>
        </form>
      )}
    </HCModal>
  );
};

export default ProfileUpdateModal;
