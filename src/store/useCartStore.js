import { create } from 'zustand'

export const useCartStore = create((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const productIsInCart = state.cart.some((item) => item.id === product.id)

      if (productIsInCart) {
        return state
      }

      return {
        cart: [...state.cart, product],
      }
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  clearCart: () => set({ cart: [] }),
}))
