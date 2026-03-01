import { create } from 'zustand'

export const useCartStore = create((set) => ({
  cart: [],

  removeFromCart: (productId) => set((state) => {
    return { cart: state.cart.filter(p => p.id !== productId) }
  }),

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

  clearCart: () => set({ cart: [] }),
}))
