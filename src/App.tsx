import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

export const App: React.FC = () => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem(STORAGE_KEYS.CART_ITEMS);
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CART_ITEMS, JSON.stringify(cartItems));
  }, [cartItems]);

  const onAddToCart = (product: Product, quantity: number) => {
    if (product.isOutOfStock) return;

    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id);
      if (existingItem) {
        const newItems = items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        return newItems;
      }
      return [...items, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const onUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((items) => {
      const newItems = items
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0);
      return newItems;
    });
  };

  const onRemoveItem = (id: string) => {
    setCartItems((items) => {
      const newItems = items.filter((item) => item.id !== id);
      return newItems;
    });
  };

  const onCheckout = () => {
    setIsCartOpen(false);
  };

  const onContinueShopping = () => {
    setOrderComplete(false);
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

  if (orderComplete) {
    return <OrderComplete onContinueShopping={onContinueShopping} />;
  }

  return (
    <BrowserRouter>
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
          </Routes>
        </main>

        <Cart
          items={cartItems}
          onUpdateQuantity={onUpdateQuantity}
          onRemoveItem={onRemoveItem}
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
    </BrowserRouter>
  );
};

export default App;
