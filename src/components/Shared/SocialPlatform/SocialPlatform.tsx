import { Box, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AppleIcon from "@mui/icons-material/Apple";

const SocialPlatform = ({ title }: { title: string }) => {
  const socialIcons = [
    <FacebookIcon
      key="facebook"
      sx={{
        fontSize: "35px",
      }}
    />,
    <XIcon
      key="x"
      sx={{
        fontSize: "30px",
      }}
    />,
    <LinkedInIcon
      key="linkedin"
      sx={{
        fontSize: "35px",
      }}
    />,
    <AppleIcon
      key="apple"
      sx={{
        fontSize: "40px",
      }}
    />,
  ];

  return (
    <Box
      sx={{
        my: 3,
      }}
    >
      <Typography
        variant="h6"
        component="h6"
        textAlign="center"
        fontWeight={600}
        sx={{
          my: 2,
        }}
      >
        {title}
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        {socialIcons?.map((icon, index: number) => {
          return (
            <Box
              sx={{
                cursor: "pointer",
                width: "50px",
                height: "50px",
                background: "#ddd",
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              key={index}
            >
              {icon}
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default SocialPlatform;
