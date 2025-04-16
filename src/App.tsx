import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { ProductDetails } from "@/components/features/ProductDetails";
import { Cart } from "@/components/features/Cart";
import { CartItem, Product, ViewMode } from "@/types";
import { Header } from "@/components/layout/Header";
import { OrderComplete } from "@/components/features/OrderComplete";
import { Banner } from "@/components/ui/Banner";
import { Footer } from "@/components/layout/Footer";
import { STORAGE_KEYS } from "@/constants/storage";
import { ScrollButtons } from "@/components/ui/ScrollButtons";
import { ProductList } from "@/components/ui/ProductList";
import { CheckoutPage } from "@/components/features/CheckoutPage";
import { CheckoutDetails } from "@/components/features/CheckoutForm";
import { useCartStore } from "@/stores/cartStore";

export const App: React.FC = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderDetails, setOrderDetails] =
    React.useState<CheckoutDetails | null>(null);
  const [orderItems, setOrderItems] = useState<CartItem[]>([]);
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCheckout, setIsCheckout] = React.useState(false);

  const { setItems: setCartStoreItems } = useCartStore();

  // 初始化時從 localStorage 讀取購物車數據
  React.useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
      setCartStoreItems(parsedCart);
    }
  }, []);

  // 當購物車數據變化時，同步到 localStorage 和 cartStore
  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setCartStoreItems(cartItems);
  }, [cartItems]);

  const onAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const onUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== productId));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const onRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const onCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout", { replace: true });
  };

  const onContinueShopping = () => {
    setOrderComplete(false);
    navigate("/", { replace: true });
  };

  const onCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const onCartClose = () => {
    setIsCartOpen(false);
  };

  const onProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const onProductClose = () => {
    setSelectedProduct(null);
  };

  const onOrderComplete = (details: CheckoutDetails) => {
    setOrderDetails(details);
    setOrderItems(cartItems);
    setOrderComplete(true);
    setCartItems([]);
    localStorage.removeItem(STORAGE_KEYS.CART_ITEMS);
    navigate("/checkoutComplete", { replace: true });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        onCartToggle={onCartToggle}
        isCartOpen={isCartOpen}
      />

      <main
        className={`flex-grow transition-all duration-300 ${
          isCartOpen ? "md:mr-96" : ""
        }`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="w-full">
                  <Banner />
                </div>
                <div className="container mx-auto px-4 py-8">
                  <ProductList
                    viewMode={viewMode}
                    onAddToCart={onAddToCart}
                    onViewDetails={onProductSelect}
                  />
                </div>
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <CheckoutPage
                items={cartItems}
                onContinueShopping={onContinueShopping}
                onOrderComplete={onOrderComplete}
              />
            }
          />
          <Route
            path="/checkoutComplete"
            element={
              orderDetails ? (
                <OrderComplete
                  onContinueShopping={onContinueShopping}
                  orderDetails={orderDetails}
                  items={orderItems}
                  isCartOpen={isCartOpen}
                  viewMode={viewMode}
                  setViewMode={setViewMode}
                  onCartToggle={onCartToggle}
                />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </main>

      <Cart
        items={cartItems}
        onUpdateQuantity={onUpdateQuantity}
        onRemoveItem={onRemoveFromCart}
        onCheckout={onCheckout}
        onClose={onCartClose}
        isOpen={isCartOpen}
      />

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={onProductClose}
          onAddToCart={onAddToCart}
        />
      )}

      <Footer isCartOpen={isCartOpen} />

      <div className="fixed bottom-4 right-4 transition-all duration-300">
        <ScrollButtons
          containerRef={{ current: null }}
          showScrollToTop={true}
          isCartOpen={isCartOpen}
        />
      </div>
    </div>
  );
};

export default App;
