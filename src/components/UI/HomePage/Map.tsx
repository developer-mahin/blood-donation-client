"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Box, Typography } from "@mui/material";
import { allCities } from "@/data/mapData";
import SectionTitle from "../Shared/SectionTitle";
import CContainer from "../Shared/Container";

// Fixing the default icon issue in Leaflet
//delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Map = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        width: "100%",
        my: 5,
        mb: {
          xs: 10,
          md: 6,
        },
      }}
    >
      <Box
        sx={{
          px: 2,
        }}
      >
        <SectionTitle
          title="Our Service Area"
          des="Connecting donors and recipients for lifesaving blood donations, Facilitating easy and efficient blood donations."
        />
      </Box>
      <Box
        sx={{
          pb: 3,
        }}
      />
      <MapContainer
        center={[23.8103, 90.4125]}
        zoom={7}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {allCities.map((loc, index) => (
          <Marker key={index} position={[loc.latitude, loc.longitude]}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default Map;
