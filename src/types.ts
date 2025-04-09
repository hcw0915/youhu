export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category:
    | "meat"
    | "seafood"
    | "frozen-seafood"
    | "frozen-fish"
    | "milkfish"
    | "fishball"
    | "sausage"
    | "dried-goods";
  stock: number;
  origin: string;
  weight: string;
  storageMethod: string;
  isOutOfStock: boolean;
  isLimited: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  note?: string;
}

export type ViewMode = "grid" | "list";
