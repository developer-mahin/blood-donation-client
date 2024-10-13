import { Box, Typography } from "@mui/material";

const SectionTitle = ({ title, des }: { title: string; des?: string }) => {
  return (
    <Box>
      <Typography
        textAlign="center"
        variant="h4"
        component="h4"
        fontWeight={600}
        textTransform="uppercase"
        color="primary"
      >
        {title}
      </Typography>
      {des && (
        <Typography
          textAlign="center"
          textTransform="capitalize"
          color="primary"
          paragraph
          fontSize="18px"
        >
          {des}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;
