import { baseurl } from "@/constant/URL";
import { authKey } from "@/constant/common";
import createDonationRequest from "@/service/actions/createDontaionRequest";
import { Box, Container, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
// import BloodDonationForm from "./components/BloodDonationForm";

const BloodRequestPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const BloodDonationForm = dynamic(() => import("./components/BloodDonationForm"), {
    ssr: false,
  });

  const token = cookies().get(authKey);
  if (!token) {
    return redirect("/login");
  }
  const res = await fetch(`${baseurl}/user/my-profile`, {
    headers: {
      authorization: token.value,
    },
    next: {
      tags: ["profile"],
    },
  });
  const result = await res.json();
  const data = result?.data;

  return (
    <Box sx={{ background: "#F8F8F8", py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Create Blood Request
        </Typography>
        <Box
          sx={{
            padding: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <BloodDonationForm
            user={data}
            donorId={params?.id}
            // createDonationRequest={createDonationRequest}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default BloodRequestPage;
