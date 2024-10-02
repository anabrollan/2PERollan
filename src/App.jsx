import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {


  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="¡Holi! Te doy la bienvenida al sitio web de Kalandra®" />
    </div>
  )
}

export default App