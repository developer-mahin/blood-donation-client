/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      p={4}
      bgcolor="grey.50"
      color="grey.800"
    >
      <Container maxWidth="md">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ textAlign: "center" }}
        >
          <Typography
            variant="h1"
            component="h2"
            mb={2}
            fontWeight="bold"
            color="grey.400"
          >
            <span className="sr-only">Error</span>404
          </Typography>
          <Typography variant="h5" component="p" mb={2} fontWeight="medium">
            Sorry, we couldn't find this page.
          </Typography>
          <Typography variant="body1" mb={4} color="grey.600">
            But don't worry, you can find plenty of other things on our
            homepage.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            href="/"
            sx={{ py: 1.5, px: 4 }}
          >
            Back to homepage
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
