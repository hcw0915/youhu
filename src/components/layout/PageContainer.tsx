import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ViewMode } from "@/types";

type PageContainerProps = {
  children: React.ReactNode;
  isCartOpen?: boolean;
  viewMode?: ViewMode;
  setViewMode?: (mode: ViewMode) => void;
  onCartToggle?: () => void;
};

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  isCartOpen = false,
  viewMode = "grid",
  setViewMode = () => {},
  onCartToggle = () => {},
}) => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        onCartToggle={onCartToggle}
        isCartOpen={isCartOpen}
      />

      <main
        className={`flex-grow transition-all duration-300 ${
          isCartOpen ? "md:mr-96" : ""
        }`}
      >
        {children}
      </main>

      <Footer isCartOpen={isCartOpen} />
    </div>
  );
};
