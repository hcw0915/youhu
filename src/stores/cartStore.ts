import { create } from "zustand";

type CartItem = {
  id: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (itemId: string, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  getItemCount: () => number;
  setItems: (items: CartItem[]) => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (itemId: string, quantity: number = 1) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === itemId);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === itemId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      return { items: [...state.items, { id: itemId, quantity }] };
    });
  },

  removeItem: (itemId: string) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    }));
  },

  updateQuantity: (itemId: string, quantity: number) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      ),
    }));
  },

  getItemCount: () => {
    const state = get();
    return state.items.reduce((total, item) => total + item.quantity, 0);
  },

  setItems: (items: CartItem[]) => {
    set({ items });
  },
}));
