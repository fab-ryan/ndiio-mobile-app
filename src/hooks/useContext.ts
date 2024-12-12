import { createContext } from "react";

export const AppContext = createContext({
  theme: "light",
  setTheme: (theme: string) => {},
  cart: [],
  addToCart: (item: any) => {},
  removeFromCart: (item: any) => {},
  clearCart: () => {},
  user: null,
});
