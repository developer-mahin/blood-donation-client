/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import ImageUpload from "./ImageUpload";
import { useUpdateMyProfileMutation } from "@/redux/api/Features/user/userApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Upload = () => {
  const router = useRouter();
  const [image, setImage] = useState<string>("");
  const [updateMyProfile] = useUpdateMyProfileMutation();

  useEffect(() => {
    if (image && image !== "") {
      updateMyProfile({ photo: image });
      toast.success("successfully your profile image updated");
      router.refresh();
      setImage("");
    }
  }, [image]);

  return (
    <>
      <ImageUpload setImage={setImage} />
    </>
  );
};

export default Upload;
