import { useState, useEffect } from "react";
import youhoLogo from "@/assets/youho_logo.jpg";

export const useImageValidation = (imageUrl: string) => {
  const [validImageUrl, setValidImageUrl] = useState<string>(imageUrl);

  useEffect(() => {
    const validateImage = async () => {
      try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
          console.log("Image validation failed: Response not OK", imageUrl);
          setValidImageUrl(youhoLogo);
          return;
        }
        const blob = await response.blob();
        if (!blob.type.startsWith("image/")) {
          console.log("Image validation failed: Not an image", imageUrl);
          setValidImageUrl(youhoLogo);
          return;
        }
        console.log("Image validation successful", imageUrl);
        setValidImageUrl(imageUrl);
      } catch (error) {
        console.log("Image validation failed: Error", error);
        setValidImageUrl(youhoLogo);
      }
    };

    if (imageUrl) {
      validateImage();
    } else {
      setValidImageUrl(youhoLogo);
    }
  }, [imageUrl]);

  return validImageUrl;
};
