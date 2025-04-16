import { useState, useEffect } from "react";

export const useImageValidation = (
  imageUrl: string,
  fallbackUrl: string = "src/assets/youho_logo.jpg"
) => {
  const [validImageUrl, setValidImageUrl] = useState<string>(imageUrl);

  useEffect(() => {
    const validateImage = async () => {
      try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
          console.log("Image validation failed: Response not OK", imageUrl);
          setValidImageUrl(fallbackUrl);
          return;
        }
        const blob = await response.blob();
        if (!blob.type.startsWith("image/")) {
          console.log("Image validation failed: Not an image", imageUrl);
          setValidImageUrl(fallbackUrl);
          return;
        }
        console.log("Image validation successful", imageUrl);
        setValidImageUrl(imageUrl);
      } catch (error) {
        console.log("Image validation failed: Error", error);
        setValidImageUrl(fallbackUrl);
      }
    };

    if (imageUrl) {
      validateImage();
    } else {
      setValidImageUrl(fallbackUrl);
    }
  }, [imageUrl, fallbackUrl]);

  return validImageUrl;
};
