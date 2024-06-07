import assets from "@/assets/assets";
import { TUser } from "@/types";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const SingleDonor = ({ donor }: { donor: TUser }) => {
  return (
    <Card
      sx={{
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        borderRadius: "12px",
      }}
    >
      {donor?.userProfile?.photo ? (
        <>
          <Image
            src={donor?.userProfile?.photo}
            className="border-2 border-green-500 p-2 rounded-xl h-[350px] object-cover"
            alt={donor.name}
            height={300}
            width={500}
          />
        </>
      ) : (
        <>
          <Image
            src={assets.testimonial.one}
            className="border-2 border-green-500 p-2 rounded-xl h-[350px] object-cover"
            alt={donor.name}
            height={300}
            width={500}
          />
        </>
      )}
      <CardContent>
        <Typography fontWeight={600} variant="h6">
          {donor.name}
        </Typography>
        <Typography fontWeight={600} variant="body2">
          Blood Type: {donor.bloodType}
        </Typography>
        <Typography fontWeight={600} variant="body2">
          Location: {donor.location}
        </Typography>
        <Typography
          variant="body2"
          color={donor.availability ? "green" : "red"}
        >
          {donor.availability ? "Available" : "Not Available"}
        </Typography>
        <Link href={`/donor/${donor.id}`}>
          <Button
            sx={{
              px: 2,
              py: 1,
              mt: 1,
            }}
            size="small"
          >
            Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default SingleDonor;
