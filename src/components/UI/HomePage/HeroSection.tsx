import assets from "@/assets/assets";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CContainer from "../Shared/Container";

const HeroSection = () => {
  return (
    <Box
      sx={{
        padding: {
          md: "120px 0px",
          xs: "50px 16px",
        },
        px: 2,
      }}
    >
      <CContainer>
        <Grid container columnSpacing={2} alignItems="center" gap={4}>
          <Grid md={4.5}>
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
              Every day, countless lives are saved thanks to the generosity of
              blood donors. By donating blood, you become a vital part of a
              lifesaving network, offering hope and healing to those in
              desperate need. Imagine the difference you can make—one pint of
              blood can save up to three lives.
              <br />
              Hospitals and emergency services rely on a steady supply of blood
              to perform surgeries, treat patients with chronic illnesses, and
              respond to traumatic injuries. Without dedicated donors like you,
              these critical services would be impossible. Blood donation is a
              simple and safe process that typically takes less than an hour.
              Your small act of kindness can have a profound impact on someone’s
              life.
            </Typography>
            <Stack direction="row" gap={2} mt={3}>
              <Button>Search Donors</Button>
              <Button variant="outlined">Donate Blood</Button>
            </Stack>
          </Grid>
          <Grid md={7}>
            <div className="flex justify-end">
              <Image
                src={assets.images.bannerImage}
                alt=""
                width={700}
                height={400}
              />
            </div>
          </Grid>
        </Grid>
      </CContainer>
    </Box>
  );
};

export default HeroSection;
