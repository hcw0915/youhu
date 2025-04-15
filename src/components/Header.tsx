import React from "react";
import { ShoppingBag, LayoutGrid, List } from "lucide-react";
import { ViewMode } from "../types";

interface HeaderProps {
  cartItemsCount: number;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  onCartOpen: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemsCount,
  viewMode,
  setViewMode,
  onCartOpen,
}) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">美食嚴選</h1>
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
            onClick={onCartOpen}
            className="relative bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ShoppingBag size={24} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
