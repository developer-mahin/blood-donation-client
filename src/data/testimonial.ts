import assets from "@/assets/assets";

export type TTestimonial = {
  id: string;
  name: string;
  email: string;
  bloodType: string;
  location: string;
  message: string;
  image: string;
};

export const testimonialsData: TTestimonial[] = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@gmail.com",
    bloodType: "A_POSITIVE",
    location: "Dhaka",
    message: "The blood donation gave me a second chance at life. Thank you!",
    image: assets.testimonial.one,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "janesmith@gmail.com",
    bloodType: "B_NEGATIVE",
    location: "Chittagong",
    message:
      "I wouldn't be here today without the blood donation. Forever grateful.",
    image: assets.testimonial.two,
  },
  {
    id: "3",
    name: "Emily Davis",
    email: "emilydavis@gmail.com",
    bloodType: "AB_POSITIVE",
    location: "Khulna",
    message:
      "The blood donation was a lifesaver. I appreciate it more than words can express.",
    image: assets.testimonial.three,
  },
  {
    id: "4",
    name: "Michael Brown",
    email: "michaelbrown@gmail.com",
    bloodType: "O_POSITIVE",
    location: "Rajshahi",
    message: "Thanks to the blood donation, I can see my children grow up.",
    image: assets.testimonial.four,
  },
  {
    id: "5",
    name: "Sarah Wilson",
    email: "sarahwilson@gmail.com",
    bloodType: "A_NEGATIVE",
    location: "Sylhet",
    message: "Blood donation is a gift of life. I'm a living proof.",
    image: assets.testimonial.five,
  },
  {
    id: "6",
    name: "David Martinez",
    email: "davidmartinez@gmail.com",
    bloodType: "B_POSITIVE",
    location: "Barisal",
    message: "Forever thankful to the anonymous donor who saved my life.",
    image: assets.testimonial.six,
  },
  {
    id: "7",
    name: "Laura Garcia",
    email: "lauragarcia@gmail.com",
    bloodType: "AB_NEGATIVE",
    location: "Rangpur",
    message: "The generosity of blood donors has given me a new lease on life.",
    image: assets.testimonial.seven,
  },
  {
    id: "8",
    name: "Robert Taylor",
    email: "roberttaylor@gmail.com",
    bloodType: "O_NEGATIVE",
    location: "Mymensingh",
    message:
      "A simple blood donation made all the difference for me. Thank you.",
    image: assets.testimonial.eight,
  },
  {
    id: "9",
    name: "Maria Hernandez",
    email: "mariahernandez@gmail.com",
    bloodType: "A_POSITIVE",
    location: "Comilla",
    message:
      "I owe my life to the kind soul who donated blood. Thank you from the bottom of my heart.",
    image: assets.testimonial.nine,
  },
];
