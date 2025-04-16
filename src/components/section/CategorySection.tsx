import { useRef } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { ScrollButtons } from "@/components/ui/ScrollButtons";
import { Product, ViewMode } from "@/types";
import { Category } from "@/constants/categories";

type CategorySectionProps = {
  category: Category;
  viewMode: ViewMode;
  onAddToCart: (product: Product, quantity: number) => void;
  onViewDetails: (product: Product) => void;
};

export const CategorySection = ({
  category,
  viewMode,
  onAddToCart,
  onViewDetails,
}: CategorySectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
      {viewMode === "grid" ? (
        <>
          <div
            ref={containerRef}
            className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
          >
            {category.items.map((product) => (
              <div key={product.id} className="flex-none w-64">
                <ProductCard
                  product={product}
                  viewMode={viewMode}
                  onAddToCart={onAddToCart}
                  onViewDetails={onViewDetails}
                />
              </div>
            ))}
          </div>
          <ScrollButtons containerRef={containerRef} />
        </>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {category.items.map((product) => (
            <div key={product.id}>
              <ProductCard
                product={product}
                viewMode={viewMode}
                onAddToCart={onAddToCart}
                onViewDetails={onViewDetails}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
