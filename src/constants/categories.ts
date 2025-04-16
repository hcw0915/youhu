import { Product } from "../types";
import { products } from "../data/products";

export interface Category {
  title: string;
  description: string;
  image: string;
  items: Product[];
}

export interface Categories {
  [key: string]: Category;
}

export const categories: Categories = {
  seafood: {
    title: "生食級海鮮",
    description: "精選頂級生食級海鮮，鮮度保證，適合生食或料理使用。",
    image: "https://images.unsplash.com/photo-1565680018093-ebb6b0db4a3f?w=800",
    items: products.filter((p) => p.category === "seafood"),
  },
  frozen_seafood: {
    title: "冷凍海鮮",
    description: "嚴選冷凍海鮮，保持最佳風味與營養，方便儲存與料理。",
    image: "https://images.unsplash.com/photo-1565980944538-eff398980d9d?w=800",
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
    image: "https://images.unsplash.com/photo-1595456982104-14cc660c4d22?w=800",
    items: products.filter((p) => p.category === "milkfish"),
  },
  fishball: {
    title: "魚丸/肉丸",
    description: "傳統手工製作魚丸與肉丸，Q彈爽口，適合火鍋或湯品。",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
    items: products.filter((p) => p.category === "fishball"),
  },
  sausage: {
    title: "各式香腸",
    description: "傳統與創新口味香腸，選用優質食材製作，風味獨特。",
    image: "https://images.unsplash.com/photo-1587240602169-3e94acd4f4b4?w=800",
    items: products.filter((p) => p.category === "sausage"),
  },
  dried_goods: {
    title: "乾貨零嘴",
    description: "各式肉乾、肉鬆與海鮮乾貨，風味獨特，適合零嘴或送禮。",
    image: "https://images.unsplash.com/photo-1597233250138-9d736b09a9df?w=800",
    items: products.filter((p) => p.category === "dried-goods"),
  },
};
