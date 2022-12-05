import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Context from './context/context.js'

import Navbar from './components/Navbar.jsx'
import Menu from './components/Menu.jsx'
import Footer from './components/Footer.jsx'

import Home from './view/Home.jsx'
import Detalle from './components/Detalle.jsx'
import Iniciar from './view/Iniciar.jsx'
import Registrarse from './view/Registrarse.jsx'
import AgregarProducto from './view/AgregarProducto.jsx'
import Cart from './view/Cart.jsx'
import Admin from './view/Admin.jsx'
import Productos from './view/Productos.jsx'




function App() {
  const [menu, setMenu] = useState([])
 
  useEffect(() => {
    fetch('/carta.json')
      .then((res) => res.json())
      .then((json) => setMenu(json))
      .catch((error) => console.log(error))
  }, [])


  const globalState = { menu }

  return (
    <div className="App">

      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/productos/:id" element={<Productos />}></Route>
            <Route path='/Iniciar' element={<Iniciar />}></Route>
            <Route path='/Registrarse' element={<Registrarse />}></Route>
            <Route path='/AgregarProducto' element={<AgregarProducto />}></Route>
            <Route path='/Menu' element={<Menu />}></Route>
            <Route path='/Detalle' element={<Detalle />}></Route>
            <Route path='/Cart' element={<Cart />}></Route>
            <Route path='/Admin' element={<Admin />}></Route>

          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </Context.Provider>

    </div>
  )
}

export default App
