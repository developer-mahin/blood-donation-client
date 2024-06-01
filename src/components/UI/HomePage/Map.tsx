import { Box, Container } from "@mui/material";
import SectionTitle from "../Shared/SectionTitle";

const Map = () => {
  return (
    <Container
      sx={{
        py: 8,
      }}
    >
      <SectionTitle
        title="Our Location"
        des="Find us at our convenient and accessible locations, ready to serve you wherever you are."
      />
      <Box py={2} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14526.382409956588!2d89.87857535!3d24.46481195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdf3006d5d4daf%3A0x3b13690d3bd54d54!2z4Kat4KeC4Kae4Ka-4Kaq4KeB4KawIOCmuOCmsOCmleCmvuCmsOCmvyDgprngpr7gprjgpqrgpr7gpqTgpr7gprI!5e0!3m2!1sen!2sbd!4v1717244598300!5m2!1sen!2sbd"
        style={{
          border: "0px",
          width: "100%",
          height: "480px",
        }}
        loading="lazy"
      ></iframe>
    </Container>
  );
};

export default Map;
