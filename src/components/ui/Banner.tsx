import React, { useEffect, useState, useRef } from "react";

type BannerProps = {
  images?: string[];
  aspectRatio?: number; // 寬高比，預設為 16:9
};

const defaultImages = [
  "https://images.unsplash.com/photo-1559847844-5315695dadae?w=1200",
  "https://images.unsplash.com/photo-1559847844-5315695dadae?w=1200",
  "https://images.unsplash.com/photo-1559847844-5315695dadae?w=1200",
];

export const Banner: React.FC<BannerProps> = (props) => {
  const { images = defaultImages, aspectRatio = 16 / 9 } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // 根據寬度和寬高比計算高度
  useEffect(() => {
    const updateHeight = () => {
      if (bannerRef.current) {
        const width = bannerRef.current.offsetWidth;
        setHeight(width / aspectRatio);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [aspectRatio]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative w-full overflow-hidden max-h-[80vh] px-4 md:px-8 lg:px-16"
      style={{
        height:
          height > 0
            ? `${Math.min(height, window.innerHeight * 0.8)}px`
            : "auto",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <div
              className="absolute inset-0 transition-all duration-700 ease-in-out"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: isHovered ? "scale(1.1)" : "scale(1)",
              }}
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
