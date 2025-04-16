import { Product } from "@/types";
import { ProductCard } from "@/components/ui/ProductCard";

type ScrollableProductContainerProps = {
  title: string;
  products: Product[];
  onAddToCart: (product: Product, quantity: number) => void;
  onViewDetails: (product: Product) => void;
};

export const ScrollableProductContainer: React.FC<
  ScrollableProductContainerProps
> = (props) => {
  const { title, products, onAddToCart, onViewDetails } = props;

  // 如果商品數量大於 8，分成兩行
  const shouldUseTwoRows = products.length > 8;
  const firstRowProducts = shouldUseTwoRows
    ? products.slice(0, Math.ceil(products.length / 2))
    : products;
  const secondRowProducts = shouldUseTwoRows
    ? products.slice(Math.ceil(products.length / 2))
    : [];

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {/* 第一行商品 */}
      <div className="relative">
        <div className="scroll-container hide-scrollbar pb-4">
          <div className="flex space-x-4 min-w-max">
            {firstRowProducts.map((product) => (
              <div key={product.id} className="w-48 sm:w-64 flex-shrink-0">
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                  onViewDetails={onViewDetails}
                  viewMode="grid"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 第二行商品（如果需要） */}
      {shouldUseTwoRows && (
        <div className="relative">
          <div className="scroll-container hide-scrollbar pb-4">
            <div className="flex space-x-4 min-w-max">
              {secondRowProducts.map((product) => (
                <div key={product.id} className="w-48 sm:w-64 flex-shrink-0">
                  <ProductCard
                    product={product}
                    onAddToCart={onAddToCart}
                    onViewDetails={onViewDetails}
                    viewMode="grid"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
