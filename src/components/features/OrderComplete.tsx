import React from "react";
import { CartItem } from "@/types";
import { CheckoutDetails } from "./CheckoutForm";
import { CheckCircle } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";

type OrderCompleteProps = {
  onContinueShopping: () => void;
  orderDetails: CheckoutDetails;
  items: CartItem[];
  isCartOpen?: boolean;
  viewMode?: "grid" | "list";
  setViewMode?: (mode: "grid" | "list") => void;
  onCartToggle?: () => void;
};

export const OrderComplete: React.FC<OrderCompleteProps> = ({
  onContinueShopping,
  orderDetails,
  items,
  isCartOpen = false,
  viewMode = "grid",
  setViewMode,
  onCartToggle,
}) => {
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-8">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <h1 className="text-3xl font-bold text-center">訂單已確認</h1>
          <p className="text-gray-600 mt-2 text-center">
            感謝您的訂購！我們已收到您的訂單，將盡快處理。
          </p>
        </div>

        <div className="border-t border-b py-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">訂單詳情</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">收件資訊</h3>
              <p>{orderDetails.name}</p>
              <p>{orderDetails.phone}</p>
              <p>{orderDetails.email}</p>
              <p>{orderDetails.address}</p>
            </div>

            {orderDetails.notes && (
              <div>
                <h3 className="font-medium text-gray-700 mb-2">備註</h3>
                <p>{orderDetails.notes}</p>
              </div>
            )}
          </div>

          <h3 className="font-medium text-gray-700 mb-2">訂購商品</h3>
          <div className="space-y-2">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <div>
                  <span className="font-medium">{item.name}</span>
                  <span className="text-gray-500 ml-2">x {item.quantity}</span>
                </div>
                <div>NT$ {item.price * item.quantity}</div>
              </div>
            ))}
            <div className="flex justify-between font-bold pt-2 border-t">
              <div>
                共 {items.length} 類 {calculateTotalItems()} 件商品
              </div>
              <div>NT$ {calculateTotal()}</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onContinueShopping}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            繼續購物
          </button>
        </div>
      </div>
    </div>
  );
};
