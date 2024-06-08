import SocialPlatform from "@/components/Shared/SocialPlatform/SocialPlatform";
import { Box, Container, Typography } from "@mui/material";
import { StyledInformationBox } from "../../profile/component/StyledInformationBox";

const ContactInfo = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: 8,
      }}
    >
      <Typography
        sx={{
          fontSize: "25px",
          mb: 2,
        }}
        fontWeight={600}
      >
        Contact Info
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItemsL: "center",
          gap: 2,
        }}
      >
        <StyledInformationBox>
          <Box
            sx={{
              display: "flex",
              alignItemsL: "center",
              gap: 0.5,
            }}
          >
            <Typography>Email: </Typography>
            <Typography>ghurifoundation@gmail.com</Typography>
          </Box>
        </StyledInformationBox>

        <StyledInformationBox>
          <Box
            sx={{
              display: "flex",
              alignItemsL: "center",
              gap: 0.5,
            }}
          >
            <Typography>Phone: </Typography>
            <Typography>01785767584</Typography>
          </Box>
        </StyledInformationBox>
      </Box>
      <SocialPlatform />
    </Container>
  );
};

export default ContactInfo;
