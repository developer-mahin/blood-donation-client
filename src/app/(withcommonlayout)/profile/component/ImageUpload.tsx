"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const ImageUpload = ({
  setImage,
}: {
  setImage: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div>
      <CldUploadWidget
        uploadPreset="next_cloudinary_app"
        onSuccess={(result: any) => {
          setImage(result?.info?.secure_url);
        }}
      >
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
