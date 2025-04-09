import { Trash2, X } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
  onClose: () => void;
  isOpen: boolean;
}

export function Cart({ items, onUpdateQuantity, onRemoveItem, onCheckout, onClose, isOpen }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="h-full flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">購物車</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">購物車是空的</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-gray-50 p-4 rounded-lg">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">NT$ {item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">總計:</span>
              <span className="text-xl font-bold">NT$ {total}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              前往結帳
            </button>
          </div>
        )}
      </div>
    </div>
  );
}