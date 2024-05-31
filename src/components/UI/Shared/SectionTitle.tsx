import { Box, Typography } from "@mui/material";

const SectionTitle = ({ title, des }: { title: string; des?: string }) => {
  return (
    <Box>
      <Typography
        textAlign="center"
        variant="h4"
        component="h4"
        fontWeight={600}
      >
        {title}
      </Typography>
      {des && (
        <Typography textAlign="center" paragraph fontSize="18px">
          {des}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;
