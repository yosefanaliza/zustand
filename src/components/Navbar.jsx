import { NavLink } from 'react-router'
import { useCartStore } from '../store/useCartStore'

function Navbar() {
  const cart = useCartStore((state) => state.cart)
  const itemsInCart = cart.length

  return (
    <header className="navbar">
      <div>
        <p className="eyebrow">Zustand demo</p>
        <h1 className="brand">Starter Store</h1>
      </div>

      <nav className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => `nav-link cart-link ${isActive ? 'nav-link-active' : ''}`}
        >
          Cart
          <span className="cart-count">{itemsInCart}</span>
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
