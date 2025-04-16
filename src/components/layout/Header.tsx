import React from "react";
import { ShoppingBag, LayoutGrid, List, X, Menu } from "lucide-react";
import { ViewMode } from "@/types";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "@/stores/cartStore";

type HeaderProps = {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  onCartToggle: () => void;
  isCartOpen: boolean;
};

export const Header: React.FC<HeaderProps> = (props) => {
  const { viewMode, setViewMode, onCartToggle, isCartOpen } = props;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const cartItemCount = useCartStore((state) => state.getItemCount());

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onLogoClick = () => {
    navigate("/");
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <button onClick={onLogoClick} className="flex items-center gap-2">
              <img
                src="src/assets/youho_logo.jpg"
                alt="Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-blue-600">祐呼水產</span>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${
                  viewMode === "grid" ? "bg-white shadow" : "hover:bg-white/50"
                }`}
              >
                <LayoutGrid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${
                  viewMode === "list" ? "bg-white shadow" : "hover:bg-white/50"
                }`}
              >
                <List size={20} />
              </button>
            </div>
            <button
              onClick={onCartToggle}
              className={`relative p-2 rounded-lg transition-colors ${
                isCartOpen
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {isCartOpen ? <X size={24} /> : <ShoppingBag size={24} />}
              {cartItemCount > 0 && !isCartOpen && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
