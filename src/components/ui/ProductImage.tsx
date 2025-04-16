import React from "react";
import { useImageValidation } from "@/hooks/useImageValidation";

type ProductImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  className = "",
}) => {
  const validImageUrl = useImageValidation(src);

  return <img src={validImageUrl} alt={alt} className={className} />;
};
