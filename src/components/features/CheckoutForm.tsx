import React, { useState } from "react";
import { CartItem } from "@/types";
import { useImageValidation } from "@/hooks/useImageValidation";

type CheckoutFormProps = {
  items: CartItem[];
  onSubmit: (details: CheckoutDetails) => void;
  onCancel: () => void;
};

export type CheckoutDetails = {
  name: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
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

export const CheckoutForm: React.FC<CheckoutFormProps> = ({
  items,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<CheckoutDetails>({
    name: "測試用戶",
    phone: "0912345678",
    email: "test@example.com",
    address: "台北市信義區信義路五段7號",
    notes: "請在下午3點前送達",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof CheckoutDetails, string>>
  >({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof CheckoutDetails]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof CheckoutDetails, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "請輸入姓名";
    }

    if (!formData.email.trim()) {
      newErrors.email = "請輸入電子郵件";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "請輸入有效的電子郵件";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "請輸入電話";
    } else if (!/^[0-9]{8,10}$/.test(formData.phone)) {
      newErrors.phone = "請輸入有效的電話號碼";
    }

    if (!formData.address.trim()) {
      newErrors.address = "請輸入地址";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-16">
      <h2 className="text-2xl font-bold mb-6">結帳資訊</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">訂單摘要</h3>
        <div className="border rounded-md p-4">
          <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
            {items.map((item, index) => (
              <OrderItem key={item.id} item={item} index={index} />
            ))}
          </div>
          <div className="flex justify-between py-2 font-bold border-t mt-4">
            <div>
              共 {items.length} 類 {calculateTotalItems()} 件商品
            </div>
            <div>NT$ {calculateTotal()}</div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              姓名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              電子郵件 <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              電話 <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            地址 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.address ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="notes"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            備註
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            取消
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            確認訂購
          </button>
        </div>
      </form>
    </div>
  );
};
