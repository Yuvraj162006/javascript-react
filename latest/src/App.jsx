import { useState } from 'react'
import Header from './newComponenets/Header'
import ProductList from './newComponenets/ProductList'

export default function App(){

  const [cart,setCart] = useState([])

  function addToCart(product){
    setCart([...cart, product])
  }

  const products = [
    {
      id: 1,
      name: "laptop",
      price: 100000,
      image: "https://actual-image-link.jpg"
    },
    {
      id: 2,
      name: "mobile",
      price: 50000,
      image: "https://actual-image-link.jpg"
    },
    {
      id: 3,
      name: "watch",
      price: 20000,
      image: "https://actual-image-link.jpg"
    }
  ]

  return(
    <div>
      <Header cartCount={cart.length}/>
      <ProductList products={products} addToCart={addToCart}/>
    </div>
  )
}