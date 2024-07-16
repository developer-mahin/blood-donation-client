import assets from "@/assets/assets";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import SectionTitle from "../Shared/SectionTitle";
import CContainer from "../Shared/Container";

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
        background: "#F8F8F8",
        py: 10,
      }}
    >
      <CContainer>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item md={6.5}>
            <Image src={assets.images.about} alt="" width={700} height={400} />
          </Grid>
          <Grid item md={5}>
            <SectionTitle title="About Us" />
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
              that blood is available when and where it&rsquos needed most.
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
              <a href="#contact">Contact Us</a>
            </Button>
          </Grid>
        </Grid>
      </CContainer>
    </Box>
  );
};

export default AboutUsSection;
