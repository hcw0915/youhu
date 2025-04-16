import React, { useState, useEffect } from "react";
import { CheckoutDetails } from "./CheckoutForm";
import { CartItem } from "@/types";
import { useImageValidation } from "@/hooks/useImageValidation";

type OrderConfirmModalProps = {
  orderDetails: CheckoutDetails;
  items: CartItem[];
  onConfirm: () => void;
  onCancel: () => void;
};

type OrderItemProps = {
  item: CartItem;
  index: number;
};

const OrderItem: React.FC<OrderItemProps> = ({ item, index }) => {
  const validImageUrl = useImageValidation(item.image);

  return (
    <div className="flex items-center space-x-4">
      <div className="w-8 text-gray-500">{index + 1}.</div>
      <div className="w-20 h-20 flex-shrink-0">
        <img
          src={validImageUrl}
          alt={item.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-grow">
        <div className="font-medium">{item.name}</div>
        <div className="text-gray-500">x {item.quantity}</div>
      </div>
      <div className="text-right">
        <div>NT$ {item.price * item.quantity}</div>
      </div>
    </div>
  );
};

export const OrderConfirmModal: React.FC<OrderConfirmModalProps> = ({
  orderDetails,
  items,
  onConfirm,
  onCancel,
}) => {
  const [countdown, setCountdown] = useState(30);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsExpired(true);
    }
  }, [countdown]);

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">確認訂單</h2>

        <div className="mb-4">
          <p className="text-gray-600">
            請確認您的訂單資訊是否正確。您有{" "}
            <span className="font-bold text-red-500">{countdown}</span>{" "}
            秒的時間可以取消訂單。
          </p>
        </div>

        <div className="border rounded-md p-4 mb-4">
          <h3 className="font-semibold mb-2">收件資訊</h3>
          <p>{orderDetails.name}</p>
          <p>{orderDetails.phone}</p>
          <p>{orderDetails.email}</p>
          <p>{orderDetails.address}</p>
          {orderDetails.notes && (
            <>
              <h3 className="font-semibold mt-4 mb-2">備註</h3>
              <p>{orderDetails.notes}</p>
            </>
          )}
        </div>

        <div className="border rounded-md p-4 mb-4">
          <h3 className="font-semibold mb-2">訂購商品</h3>
          <div className="space-y-3">
            {items.map((item, index) => (
              <OrderItem key={item.id} item={item} index={index} />
            ))}
          </div>
          <div className="flex justify-between font-bold pt-2 border-t mt-4">
            <div>
              共 {items.length} 類 {calculateTotalItems()} 件商品
            </div>
            <div>NT$ {calculateTotal()}</div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            取消訂單
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 rounded-md transition-colors ${
              isExpired
                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            disabled={isExpired}
          >
            確認訂購
          </button>
        </div>

        {isExpired && (
          <div className="mt-4 text-center text-red-500">
            訂單確認時間已過期，請重新提交訂單。
          </div>
        )}
      </div>
    </div>
  );
};
