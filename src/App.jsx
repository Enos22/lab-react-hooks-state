import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import styles from './App.module.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [categoryFilter, setCategoryFilter] = useState('all')

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product])
  }

  return (
    <div className={`${styles.app} ${darkMode ? styles.appDark : styles.appLight}`}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <label>Filter by Category: </label>
      <select
        className={styles.select}
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList selectedCategory={categoryFilter} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
