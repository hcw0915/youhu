import React, { useState } from "react";
import { products } from "./data/products";
import { ProductDetails } from "./components/ProductDetails";
import { Cart } from "./components/Cart";
import { CheckoutForm } from "./components/CheckoutForm";
import { CartItem, OrderDetails, Product, ViewMode } from "./types";
import { Header } from "./components/Header";
import { OrderComplete } from "./components/OrderComplete";
import { CategorySection } from "./components/CategorySection";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const addToCart = (product: Product, quantity: number) => {
    if (product.isOutOfStock) return;

    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id);
      if (existingItem) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...items, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((items) =>
      items
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCheckout(true);
    setIsCartOpen(false);
  };

  const handleOrderSubmit = (details: OrderDetails) => {
    console.log("Order submitted:", { items: cartItems, details });
    setOrderComplete(true);
    setCartItems([]);
  };

  const handleContinueShopping = () => {
    setOrderComplete(false);
    setIsCheckout(false);
  };

  const categories = {
    seafood: {
      title: "生食級海鮮",
      description: "精選頂級生食級海鮮，鮮度保證，適合生食或料理使用。",
      image:
        "https://images.unsplash.com/photo-1565680018093-ebb6b0db4a3f?w=800",
      items: products.filter((p) => p.category === "seafood"),
    },
    frozen_seafood: {
      title: "冷凍海鮮",
      description: "嚴選冷凍海鮮，保持最佳風味與營養，方便儲存與料理。",
      image:
        "https://images.unsplash.com/photo-1565980944538-eff398980d9d?w=800",
      items: products.filter((p) => p.category === "frozen-seafood"),
    },
    frozen_fish: {
      title: "冷凍魚類",
      description: "各式進口與本地優質冷凍魚種，肉質鮮美，適合多種料理方式。",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800",
      items: products.filter((p) => p.category === "frozen-fish"),
    },
    milkfish: {
      title: "虱目魚專區",
      description: "台灣特產虱目魚，多種部位與處理方式，適合各種烹調方法。",
      image:
        "https://images.unsplash.com/photo-1595456982104-14cc660c4d22?w=800",
      items: products.filter((p) => p.category === "milkfish"),
    },
    fishball: {
      title: "魚丸/肉丸",
      description: "傳統手工製作魚丸與肉丸，Q彈爽口，適合火鍋或湯品。",
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
      items: products.filter((p) => p.category === "fishball"),
    },
    sausage: {
      title: "各式香腸",
      description: "傳統與創新口味香腸，選用優質食材製作，風味獨特。",
      image:
        "https://images.unsplash.com/photo-1587240602169-3e94acd4f4b4?w=800",
      items: products.filter((p) => p.category === "sausage"),
    },
    dried_goods: {
      title: "乾貨零嘴",
      description: "各式肉乾、肉鬆與海鮮乾貨，風味獨特，適合零嘴或送禮。",
      image:
        "https://images.unsplash.com/photo-1597233250138-9d736b09a9df?w=800",
      items: products.filter((p) => p.category === "dried-goods"),
    },
  };

  if (orderComplete) {
    return <OrderComplete onContinueShopping={handleContinueShopping} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        cartItemsCount={cartItems.length}
        viewMode={viewMode}
        setViewMode={setViewMode}
        onCartOpen={() => setIsCartOpen(true)}
      />

      <main
        className={`transition-all duration-300 ${
          isCartOpen ? "md:mr-96" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          {isCheckout ? (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">結帳資訊</h2>
              <CheckoutForm
                onSubmit={handleOrderSubmit}
                onCancel={() => setIsCheckout(false)}
              />
            </div>
          ) : (
            <div className="space-y-8">
              {Object.entries(categories).map(([key, category]) => (
                <CategorySection
                  key={key}
                  category={category}
                  viewMode={viewMode}
                  onAddToCart={addToCart}
                  onViewDetails={setSelectedProduct}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <Cart
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
        onClose={() => setIsCartOpen(false)}
        isOpen={isCartOpen}
      />

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}
    </div>
  );
}

export default App;
