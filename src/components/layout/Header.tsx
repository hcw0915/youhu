import React from "react";
import { ShoppingBag, LayoutGrid, List, X } from "lucide-react";
import { ViewMode } from "@/types";

import { useCartStore } from "@/stores/cartStore";
import { Link } from "react-router-dom";
import youhoLogo from "@/assets/youho_logo.jpg";

type HeaderProps = {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  onCartToggle: () => void;
  isCartOpen: boolean;
};

export const Header: React.FC<HeaderProps> = (props) => {
  const { viewMode, setViewMode, onCartToggle, isCartOpen } = props;

  const cartItemCount = useCartStore((state) => state.getItemCount());

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src={youhoLogo} alt="Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-blue-600">祐呼水產</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <LayoutGrid size={24} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`hidden md:block p-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <List size={24} />
              </button>
            </div>
            <div className="relative">
              <button
                onClick={onCartToggle}
                className={`relative p-2 rounded-lg transition-colors ${
                  isCartOpen
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {isCartOpen ? <X size={24} /> : <ShoppingBag size={24} />}
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
