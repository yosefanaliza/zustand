import products from '../data/products.json'
import ProductCard from '../components/ProductCard'

function ShopPage() {
  return (
    <section className="page-shell">
      <div className="page-copy">
        <p className="eyebrow">Exercise idea</p>
        <h2>Use global state to keep the cart in sync everywhere</h2>
        <p>
          The products come from a JSON file, and both the shop page and the cart page read the
          same Zustand store.
        </p>
      </div>

      <section className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </section>
  )
}

export default ShopPage
