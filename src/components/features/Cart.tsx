import React from "react";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { CartItem } from "@/types";
import { ProductImage } from "@/components/ui/ProductImage";

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
  onClose: () => void;
  isOpen: boolean;
}

export const Cart: React.FC<CartProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onClose,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed right-0 w-full md:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-50 ${isOpen ? "top-16 h-[calc(100vh-4rem)]" : "top-0 h-screen"}`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b md:hidden">
          <h2 className="text-xl font-semibold">購物車</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center text-gray-500 py-8">購物車是空的</div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg"
                >
                  <ProductImage
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-medium text-base truncate"
                      title={item.name}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-gray-600 text-sm"
                      title={`NT$ ${item.price}`}
                    >
                      NT$ {item.price}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity - 1)
                      }
                      className="p-1 hover:bg-gray-200 rounded"
                      title="減少數量"
                    >
                      <Minus size={14} />
                    </button>
                    <span
                      className="w-6 text-center text-base"
                      title={`目前數量: ${item.quantity}`}
                    >
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                      className="p-1 hover:bg-gray-200 rounded"
                      title="增加數量"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1 text-red-500 hover:bg-red-50 rounded"
                    title="移除商品"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t p-4">
          <div className="flex justify-between mb-4">
            <span className="font-medium">總計</span>
            <span className="font-bold">
              NT${" "}
              {items.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </span>
          </div>
          <button
            onClick={onCheckout}
            disabled={items.length === 0}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
          >
            結帳
          </button>
        </div>
      </div>
    </div>
  );
};
