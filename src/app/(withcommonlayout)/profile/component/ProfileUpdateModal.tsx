import BDatePicker from "@/components/Form/BDatePicker";
import BForm from "@/components/Form/BForm";
import BInput from "@/components/Form/BInput";
import BSelect from "@/components/Form/BSelect";
import HCModal from "@/components/Modal/BFullScreenModal";
import Spinner from "@/components/Shared/Spinner/Spinner";
import { availabilityOption } from "@/data/selectOptions";
import {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/Features/user/userApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { profileUpdateSchema } from "@/validation/profileUpdate.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};
const ProfileUpdateModal = ({ open, setOpen, id }: TProps) => {
  const { data, isLoading } = useGetMyProfileQuery({});
  const [updateMyProfile] = useUpdateMyProfileMutation();

  const handleFormSubmit: SubmitHandler<FieldValues> = async (values) => {
    values.lastDonationDate = dateFormatter(values.lastDonationDate);
    values.availability = values.availability === "yes" ? true : false;
    values.age = Number(values.age);

    try {
      const res = await updateMyProfile(values);
      setOpen(false);
      if (res.data) {
        toast.success("Successfully update your profile");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const defaultValues = {
    name: data?.name || "",
    location: data?.location || "",
    age: data?.userProfile?.age || "",
    contactNumber: data?.userProfile?.contactNumber || "",
    bio: data?.userProfile?.bio || "",
  };

  return (
    <HCModal open={open} setOpen={setOpen} title="Update User Information">
      {isLoading ? (
        <Spinner />
      ) : (
        <BForm
          onSubmit={handleFormSubmit}
          resolver={zodResolver(profileUpdateSchema)}
          defaultValues={data && defaultValues}
        >
          <Grid container spacing={4} mt={2}>
            <Grid item md={6}>
              <BInput label="Name" type="text" name="name" />
            </Grid>
            <Grid item md={6}>
              <BInput label="Location" type="text" name="location" />
            </Grid>
            <Grid item md={6}>
              <BInput label="Age" type="number" name="age" />
            </Grid>
            <Grid item md={6}>
              <BInput label="Contact Number" type="text" name="contactNumber" />
            </Grid>
            <Grid item md={6}>
              <BInput label="Bio" type="text" name="bio" />
            </Grid>
            <Grid item md={6}>
              <BSelect
                label="Available"
                name="availability"
                options={availabilityOption}
              />
            </Grid>
            <Grid item md={6}>
              <BDatePicker label="Last Donation Date" name="lastDonationDate" />
            </Grid>
          </Grid>

          <Button
            sx={{
              mt: 2,
            }}
            type="submit"
          >
            Update
          </Button>
        </BForm>
      )}
    </HCModal>
  );
};

export default ProfileUpdateModal;
