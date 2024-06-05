import { toast } from "sonner";

export const imageUploadIntoImgbb = (formData: any) => {
  const image = fetch(
    `https://api.imgbb.com/1/upload?expiration=600&key=8316d765c0bdd91dbaca00e76ef128cc`,
    {
      method: "POST",
      body: formData,
    }
  )
    .then((res) => res.json())
    .then((imageData) => {
      return imageData.data.display_url;
    })
    .catch(() => {
      toast.error("Image not upload please try again");
    });

  return image;
};
