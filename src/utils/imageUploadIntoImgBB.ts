import { imgbburl } from "@/constant/URL";
import { toast } from "sonner";

export const imageUploadIntoImgbb = (formData: any) => {
  const image = fetch(`${imgbburl}`, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((imageData) => {
      return imageData.data.display_url;
    })
    .catch(() => {
      toast.error("Image not upload please try again");
    });

  return image;
};
