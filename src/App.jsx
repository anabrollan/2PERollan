import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'


function App() {


  return (
    <div className='container-app'>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer saludo="¡Bienvenidos!" /> } />
        <Route path="/category/:idCategory" element={ <ItemListContainer saludo="Categorías" /> } />
        <Route path="/detail/:idProduct" element={ <ItemDetailContainer /> } />
        <Route path="*" element={ <div>Página no encontrada</div>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App