import React from "react";
import { Product, ViewMode } from "../types";
import { ProductCard } from "./ProductCard";

interface Category {
  title: string;
  description: string;
  image: string;
  items: Product[];
}

interface CategorySectionProps {
  category: Category;
  viewMode: ViewMode;
  onAddToCart: (product: Product, quantity: number) => void;
  onViewDetails: (product: Product) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  viewMode,
  onAddToCart,
  onViewDetails,
}) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-4"
        }
      >
        {category.items.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onViewDetails={onViewDetails}
            viewMode={viewMode}
          />
        ))}
      </div>
    </section>
  );
};
