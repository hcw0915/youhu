import { ShoppingCart, Minus, Plus, Eye } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onViewDetails: (product: Product) => void;
  viewMode: 'grid' | 'list';
}

export function ProductCard({ product, onAddToCart, onViewDetails, viewMode }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-24 h-24 object-cover rounded"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            {product.isLimited && (
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">限量</span>
            )}
            {product.isOutOfStock && (
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">缺貨中</span>
            )}
          </div>
          <p className="text-gray-600 text-sm">{product.description}</p>
          <p className="text-xl font-bold mt-1">NT$ {product.price}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          {!product.isOutOfStock && (
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="p-1 hover:text-blue-600"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="p-1 hover:text-blue-600"
              >
                <Plus size={16} />
              </button>
            </div>
          )}
          <div className="flex gap-2">
            <button
              onClick={() => onViewDetails(product)}
              className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-gray-200 transition-colors"
            >
              <Eye size={18} />
            </button>
            <button
              onClick={() => onAddToCart(product, quantity)}
              disabled={product.isOutOfStock}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors disabled:bg-gray-400"
            >
              <ShoppingCart size={18} />
              加入購物車
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {(product.isLimited || product.isOutOfStock) && (
          <div className="absolute top-2 right-2 flex flex-col gap-1">
            {product.isLimited && (
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">限量</span>
            )}
            {product.isOutOfStock && (
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">缺貨中</span>
            )}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-1 text-sm">{product.description}</p>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">NT$ {product.price}</span>
            {!product.isOutOfStock && (
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="p-1 hover:text-blue-600"
                >
                  <Minus size={16} />
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="p-1 hover:text-blue-600"
                >
                  <Plus size={16} />
                </button>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onViewDetails(product)}
              className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
            >
              <Eye size={20} />
              商品詳情
            </button>
            <button
              onClick={() => onAddToCart(product, quantity)}
              disabled={product.isOutOfStock}
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:bg-gray-400"
            >
              <ShoppingCart size={20} />
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}