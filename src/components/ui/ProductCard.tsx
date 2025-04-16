import React from "react";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Product } from "@/types";
import { useImageValidation } from "@/hooks/useImageValidation";
import { ProductImage } from "./ProductImage";

type ViewMode = "grid" | "list";

interface ProductCardProps {
  product: Product;
  viewMode?: ViewMode;
  onAddToCart: (product: Product, quantity: number) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  viewMode = "grid",
  onAddToCart,
  onViewDetails,
}) => {
  const [quantity, setQuantity] = useState(1);
  const validImageUrl = useImageValidation(product.image);

  const onQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const onQuantityIncrease = () => {
    onQuantityChange(1);
  };

  const onQuantityDecrease = () => {
    onQuantityChange(-1);
  };

  const onAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, quantity);
  };

  const onViewDetailsClick = () => {
    onViewDetails(product);
  };

  if (viewMode === "list") {
    return (
      <div className="bg-white rounded-lg shadow-sm p-2 flex items-center gap-4">
        <div className="cursor-pointer" onClick={onViewDetailsClick}>
          <ProductImage
            src={validImageUrl}
            alt={product.name}
            className="w-24 h-24 object-cover rounded"
          />
        </div>
        <div className="flex-1 cursor-pointer" onClick={onViewDetailsClick}>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            {product.isLimited && (
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                限量
              </span>
            )}
            {product.isOutOfStock && (
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                缺貨中
              </span>
            )}
          </div>
          <p className="text-gray-600 text-sm">{product.description}</p>
          <p className="text-xl font-bold mt-1">NT$ {product.price}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-2">
            {!product.isOutOfStock && (
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={onQuantityDecrease}
                  className="p-1 hover:text-blue-600"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={onQuantityIncrease}
                  className="p-1 hover:text-blue-600"
                >
                  <Plus size={16} />
                </button>
              </div>
            )}

            <button
              onClick={onAddToCartClick}
              disabled={product.isOutOfStock}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors disabled:bg-gray-400"
            >
              <ShoppingCart size={18} />
              加入
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
      onClick={onViewDetailsClick}
    >
      <div className="relative aspect-[4/3]">
        <ProductImage
          src={validImageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.isOutOfStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <span className="text-white text-lg font-semibold">已售完</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold line-clamp-1">{product.name}</h3>
          <p className="text-gray-600 line-clamp-2 text-sm">
            {product.description}
          </p>
          <div className="text-xl font-bold text-blue-600">
            NT$ {product.price}
          </div>
        </div>

        <div className="flex gap-2 mt-4" onClick={(e) => e.stopPropagation()}>
          {!product.isOutOfStock && (
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={onQuantityDecrease}
                className="p-1 hover:text-blue-600"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button
                onClick={onQuantityIncrease}
                className="p-1 hover:text-blue-600"
              >
                <Plus size={16} />
              </button>
            </div>
          )}
          <button
            onClick={onAddToCartClick}
            disabled={product.isOutOfStock}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:bg-gray-400"
          >
            <ShoppingCart size={18} />
            加入
          </button>
        </div>
      </div>
    </div>
  );
};
