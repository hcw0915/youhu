import React, { useState } from "react";
import { CartItem } from "@/types";
import { CheckoutForm, CheckoutDetails } from "./CheckoutForm";
import { OrderConfirmModal } from "./OrderConfirmModal";

type CheckoutPageProps = {
  items: CartItem[];
  onContinueShopping: () => void;
  onOrderComplete: (details: CheckoutDetails) => void;
};

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  items,
  onContinueShopping,
  onOrderComplete,
}) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [pendingOrderDetails, setPendingOrderDetails] =
    useState<CheckoutDetails | null>(null);

  const handleOrderSubmit = (details: CheckoutDetails) => {
    setPendingOrderDetails(details);
    setShowConfirmModal(true);
  };

  const handleConfirmOrder = () => {
    if (pendingOrderDetails) {
      onOrderComplete(pendingOrderDetails);
    }
  };

  const handleCancelOrder = () => {
    setShowConfirmModal(false);
    setPendingOrderDetails(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <CheckoutForm
          items={items}
          onSubmit={handleOrderSubmit}
          onCancel={onContinueShopping}
        />
      </div>

      {showConfirmModal && pendingOrderDetails && (
        <OrderConfirmModal
          orderDetails={pendingOrderDetails}
          items={items}
          onConfirm={handleConfirmOrder}
          onCancel={handleCancelOrder}
        />
      )}
    </div>
  );
};
