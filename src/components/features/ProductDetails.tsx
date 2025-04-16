import { Product } from "@/types";
import { X, ShoppingCart, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { ProductImage } from "@/components/ui/ProductImage";
import { useImageValidation } from "@/hooks/useImageValidation";

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function ProductDetails({
  product,
  onClose,
  onAddToCart,
}: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const validImageUrl = useImageValidation(product.image);

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ProductImage
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-bold">
                    NT$ {product.price}
                  </span>
                  {product.isLimited && (
                    <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                      限量商品
                    </span>
                  )}
                  {product.isOutOfStock && (
                    <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">
                      缺貨中
                    </span>
                  )}
                </div>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="font-semibold w-20">產地:</span>
                  <span>{product.origin}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold w-20">規格:</span>
                  <span>{product.weight}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold w-20">保存方式:</span>
                  <span>{product.storageMethod}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold w-20">庫存:</span>
                  <span>
                    {product.isOutOfStock ? "缺貨中" : `${product.stock} 件`}
                  </span>
                </div>
              </div>

              {!product.isOutOfStock && (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="font-semibold">數量:</span>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        className="p-2 hover:bg-gray-200 rounded"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-12 text-center">{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(1)}
                        className="p-2 hover:bg-gray-200 rounded"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onAddToCart(product, quantity);
                      onClose();
                    }}
                    disabled={product.isOutOfStock}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                  >
                    <ShoppingCart size={20} />
                    加入購物車
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
