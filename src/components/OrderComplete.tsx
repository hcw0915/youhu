import React from "react";

interface OrderCompleteProps {
  onContinueShopping: () => void;
}

export const OrderComplete: React.FC<OrderCompleteProps> = ({
  onContinueShopping,
}) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">訂單已送出！</h2>
        <p className="text-gray-600 mb-6">
          感謝您的訂購，我們將盡快處理您的訂單。
        </p>
        <button
          onClick={onContinueShopping}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          繼續購物
        </button>
      </div>
    </div>
  );
};
