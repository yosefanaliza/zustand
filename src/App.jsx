import { Route, Routes } from 'react-router'
import './App.css'
import CartPage from './components/CartPage'
import Navbar from './components/Navbar'
import ShopPage from './components/ShopPage'

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
