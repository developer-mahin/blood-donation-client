"use client";

import BDatePicker from "@/components/Form/BDatePicker";
import BForm from "@/components/Form/BForm";
import BInput from "@/components/Form/BInput";
import createDonationRequest from "@/service/actions/createDontaionRequest";
import { TUser } from "@/types";
import { donationRequestSchema } from "@/validation/bloodRequest.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type TBloodRequestFormProps = {
  user: TUser | undefined;
  donorId: string;
};

const FormWrapper = ({ user, donorId }: TBloodRequestFormProps) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const data = {
      ...values,
      donorId,
      requesterId: user?.id,
    };

    console.log(values);

    // try {
    // //   const res = await createDonationRequest(data);
    // //   console.log(res);
    //   //   console.log(res);

    //   //   if (res?.success) {
    //   //     // revalidateData("profile");
    //   //     router.push("/profile");
    //   //     toast.success("Request sent successfully");
    //   //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const defaultValues = {
    phoneNumber: user?.userProfile?.contactNumber || "",
    dateOfDonation: "",
    hospitalName: "",
    hospitalAddress: "",
    reason: "",
  };

  return (
    <BForm
      onSubmit={onSubmit}
      defaultValues={defaultValues}
      resolver={zodResolver(donationRequestSchema)}
    >
      <Grid container gap={2}>
        <Grid item md={5.5}>
          <BInput name="phoneNumber" label="Phone Number" />
        </Grid>
        <Grid md={5.5}>
          <BDatePicker
            name="dateOfDonation"
            label="Date"
            fullWidth
            disablePast
          />
        </Grid>
        <Grid md={5.5}>
          <BInput name="hospitalName" label="Hospital Name" />
        </Grid>
        <Grid md={5.5}>
          <BInput name="hospitalAddress" label="Hospital Address" />
        </Grid>
        <Grid md={5.5}>
          <BInput name="reason" label="Reason" />
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
    </BForm>
  );
};

export default FormWrapper;
