import { useCartStore } from '../store/useCartStore'

function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const cart = useCartStore((state) => state.cart)
  const isInCart = cart.some((item) => item.id === product.id)

  return (
    <article className="product-card">
      <div className="product-image" aria-hidden="true">
        {product.image}
      </div>

      <div className="product-content">
        <p className="product-category">{product.category}</p>
        <h2>{product.name}</h2>
        <p className="product-description">{product.description}</p>

        <div className="product-meta">
          <span className="price">${product.price.toFixed(2)}</span>
          <span className="quantity">{isInCart ? 'In cart' : 'Not in cart'}</span>
        </div>

        <div className="card-actions">
          {isInCart ? (
            <button
              type="button"
              className="secondary-button"
              onClick={() => removeFromCart(product.id)}
            >
              Remove from cart
            </button>
          ) : (
            <button type="button" className="primary-button" onClick={() => addToCart(product)}>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProductCard
