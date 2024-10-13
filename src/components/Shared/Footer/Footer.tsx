import {
  Container,
  Grid,
  Box,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import assets from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import CContainer from "@/components/UI/Shared/Container";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: "#D7212C",
        py: 10,
        px: 4,
        borderTop: "1px solid",
        borderColor: "grey.200",
        mt: 10,
      }}
    >
      <CContainer>
        <Grid container justifyContent="space-between" spacing={8}>
          <Grid item xs={12} lg={4}>
            <Link href="/" className="">
              <Image
                alt=""
                src={assets.images.new_logo}
                width={600}
                height={100}
                className="w-[250px] h-[100px]"
              />
            </Link>
          </Grid>

          <Grid item xs={12} lg={8} color="#fff">
            <Grid container spacing={3}>
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Product
                </Typography>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li>
                    <Link href="/" style={{ color: "#fff" }}>
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/" style={{ color: "#fff" }}>
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link href="/" style={{ color: "#fff" }}>
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/" style={{ color: "#fff" }}>
                      FAQ
                    </Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Company
                </Typography>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li>
                    <Link href="/" style={{ color: "#fff" }}>
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/" style={{ color: "#fff" }}>
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Developers
                </Typography>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li>
                    <Link href="/" style={{ color: "#fff" }}>
                      Public API
                    </Link>
                  </li>
                  <li>
                    <Link href="/" style={{ color: "#fff" }}>
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/" style={{ color: "#fff" }}>
                      Guides
                    </Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Social media
                </Typography>
                <Box display="flex" mt={1}>
                  <IconButton href="#" title="Facebook">
                    <FacebookIcon className="text-white" />
                  </IconButton>
                  <IconButton href="#" title="Twitter">
                    <TwitterIcon className="text-white" />
                  </IconButton>
                  <IconButton href="#" title="Instagram">
                    <InstagramIcon className="text-white" />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CContainer>
      <Box
        sx={{
          my: 3,
        }}
      />
      <Divider />
      <Box textAlign="center" mt={6}>
        <Typography variant="body2" color="#fff">
          © {year} Company Co. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
