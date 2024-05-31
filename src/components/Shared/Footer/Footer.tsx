import { TNavItems, navItems } from "@/data/navItems";
import { Box, Container, Divider, Grid, Link, Typography } from "@mui/material";
import Image from "next/image";
import SocialPlatform from "../SocialPlatform/SocialPlatform";
import assets from "@/assets/assets";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      sx={{
        py: 8,
      }}
    >
      <Container>
        <Divider sx={{ mb: 3, border: "1px solid lightgray" }} />
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Box display="flex" alignItems="center">
              <Image
                src={assets.images.logo}
                width={120}
                height={80}
                alt="Ghuri Foundation"
              />
              <Typography
                variant="h6"
                color="#3E3E3E"
                component="h6"
                fontWeight={600}
              >
                Ghuri Foundation
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              {navItems.map((item: TNavItems, index: number) => (
                <Grid item key={index}>
                  <Link href={item.path} variant="body2" color="textSecondary">
                    {item.title}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <SocialPlatform />
        </Grid>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ mt: 2 }}
        >
          © {year} Ghuri Foundation. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
