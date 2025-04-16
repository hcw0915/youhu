import React from "react";
import { Product } from "@/types";
import { ScrollableProductContainer } from "./ScrollableProductContainer";

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = (props) => {
  const { products, onAddToCart, onViewDetails } = props;

  // 根據分類分組商品
  const groupedProducts = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  // 分類名稱對應的中文標題
  const categoryTitles: Record<string, string> = {
    seafood: "生食級海鮮",
    "frozen-seafood": "冷凍海鮮",
    "frozen-fish": "冷凍魚類",
    milkfish: "虱目魚系列",
    fishball: "魚丸系列",
    sausage: "香腸系列",
    "dried-goods": "乾貨系列",
  };

  return (
    <div className="space-y-12">
      {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
        <ScrollableProductContainer
          key={category}
          title={categoryTitles[category] || category}
          products={categoryProducts}
          onAddToCart={onAddToCart}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};
