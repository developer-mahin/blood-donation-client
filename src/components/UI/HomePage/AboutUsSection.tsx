/* eslint-disable react/no-unescaped-entities */
import assets from "@/assets/assets";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const AboutUsSection = () => {
  const mission = [
    {
      title: "Promote Blood Donation",
      des: "Raise awareness about the critical need for blood donations and encourage more people to become donors.",
    },
    {
      title: "Connect Donors and Recipients",
      des: "Provide a comprehensive and easy-to-use system for searching and filtering donors, ensuring that recipients can quickly find compatible matches.",
    },
    {
      title: "Ensure Security and Efficiency",
      des: "Implement robust features for user account management and administrative oversight to guarantee a safe and efficient donation process.",
    },
    {
      title: "Support the Community",
      des: "Create a supportive community where donors and recipients can share their experiences and encourage others to participate in this vital cause.",
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#D0D0D0",
        py: 10,
      }}
    >
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item md={6.5}>
            <Image src={assets.images.about} alt="" width={700} height={400} />
          </Grid>
          <Grid item md={5}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              fontWeight={600}
            >
              About Us
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                mb: 3,
              }}
            >
              The primary purpose of our website is to facilitate life-saving
              blood donations by providing a reliable and user-centric platform.
              We aim to bridge the gap between donors and recipients, ensuring
              that blood is available when and where it's needed most.
            </Typography>

            <Box>
              <Typography
                variant="h5"
                component="h5"
                fontWeight={600}
                gutterBottom
              >
                Our Missions
              </Typography>
              <ul
                style={{
                  listStyleType: "disc",
                }}
              >
                {mission.map((item: any, i: number) => (
                  <li key={i}>
                    <Box>
                      <Typography>
                        <span
                          style={{
                            fontWeight: "600",
                          }}
                        >
                          {item.title} :
                        </span>{" "}
                        {item.des}
                      </Typography>
                    </Box>
                  </li>
                ))}
              </ul>
            </Box>

            <Button
              sx={{
                fontWeight: "600",
                mt: 3,
              }}
              variant="outlined"
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsSection;
