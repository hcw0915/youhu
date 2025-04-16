import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { RefObject } from "react";

interface ScrollButtonsProps {
  containerRef: RefObject<HTMLDivElement>;
  showScrollToTop?: boolean;
  isCartOpen?: boolean;
}

export const ScrollButtons = ({
  containerRef,
  showScrollToTop = false,
  isCartOpen = false,
}: ScrollButtonsProps) => {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const checkScrollButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      checkScrollButtons();
      container.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      }
    };
  }, [containerRef]);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 左右滾動按鈕 */}
      {!showScrollToTop && (
        <>
          {showLeftButton && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
              <button
                onClick={scrollLeft}
                className="bg-white/80 text-gray-800 p-2 rounded-full shadow-md hover:bg-white transition-colors border-2 border-slate-400"
              >
                <ArrowLeft size={24} />
              </button>
            </div>
          )}
          {showRightButton && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
              <button
                onClick={scrollRight}
                className="bg-white/80 text-gray-800 p-2 rounded-full shadow-md hover:bg-white transition-colors border-2 border-slate-400"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          )}
        </>
      )}

      {/* 回到頂部按鈕 */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 bg-blue-400 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 ${
            isCartOpen ? "md:mr-96" : ""
          }`}
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};
