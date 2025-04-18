import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "干貝2L",
    price: 2400,
    image: "https://images.unsplash.com/photo-1565680018093-ebb6b0db4a3f?w=800",
    description: "生食級干貝2L，肉質鮮甜飽滿，適合生食或料理使用。",
    category: "seafood",
    stock: 30,
    origin: "日本",
    weight: "1公斤/盒",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "2",
    name: "干貝S",
    price: 1750,
    image: "https://images.unsplash.com/photo-1565680018074-d843d0b40b36?w=800",
    description: "生食級干貝S，口感Q彈，鮮甜適中，多種烹調方式皆適合。",
    category: "seafood",
    stock: 35,
    origin: "日本",
    weight: "1公斤/盒",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "3",
    name: "干貝3S",
    price: 1500,
    image: "https://images.unsplash.com/photo-1565680018070-a1f777270217?w=800",
    description: "生食級干貝3S，尺寸小巧但味道濃郁，適合多種料理方式。",
    category: "seafood",
    stock: 40,
    origin: "日本",
    weight: "1公斤/盒",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "4",
    name: "天使紅蝦L",
    price: 1000,
    image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=800",
    description: "阿根廷天使紅蝦L，肉質飽滿，鮮甜多汁，適合各種烹調方式。",
    category: "seafood",
    stock: 25,
    origin: "阿根廷",
    weight: "2公斤/盒",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "5",
    name: "鮭魚卵",
    price: 1000,
    image: "https://images.unsplash.com/photo-1583457314498-51200a03c11d?w=800",
    description: "新鮮鮭魚卵，顆粒飽滿，入口即化，適合壽司及各種料理點綴。",
    category: "seafood",
    stock: 20,
    origin: "挪威",
    weight: "500公克/盒",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "6",
    name: "阿根廷開背赤蝦",
    price: 340,
    image: "https://images.unsplash.com/photo-1625943521375-115acc707bf2?w=800",
    description: "阿根廷開背赤蝦，已去除蝦腸，方便烹調，肉質鮮美。",
    category: "seafood",
    stock: 45,
    origin: "阿根廷",
    weight: "200公克/盒",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "7",
    name: "JSF馬來西亞冷凍白蝦",
    price: 320,
    image: "https://images.unsplash.com/photo-1565980944538-eff398980d9d?w=800",
    description: "馬來西亞優質白蝦，肉質緊實，鮮甜爽口，適合各種烹調方式。",
    category: "frozen-seafood",
    stock: 50,
    origin: "馬來西亞",
    weight: "650公克/盒",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "8",
    name: "峇里島冷凍透抽 200-250公克",
    price: 135,
    image: "https://images.unsplash.com/photo-1612113429952-efbb1eafe4ca?w=800",
    description: "峇里島特選透抽，肉質鮮嫩Q彈，適合各種烹調方式。",
    category: "frozen-seafood",
    stock: 40,
    origin: "印尼峇里島",
    weight: "200-250公克/隻",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "9",
    name: "峇里島冷凍透抽 250-300公克",
    price: 165,
    image: "https://images.unsplash.com/photo-1612113429468-0fc77e41be0d?w=800",
    description: "峇里島中型透抽，鮮度極佳，肉質結實有彈性，適合多種料理方式。",
    category: "frozen-seafood",
    stock: 35,
    origin: "印尼峇里島",
    weight: "250-300公克/隻",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "10",
    name: "峇里島冷凍透抽 300-350公克",
    price: 200,
    image: "https://images.unsplash.com/photo-1612113429892-22c0f2a31481?w=800",
    description:
      "峇里島大型透抽，肉質飽滿厚實，鮮甜可口，適合烤、煮、炒等多種料理。",
    category: "frozen-seafood",
    stock: 30,
    origin: "印尼峇里島",
    weight: "300-350公克/隻",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "11",
    name: "天然海老草蝦(大)",
    price: 425,
    image: "https://images.unsplash.com/photo-1559737571-759038310c6c?w=800",
    description: "天然海老大型草蝦，肉質結實鮮甜，適合各種烹調方式。",
    category: "frozen-seafood",
    stock: 25,
    origin: "東南亞",
    weight: "430公克/5尾",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "12",
    name: "天然海老草蝦(小)",
    price: 250,
    image: "https://images.unsplash.com/photo-1559737541-1e71bcd39d6d?w=800",
    description: "天然海老小型草蝦，鮮甜可口，適合快炒或做沙拉使用。",
    category: "frozen-seafood",
    stock: 35,
    origin: "東南亞",
    weight: "380公克/12尾",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "13",
    name: "貝里斯龍蝦尾 4盎司",
    price: 260,
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=800",
    description: "貝里斯龍蝦尾，肉質結實，鮮甜多汁，適合烤、煮等多種料理方式。",
    category: "frozen-seafood",
    stock: 20,
    origin: "貝里斯",
    weight: "4盎司/尾",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "14",
    name: "貝里斯龍蝦尾 5盎司",
    price: 340,
    image: "https://images.unsplash.com/photo-1550317138-650a70f9a67f?w=800",
    description: "貝里斯大型龍蝦尾，肉質飽滿結實，口感絕佳，適合多種高級料理。",
    category: "frozen-seafood",
    stock: 15,
    origin: "貝里斯",
    weight: "5盎司/尾",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "15",
    name: "熟凍岩見鮑魚",
    price: 335,
    image: "https://images.unsplash.com/photo-1560717845-968823efbee1?w=800",
    description: "熟凍岩見鮑魚，肉質鮮嫩，入口即化，適合冷盤或熱炒。",
    category: "frozen-seafood",
    stock: 25,
    origin: "日本",
    weight: "550公克/18顆",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "16",
    name: "日本明太子",
    price: 130,
    image: "https://images.unsplash.com/photo-1583458069613-69216dc7bc5a?w=800",
    description: "日本進口明太子，鹹香適中，風味獨特，適合拌飯或做成義大利麵。",
    category: "frozen-seafood",
    stock: 30,
    origin: "日本",
    weight: "80公克/盒",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "17",
    name: "輪切鮭魚",
    price: 165,
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800",
    description:
      "挪威進口鮭魚，肉質鮮嫩，富含Omega-3脂肪酸，適合煎、烤、清蒸等多種料理。",
    category: "frozen-fish",
    stock: 40,
    origin: "挪威",
    weight: "300-350公克/片",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "18",
    name: "格陵蘭鱈魚(有肚洞)",
    price: 160,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800",
    description: "格陵蘭鱈魚，肉質鮮嫩，營養豐富，適合煮湯或清蒸。",
    category: "frozen-fish",
    stock: 35,
    origin: "格陵蘭",
    weight: "300-350公克/片",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "19",
    name: "格陵蘭鱈魚(無肚洞)",
    price: 180,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800",
    description: "格陵蘭鱈魚，無肚洞處理，肉質完整，適合各種烹調方式。",
    category: "frozen-fish",
    stock: 30,
    origin: "格陵蘭",
    weight: "300-350公克/片",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "20",
    name: "薄鹽挪威鯖魚 110-125公克",
    price: 55,
    image: "https://images.unsplash.com/photo-1601314167099-232775b3d6fd?w=800",
    description: "挪威進口薄鹽鯖魚，鹹香適中，肉質鮮嫩，適合煎烤料理。",
    category: "frozen-fish",
    stock: 50,
    origin: "挪威",
    weight: "110-125公克/片",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "21",
    name: "薄鹽挪威鯖魚 140-180公克",
    price: 65,
    image: "https://images.unsplash.com/photo-1601314167144-25287a76235d?w=800",
    description: "挪威進口中型薄鹽鯖魚，肉質豐厚，風味絕佳，適合多種料理方式。",
    category: "frozen-fish",
    stock: 45,
    origin: "挪威",
    weight: "140-180公克/片",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "22",
    name: "印度白鯧魚 250±30公克",
    price: 180,
    image: "https://images.unsplash.com/photo-1578158335529-e7f9dd2cf1c3?w=800",
    description: "印度進口白鯧魚，肉質細嫩，刺少肉多，適合清蒸或紅燒。",
    category: "frozen-fish",
    stock: 35,
    origin: "印度",
    weight: "250±30公克/尾",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "23",
    name: "印度白鯧魚 450±30公克",
    price: 320,
    image: "https://images.unsplash.com/photo-1578158335591-fad6510b714e?w=800",
    description: "印度進口大型白鯧魚，肉質鮮美，適合各種傳統烹調方式。",
    category: "frozen-fish",
    stock: 25,
    origin: "印度",
    weight: "450±30公克/尾",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "24",
    name: "輪切土魠魚整尾 7公斤",
    price: 600,
    image: "https://images.unsplash.com/photo-1572102108999-e2df00a36329?w=800",
    description:
      "台灣優質土魠魚，肉質結實，適合煎、烤或做成魚湯。每台斤600元。",
    category: "frozen-fish",
    stock: 15,
    origin: "台灣",
    weight: "7公斤/尾",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "25",
    name: "輪切土魠魚整尾 8公斤",
    price: 670,
    image: "https://images.unsplash.com/photo-1572102109222-d73a3b6196cb?w=800",
    description: "台灣優質土魠魚，肉質鮮美，適合多種料理方式。每台斤670元。",
    category: "frozen-fish",
    stock: 10,
    origin: "台灣",
    weight: "8公斤/尾",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "26",
    name: "輪切土魠魚整尾 9公斤",
    price: 770,
    image: "https://images.unsplash.com/photo-1572102109444-c4b7b4c10ba7?w=800",
    description:
      "台灣特大型土魠魚，肉質厚實，風味絕佳，適合多種傳統料理。每台斤770元。",
    category: "frozen-fish",
    stock: 8,
    origin: "台灣",
    weight: "9公斤/尾",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "27",
    name: "台灣熟凍吻仔魚",
    price: 170,
    image: "https://images.unsplash.com/photo-1574179525934-a59e4d1c5a3c?w=800",
    description: "台灣本地吻仔魚，熟凍處理，保留鮮美風味，適合各種料理使用。",
    category: "frozen-fish",
    stock: 40,
    origin: "台灣",
    weight: "200公克/盒",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "28",
    name: "無刺虱目魚肚(大)",
    price: 160,
    image: "https://images.unsplash.com/photo-1595456982104-14cc660c4d22?w=800",
    description:
      "台灣虱目魚肚，已去刺處理，肉質鮮美，富含膠質，適合清蒸或煎煮。",
    category: "milkfish",
    stock: 30,
    origin: "台灣",
    weight: "250-300公克/片",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "29",
    name: "無刺虱目魚肚(小)",
    price: 120,
    image: "https://images.unsplash.com/photo-1595456982028-8e7fb2ced12a?w=800",
    description:
      "台灣虱目魚肚，小型規格，已去刺處理，肉質細嫩，適合多種料理方式。",
    category: "milkfish",
    stock: 35,
    origin: "台灣",
    weight: "180-200公克/片",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "30",
    name: "虱目魚皮",
    price: 70,
    image: "https://images.unsplash.com/photo-1595456981857-8ebf373e33c5?w=800",
    description: "台灣虱目魚皮，富含膠質，口感Q彈，適合涼拌或煮湯。",
    category: "milkfish",
    stock: 40,
    origin: "台灣",
    weight: "300公克",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "31",
    name: "虱目魚柳",
    price: 75,
    image: "https://images.unsplash.com/photo-1595456981942-5513a2c52001?w=800",
    description: "台灣虱目魚柳，已去刺處理，肉質細嫩，適合煎、烤或清蒸。",
    category: "milkfish",
    stock: 45,
    origin: "台灣",
    weight: "300公克",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "32",
    name: "鮮嫩虱目魚嶺",
    price: 75,
    image: "https://images.unsplash.com/photo-1595456982075-c51f2ee32512?w=800",
    description: "台灣虱目魚嶺，肉質鮮嫩，風味獨特，適合煮湯或紅燒。",
    category: "milkfish",
    stock: 35,
    origin: "台灣",
    weight: "600公克",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "33",
    name: "虱目魚丸半斤",
    price: 55,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
    description:
      "台灣傳統虱目魚丸，採用新鮮虱目魚肉製作，Q彈爽口，適合煮湯或火鍋。",
    category: "fishball",
    stock: 50,
    origin: "台灣",
    weight: "半斤",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "34",
    name: "虱目魚丸一斤",
    price: 100,
    image: "https://images.unsplash.com/photo-1603133872976-aa15e4b922da?w=800",
    description:
      "台灣傳統虱目魚丸，採用新鮮虱目魚肉製作，Q彈爽口，適合煮湯或火鍋。",
    category: "fishball",
    stock: 45,
    origin: "台灣",
    weight: "1斤",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "35",
    name: "花枝丸半斤",
    price: 120,
    image: "https://images.unsplash.com/photo-1603113006526-de85f9a436df?w=800",
    description:
      "台灣傳統花枝丸，採用新鮮花枝肉製作，Q彈有嚼勁，適合煮湯或火鍋。",
    category: "fishball",
    stock: 40,
    origin: "台灣",
    weight: "半斤",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "36",
    name: "花枝丸一斤",
    price: 230,
    image: "https://images.unsplash.com/photo-1603113006674-5e0d3a0faa4e?w=800",
    description:
      "台灣傳統花枝丸，採用新鮮花枝肉製作，Q彈有嚼勁，適合煮湯或火鍋。",
    category: "fishball",
    stock: 35,
    origin: "台灣",
    weight: "1斤",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "37",
    name: "貢丸半斤",
    price: 80,
    image: "https://images.unsplash.com/photo-1577775691898-c1a174139c5e?w=800",
    description:
      "台灣傳統貢丸，採用優質豬肉製作，口感Q彈，風味絕佳，適合煮湯或火鍋。",
    category: "fishball",
    stock: 50,
    origin: "台灣",
    weight: "半斤",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "38",
    name: "貢丸一斤",
    price: 150,
    image: "https://images.unsplash.com/photo-1577775691974-97d654847388?w=800",
    description:
      "台灣傳統貢丸，採用優質豬肉製作，口感Q彈，風味絕佳，適合煮湯或火鍋。",
    category: "fishball",
    stock: 45,
    origin: "台灣",
    weight: "1斤",
    storageMethod: "冷凍(-18°C以下)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "39",
    name: "原味虱目魚香腸半斤",
    price: 110,
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=800",
    description:
      "特製虱目魚香腸，採用新鮮虱目魚肉與優質豬肉混合製作，風味獨特。",
    category: "sausage",
    stock: 40,
    origin: "台灣",
    weight: "半斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "40",
    name: "原味虱目魚香腸一斤",
    price: 200,
    image: "https://images.unsplash.com/photo-1603048588748-85f4d92a72cb?w=800",
    description:
      "特製虱目魚香腸，採用新鮮虱目魚肉與優質豬肉混合製作，風味獨特。",
    category: "sausage",
    stock: 35,
    origin: "台灣",
    weight: "1斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "41",
    name: "黑胡椒虱目魚香腸半斤",
    price: 115,
    image: "https://images.unsplash.com/photo-1603048588803-d3e1616cf9d1?w=800",
    description: "特製黑胡椒虱目魚香腸，加入黑胡椒增添風味，口感獨特。",
    category: "sausage",
    stock: 38,
    origin: "台灣",
    weight: "半斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "42",
    name: "黑胡椒虱目魚香腸一斤",
    price: 220,
    image: "https://images.unsplash.com/photo-1603048588858-d3e1616cf982?w=800",
    description: "特製黑胡椒虱目魚香腸，加入黑胡椒增添風味，口感獨特。",
    category: "sausage",
    stock: 33,
    origin: "台灣",
    weight: "1斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "43",
    name: "原味豬肉香腸半斤",
    price: 110,
    image: "https://images.unsplash.com/photo-1587240602169-3e94acd4f4b4?w=800",
    description: "傳統台式豬肉香腸，選用優質豬肉製作，肉質紮實，風味絕佳。",
    category: "sausage",
    stock: 45,
    origin: "台灣",
    weight: "半斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "44",
    name: "原味豬肉香腸一斤",
    price: 210,
    image: "https://images.unsplash.com/photo-1587240602386-27d864a35d2a?w=800",
    description: "傳統台式豬肉香腸，選用優質豬肉製作，肉質紮實，風味絕佳。",
    category: "sausage",
    stock: 40,
    origin: "台灣",
    weight: "1斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "45",
    name: "蒜味豬肉香腸半斤",
    price: 115,
    image: "https://images.unsplash.com/photo-1587240602435-fdd92b7d6394?w=800",
    description: "特製蒜味豬肉香腸，添加新鮮大蒜，香氣四溢，風味獨特。",
    category: "sausage",
    stock: 42,
    origin: "台灣",
    weight: "半斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "46",
    name: "蒜味豬肉香腸一斤",
    price: 220,
    image: "https://images.unsplash.com/photo-1587240602529-54bda8be8152?w=800",
    description: "特製蒜味豬肉香腸，添加新鮮大蒜，香氣四溢，風味獨特。",
    category: "sausage",
    stock: 38,
    origin: "台灣",
    weight: "1斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "47",
    name: "黑胡椒豬肉香腸半斤",
    price: 115,
    image: "https://images.unsplash.com/photo-1587240602577-246b902e0db4?w=800",
    description: "特製黑胡椒豬肉香腸，添加黑胡椒增添風味，口感獨特。",
    category: "sausage",
    stock: 40,
    origin: "台灣",
    weight: "半斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "48",
    name: "黑胡椒豬肉香腸一斤",
    price: 220,
    image: "https://images.unsplash.com/photo-1587240602628-cea2a27401b1?w=800",
    description: "特製黑胡椒豬肉香腸，添加黑胡椒增添風味，口感獨特。",
    category: "sausage",
    stock: 35,
    origin: "台灣",
    weight: "1斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "49",
    name: "高粱酒豬肉香腸半斤",
    price: 120,
    image: "https://images.unsplash.com/photo-1587240602680-79b2bcba4982?w=800",
    description: "特製高粱酒豬肉香腸，添加高粱酒提升風味，香氣四溢。",
    category: "sausage",
    stock: 38,
    origin: "台灣",
    weight: "半斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "50",
    name: "高粱酒豬肉香腸一斤",
    price: 230,
    image: "https://images.unsplash.com/photo-1587240602763-aa2ca3a1bf98?w=800",
    description: "特製高粱酒豬肉香腸，添加高粱酒提升風味，香氣四溢。",
    category: "sausage",
    stock: 33,
    origin: "台灣",
    weight: "1斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "51",
    name: "紹興酒豬肉香腸半斤",
    price: 120,
    image: "https://images.unsplash.com/photo-1587240602809-a849b52ab59f?w=800",
    description: "特製紹興酒豬肉香腸，添加紹興酒提升風味，口感獨特。",
    category: "sausage",
    stock: 35,
    origin: "台灣",
    weight: "半斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "52",
    name: "紹興酒豬肉香腸一斤",
    price: 230,
    image: "https://images.unsplash.com/photo-1587240602842-0149f3387167?w=800",
    description: "特製紹興酒豬肉香腸，添加紹興酒提升風味，口感獨特。",
    category: "sausage",
    stock: 30,
    origin: "台灣",
    weight: "1斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "53",
    name: "飛魚卵香腸半斤",
    price: 175,
    image: "https://images.unsplash.com/photo-1587240602886-0ae6d3be4cc4?w=800",
    description: "特製飛魚卵香腸，添加新鮮飛魚卵，口感豐富，風味獨特。",
    category: "sausage",
    stock: 25,
    origin: "台灣",
    weight: "半斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "54",
    name: "飛魚卵香腸一斤",
    price: 340,
    image: "https://images.unsplash.com/photo-1587240602942-d57f4b6f4742?w=800",
    description: "特製飛魚卵香腸，添加新鮮飛魚卵，口感豐富，風味獨特。",
    category: "sausage",
    stock: 20,
    origin: "台灣",
    weight: "1斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "55",
    name: "花枝飛魚卵香腸半斤",
    price: 185,
    image: "https://images.unsplash.com/photo-1587240602989-cfdbd4f2bc88?w=800",
    description: "特製花枝飛魚卵香腸，添加新鮮花枝與飛魚卵，口感層次豐富。",
    category: "sausage",
    stock: 22,
    origin: "台灣",
    weight: "半斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "56",
    name: "花枝飛魚卵香腸一斤",
    price: 360,
    image: "https://images.unsplash.com/photo-1587240603036-ba90c2ccd77c?w=800",
    description: "特製花枝飛魚卵香腸，添加新鮮花枝與飛魚卵，口感層次豐富。",
    category: "sausage",
    stock: 18,
    origin: "台灣",
    weight: "1斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "57",
    name: "黑鮪魚香腸半斤",
    price: 180,
    image: "https://images.unsplash.com/photo-1587240603080-efd025782f99?w=800",
    description: "特製黑鮪魚香腸，添加優質黑鮪魚肉，風味絕佳，口感獨特。",
    category: "sausage",
    stock: 20,
    origin: "台灣",
    weight: "半斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "58",
    name: "黑鮪魚香腸一斤",
    price: 350,
    image: "https://images.unsplash.com/photo-1587240603121-47a2a1032d6c?w=800",
    description: "特製黑鮪魚香腸，添加優質黑鮪魚肉，風味絕佳，口感獨特。",
    category: "sausage",
    stock: 15,
    origin: "台灣",
    weight: "1斤",
    storageMethod: "冷藏(0-4°C)",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "59",
    name: "豬肉鬆",
    price: 150,
    image: "https://images.unsplash.com/photo-1597233250138-9d736b09a9df?w=800",
    description:
      "傳統台式豬肉鬆，選用優質豬肉製作，口感鬆軟，風味絕佳，適合拌飯或做三明治。",
    category: "dried-goods",
    stock: 50,
    origin: "台灣",
    weight: "295公克/包",
    storageMethod: "常溫",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "60",
    name: "海苔肉鬆",
    price: 150,
    image: "https://images.unsplash.com/photo-1597233250254-5cae734d4047?w=800",
    description: "特製海苔肉鬆，添加優質海苔，風味獨特，適合拌飯或做三明治。",
    category: "dried-goods",
    stock: 45,
    origin: "台灣",
    weight: "295公克/包",
    storageMethod: "常溫",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "61",
    name: "旗魚酥",
    price: 150,
    image: "https://images.unsplash.com/photo-1597233250374-d0bbdcb9786a?w=800",
    description:
      "特製旗魚酥，選用新鮮旗魚肉製作，口感酥脆，風味獨特，適合當零嘴或配酒。",
    category: "dried-goods",
    stock: 40,
    origin: "台灣",
    weight: "240公克/包",
    storageMethod: "常溫",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "62",
    name: "黑胡椒肉乾",
    price: 150,
    image: "https://images.unsplash.com/photo-1597233251427-b1db0205e5ce?w=800",
    description:
      "特製黑胡椒肉乾，選用優質豬肉製作，添加黑胡椒增添風味，口感獨特。",
    category: "dried-goods",
    stock: 45,
    origin: "台灣",
    weight: "195公克/包",
    storageMethod: "常溫",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "63",
    name: "蒜味肉乾",
    price: 150,
    image: "https://images.unsplash.com/photo-1597233251591-a62e079e5275?w=800",
    description:
      "特製蒜味肉乾，選用優質豬肉製作，添加新鮮大蒜，香氣四溢，口感絕佳。",
    category: "dried-goods",
    stock: 42,
    origin: "台灣",
    weight: "195公克/包",
    storageMethod: "常溫",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "64",
    name: "蜜汁肉乾",
    price: 150,
    image: "https://images.unsplash.com/photo-1597233251784-9d02e5fc4e0a?w=800",
    description:
      "特製蜜汁肉乾，選用優質豬肉製作，添加蜂蜜調味，甜中帶鹹，風味獨特。",
    category: "dried-goods",
    stock: 48,
    origin: "台灣",
    weight: "255公克/包",
    storageMethod: "常溫",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "65",
    name: "豬肉絲",
    price: 150,
    image: "https://images.unsplash.com/photo-1597233251968-b76f9840bca8?w=800",
    description:
      "特製豬肉絲，選用優質豬肉製作，口感有嚼勁，風味絕佳，適合當零嘴或配酒。",
    category: "dried-goods",
    stock: 45,
    origin: "台灣",
    weight: "225公克/包",
    storageMethod: "常溫",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "66",
    name: "豬肉條",
    price: 150,
    image: "https://images.unsplash.com/photo-1597233252221-5e928169c43d?w=800",
    description:
      "特製豬肉條，選用優質豬肉製作，口感彈牙，風味絕佳，適合當零嘴或配酒。",
    category: "dried-goods",
    stock: 40,
    origin: "台灣",
    weight: "235公克/包",
    storageMethod: "常溫",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "67",
    name: "香辣豬肉片",
    price: 150,
    image: "https://images.unsplash.com/photo-1597233252496-cbf290302dd0?w=800",
    description:
      "特製香辣豬肉片，選用優質豬肉製作，添加辣椒增添風味，辣中帶香，口感獨特。",
    category: "dried-goods",
    stock: 38,
    origin: "台灣",
    weight: "235公克/包",
    storageMethod: "常溫",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "68",
    name: "鮪魚糖",
    price: 150,
    image: "https://images.unsplash.com/photo-1597233252715-e92cfc76f8bc?w=800",
    description:
      "特製鮪魚糖，選用新鮮鮪魚肉製作，口感獨特，甜中帶鹹，風味絕佳。",
    category: "dried-goods",
    stock: 35,
    origin: "台灣",
    weight: "235公克/包",
    storageMethod: "常溫",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "69",
    name: "魷魚絲",
    price: 150,
    image: "https://images.unsplash.com/photo-1597233252880-3f078f3ef2dc?w=800",
    description:
      "特製魷魚絲，選用新鮮魷魚製作，口感有嚼勁，風味獨特，適合當零嘴或配酒。",
    category: "dried-goods",
    stock: 42,
    origin: "台灣",
    weight: "175公克/包",
    storageMethod: "常溫",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "70",
    name: "魷魚片",
    price: 150,
    image: "https://images.unsplash.com/photo-1597233253108-4a33c8eae0ac?w=800",
    description:
      "特製魷魚片，選用新鮮魷魚製作，口感Q彈，風味獨特，適合當零嘴或配酒。",
    category: "dried-goods",
    stock: 40,
    origin: "台灣",
    weight: "185公克/包",
    storageMethod: "常溫",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "71",
    name: "小卷片",
    price: 150,
    image: "https://images.unsplash.com/photo-1597233253279-fee9927d7477?w=800",
    description:
      "特製小卷片，選用新鮮小卷製作，口感Q彈，風味獨特，適合當零嘴或配酒。",
    category: "dried-goods",
    stock: 38,
    origin: "台灣",
    weight: "115公克/包",
    storageMethod: "常溫",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "72",
    name: "虱目魚條子肉乾",
    price: 50,
    image: "https://images.unsplash.com/photo-1597233253371-26aa15d3b953?w=800",
    description:
      "特製虱目魚條子肉乾，選用新鮮虱目魚肉製作，口感獨特，風味絕佳，適合當零嘴。",
    category: "dried-goods",
    stock: 45,
    origin: "台灣",
    weight: "70公克/包",
    storageMethod: "常溫",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "73",
    name: "飛魚卵條子肉乾",
    price: 50,
    image: "https://images.unsplash.com/photo-1597233253498-7cebbe61d0a5?w=800",
    description:
      "特製飛魚卵條子肉乾，添加新鮮飛魚卵，口感獨特，風味絕佳，適合當零嘴。",
    category: "dried-goods",
    stock: 42,
    origin: "台灣",
    weight: "70公克/包",
    storageMethod: "常溫",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "74",
    name: "蜜汁豬條子肉乾",
    price: 50,
    image: "https://images.unsplash.com/photo-1597233253602-3a459e3b545e?w=800",
    description:
      "特製蜜汁豬條子肉乾，添加蜂蜜調味，甜中帶鹹，風味獨特，適合當零嘴。",
    category: "dried-goods",
    stock: 48,
    origin: "台灣",
    weight: "70公克/包",
    storageMethod: "常溫",
    isOutOfStock: false,
    isLimited: false,
  },
  {
    id: "75",
    name: "五寶豬條子肉乾",
    price: 50,
    image: "https://images.unsplash.com/photo-1597233253702-fbb897b73947?w=800",
    description: "特製五寶豬條子肉乾，添加五種特選香料，風味獨特，適合當零嘴。",
    category: "dried-goods",
    stock: 45,
    origin: "台灣",
    weight: "70公克/包",
    storageMethod: "常溫",
    isOutOfStock: false,
    isLimited: false,
  },
];
