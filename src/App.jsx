import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {


  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="¡Holi! Te doy la bienvenida a la tienda online de Kalandra®" />
    </div>
  )
}

export default App