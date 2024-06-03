import { CircularProgress, SxProps } from "@mui/material";

const LoadingSpinner = ({ sx }: { sx?: SxProps }) => {
  return <CircularProgress sx={{ ...sx }} />;
};

export default LoadingSpinner;
