import { CategorySection } from "@/components/section/CategorySection";
import { Product, ViewMode } from "@/types";
import { categories } from "@/constants/categories";

type ProductListProps = {
  viewMode: ViewMode;
  onAddToCart: (product: Product, quantity: number) => void;
  onViewDetails: (product: Product) => void;
};

export const ProductList = ({
  viewMode,
  onAddToCart,
  onViewDetails,
}: ProductListProps) => {
  return (
    <div className="space-y-8">
      {Object.entries(categories).map(([key, category]) => (
        <CategorySection
          key={key}
          category={category}
          viewMode={viewMode}
          onAddToCart={onAddToCart}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};
