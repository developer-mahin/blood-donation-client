import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const ImageUpload = () => {
  const [image, setImage] = useState<File>();

  const uploadImage = async (e: any) => {
    const files = e.target.files;
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "next_cloudinary_app");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
  };

  return (
    <div>
      <CldUploadWidget uploadPreset="next_cloudinary_app">
        {({ open }) => {
          return (
            <button onClick={() => open()}>
              <CloudUploadIcon /> Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
