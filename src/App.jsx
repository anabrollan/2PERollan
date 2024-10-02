import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {


  return (
    <div>
      <h1>Holi</h1>
      <NavBar />
      <ItemListContainer inicio={"Inicio"}/>
      <ItemListContainer sobreMi={"Sobre mí"}/>
    </div>
  )
}

export default App