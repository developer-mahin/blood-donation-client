import SectionTitle from "@/components/UI/Shared/SectionTitle";
import { Box, Container } from "@mui/material";

const Location = () => {
  return (
    <Box
      sx={{
        py: 8,
        height:{
          xs:"70vh",
          md:"80vh"
        }
      }}
    >
      <SectionTitle
        title="Our Location"
        des="Find us at our convenient and accessible locations, ready to serve you wherever you are."
      />
      <Box py={2} />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7263.19376133151!2d89.86388326518689!3d24.46476762798168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdf25d4d9022fb%3A0xe956b551863487ad!2sBhuapur!5e0!3m2!1sen!2sbd!4v1721129575979!5m2!1sen!2sbd"
        style={{
          border: "0px",
          width: "100%",
          height: "100%",
        }}
        loading="lazy"
      ></iframe>
    </Box>
  );
};

export default Location;
