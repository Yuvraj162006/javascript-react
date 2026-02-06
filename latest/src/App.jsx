// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header' 
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)
const y=[2024,2025,2026]
const c={name:"KIET",location:"Ghaziabad"}
  return (
    <div>
     
     <Header title="My first react app"/>
     <table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>

  <tr>
    <td>Rahul</td>
    <td>20</td>
    <td>Delhi</td>
  </tr>

  <tr>
    <td>Priya</td>
    <td>19</td>
    <td>Mumbai</td>
  </tr>

  <tr>
    <td>Aman</td>
    <td>21</td>
    <td>Noida</td>
  </tr>
</table>
      <nav>

    <a href="#">Home </a>
    <a href="#">About </a>
    <a href="#">Contact</a>
   

     <Header title="Thanks"/>

    <Footer year={y} company="KIET"/>
    </nav>
    </div>
  )
}

export default App
