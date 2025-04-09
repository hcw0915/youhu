import React, { useState } from "react";
import { ShoppingBag, LayoutGrid, List } from "lucide-react";
import { products } from "./data/products";
import { ProductCard } from "./components/ProductCard";
import { ProductDetails } from "./components/ProductDetails";
import { Cart } from "./components/Cart";
import { CheckoutForm } from "./components/CheckoutForm";
import { CartItem, OrderDetails, Product, ViewMode } from "./types";

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
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            訂單已送出！
          </h2>
          <p className="text-gray-600 mb-6">
            感謝您的訂購，我們將盡快處理您的訂單。
          </p>
          <button
            onClick={() => {
              setOrderComplete(false);
              setIsCheckout(false);
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            繼續購物
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">美食嚴選</h1>
          <div className="flex items-center gap-4">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${
                  viewMode === "grid" ? "bg-white shadow" : "hover:bg-white/50"
                }`}
              >
                <LayoutGrid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${
                  viewMode === "list" ? "bg-white shadow" : "hover:bg-white/50"
                }`}
              >
                <List size={20} />
              </button>
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ShoppingBag size={24} />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

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
                <section key={key}>
                  <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                  <div
                    className={
                      viewMode === "grid"
                        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        : "space-y-4"
                    }
                  >
                    {category.items.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={addToCart}
                        onViewDetails={setSelectedProduct}
                        viewMode={viewMode}
                      />
                    ))}
                  </div>
                </section>
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
