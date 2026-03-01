import { Route, Routes } from 'react-router'
import './App.css'
import CartPage from './pages/CartPage'
import Navbar from './components/Navbar'
import ShopPage from './pages/ShopPage'
import { createContext, useState } from 'react'

const Context = createContext()

function App() {
  const [state, setState] = useState()
  const [cart, setCart] = useState([])
  const [todos, setTodos] = useState([])

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item])
  }

  return (
    <Context.Provider value={{ state, cart, todos }}>

      <div className="app-shell">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
      </div>

    </Context.Provider>
  )
}

export default App

function ChildComponent() {
  const { state } = useContext(Context)

  return (
    <div>
      <p>State: {state}</p>
    </div>
  )
}