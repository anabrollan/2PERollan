import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout.jsx'
import { ToastContainer } from 'react-toastify';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <div className='container-app'>
      <BrowserRouter>
      <CartProvider>
      <NavBar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={ <ItemListContainer saludo="¡Bienvenidos!" /> } />
        <Route path="/category/:idCategory" element={ <ItemListContainer saludo="Categorías" /> } />
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={ <div>Página no encontrada</div>} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App