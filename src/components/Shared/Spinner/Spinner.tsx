import { CircularProgress, Stack, SxProps } from "@mui/material";

const Spinner = ({ sx }: { sx?: SxProps }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CircularProgress sx={{ ...sx }} />
    </Stack>
  );
};

export default Spinner;
