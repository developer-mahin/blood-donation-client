"use client";

import { TTestimonial, testimonialsData } from "@/data/testimonial";
import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SectionTitle from "../Shared/SectionTitle";

const Testimonials = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Box
      sx={{
        py: 8,
      }}
    >
      <Container>
        <SectionTitle
          title="Testimonial"
          des="See what  satisfied people are saying about their amazing experiences with us."
        />
        <Box
          sx={{
            pb: 2,
          }}
        />
        <Slider {...settings}>
          {testimonialsData.map((testimonial: TTestimonial) => (
            <Box key={testimonial.id} sx={{ padding: "0 10px" }}>
              <Card
                sx={{
                  margin: "0 auto",
                  maxWidth: 600,
                  borderRadius: "15px",
                  boxShadow: 3,
                  border: "1px solid #ddd",
                  py: 2,
                }}
              >
                <CardContent>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        marginBottom: "15px",
                      }}
                    >
                      <Box
                        sx={{
                          mr: 1,
                        }}
                      >
                        <Image
                          src={testimonial.image}
                          width={80}
                          height={80}
                          alt=""
                          style={{
                            borderRadius: "50px",
                            objectFit: "cover",
                            width: "80px",
                            height: "80px",
                          }}
                        />
                      </Box>
                      <Box textAlign="center">
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {testimonial.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                  <Typography
                    variant="body1"
                    fontStyle="italic"
                    textAlign="center"
                  >
                    &quot;{testimonial.message}&quot;
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Testimonials;
