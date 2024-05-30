import assets from "@/assets/assets";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Box
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <Container>
        <Grid container columnSpacing={2}>
          <Grid md={6}>
            <Typography
              sx={{
                fontSize: "40px",
              }}
              variant="h4"
              component="h4"
              fontWeight={700}
            >
              Be a Hero,{" "}
              <span style={{ fontWeight: "bold", color: "#ff1744" }}>
                Donate Blood –
              </span>
              Save Lives Today!
            </Typography>

            <Typography
              sx={{
                fontSize: "18px",
                mt: 2,
              }}
              fontWeight={500}
            >
              Join us in making a difference! Your blood donation can save lives
              and bring hope to those in need. Every drop counts. Be a
              hero—donate blood and make a lifesaving impact today!
            </Typography>
            <Stack direction="row" gap={2} mt={3}>
              <Button>Search Donors</Button>
              <Button variant="outlined">Donate Blood</Button>
            </Stack>
          </Grid>
          <Grid md={6}>
            <Image
              src={assets.images.bannerImage}
              alt=""
              width={700}
              height={400}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
