import { Box, Stack, Typography } from "@mui/material";
import { StyledInformationBox } from "./StyledInformationBox";

const Information = ({ data }: any) => {
  return (
    <>
      <Typography variant="h5" color="primary.main" mb={2}>
        Personal Information
      </Typography>

      <Stack direction={{ xs: "column", md: "row" }} gap={2} flexWrap={"wrap"}>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Role
          </Typography>
          <Typography>{data?.role}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Name
          </Typography>
          <Typography>{data?.name}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Email
          </Typography>
          <Typography>{data?.email}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Blood Type
          </Typography>
          <Typography>{data?.bloodType}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Availability
          </Typography>
          <Typography>
            {data?.availability ? "Available" : "Not Available"}
          </Typography>
        </StyledInformationBox>
      </Stack>

      <Typography variant="h5" my={2} color={"primary.main"}>
        Professional Information
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} flexWrap={"wrap"} gap={2}>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Age
          </Typography>
          <Typography>
            {data?.userProfile?.age === 0 ? "N/A" : data?.userProfile?.age}
          </Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Contact Number
          </Typography>
          <Typography>{data?.userProfile?.contactNumber || "N/A"}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Last Donation Date
          </Typography>
          <Typography>
            {data?.userProfile?.lastDonationDate || "N/A"}
          </Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Joined
          </Typography>
          <Typography>
            {data
              ? new Date(data.createdAt).toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "2-digit",
                })
              : null}
          </Typography>
        </StyledInformationBox>
        <Box
          sx={{
            background: "#f4f7fe",
            padding: "8px 16px",
            borderRadius: "10px"
          }}
        >
          <Typography variant="caption" color="secondary">
            Bio
          </Typography>
          <Typography>{data?.userProfile?.bio || "N/A"}</Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Information;
