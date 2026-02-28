import { useCartStore } from '../store/useCartStore'

function CartPage() {
  const cart = useCartStore((state) => state.cart)
  const clearCart = useCartStore((state) => state.clearCart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  const totalItems = cart.length
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)

  return (
    <section className="page-shell">
      <div className="page-copy">
        <p className="eyebrow">Cart route</p>
        <h2>Your shopping cart</h2>
        <p>
          This page reads the same global state as the product cards, so changes from one route are
          visible in the other route immediately.
        </p>
      </div>

      {cart.length === 0 ? (
        <section className="empty-state">
          <h3>Your cart is empty</h3>
          <p>Add products from the shop page to see Zustand update this route.</p>
        </section>
      ) : (
        <section className="cart-panel">
          <div className="cart-list">
            {cart.map((item) => (
              <article key={item.id} className="cart-item">
                <div>
                  <p className="product-category">{item.category}</p>
                  <h3>{item.name}</h3>
                  <p className="cart-item-text">${item.price.toFixed(2)}</p>
                </div>

                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove from cart
                </button>
              </article>
            ))}
          </div>

          <aside className="summary-card">
            <h3>Order summary</h3>
            <p>Total items: {totalItems}</p>
            <p>Total price: ${totalPrice.toFixed(2)}</p>
            <button type="button" className="primary-button" onClick={clearCart}>
              Clear cart
            </button>
          </aside>
        </section>
      )}
    </section>
  )
}

export default CartPage
