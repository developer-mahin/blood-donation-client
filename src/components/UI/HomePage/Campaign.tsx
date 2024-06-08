/* eslint-disable @next/next/no-img-element */
import { Box, Container } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import SectionTitle from "../Shared/SectionTitle";

const itemData = [
  {
    img: "https://templates.bwlthemes.com/blood_donation/v_2/images/gallery_1.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://templates.bwlthemes.com/blood_donation/v_2/images/gallery_2.jpg",
    title: "Burger",
  },
  {
    img: "https://templates.bwlthemes.com/blood_donation/v_2/images/gallery_3.jpg",
    title: "Camera",
  },
  {
    img: "https://templates.bwlthemes.com/blood_donation/v_2/images/gallery_4.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://templates.bwlthemes.com/blood_donation/v_2/images/gallery_5.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://templates.bwlthemes.com/blood_donation/v_2/images/gallery_6.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://templates.bwlthemes.com/blood_donation/v_2/images/gallery_8.jpg",
    title: "Basketball",
  },
  {
    img: "https://templates.bwlthemes.com/blood_donation/v_2/images/event_1.jpg",
    title: "Fern",
  },
  {
    img: "https://templates.bwlthemes.com/blood_donation/v_2/images/event_3.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://templates.bwlthemes.com/blood_donation/v_2/images/event_4.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://templates.bwlthemes.com/blood_donation/images/gallery_4.jpg",
    title: "Sea star",
  },
  {
    img: "https://templates.bwlthemes.com/blood_donation/images/blog_thumb_2.jpg",
    title: "Bike",
    cols: 2,
  },
];

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const Campaign = () => {
  return (
    <Box
      sx={{
        py: 10,
        background: "#F8F8F8",
      }}
    >
      <Container>
        <SectionTitle
          title="CAMPAIGN GALLERY"
          des="our prestigious voluntary work on campaigns by the team"
        />

        <ImageList variant="quilted" cols={4}>
          {itemData?.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                style={{
                  cursor: "pointer",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  );
};

export default Campaign;
