import { useState } from "react";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [totalAmt, setTotalAmt] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { id: 1, name: "Laptop", price: 56000, image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/j/q/y/-original-imahk44qgcfybyjf.jpeg?q=70" },
    { id: 2, name: "Mobile", price: 30000, image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/v/m/-original-imahft6chnx2vbuy.jpeg?q=70" },
    { id: 3, name: "Charger", price: 1000, image: "https://rukminim2.flixcart.com/image/612/612/xif0q/battery-charger/e/j/d/80w-dart-vooc-dash-supervooc-wrap-dash-fast-type-c-data-cable-original-imahhvtyepmztx5f.jpeg?q=70" }
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotalAmt(totalAmt + product.price);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setTotalAmt(totalAmt - cart[index].price);
    setCart(updatedCart);
  };

  return (
    <div className="container">
      <Header cartCount={cart.length} />

      <input
        type="text"
        placeholder="Search product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <ProductList
        products={filteredProducts}
        addToCart={addToCart}
      />

      <Cart
        cart={cart}
        totalAmt={totalAmt}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}