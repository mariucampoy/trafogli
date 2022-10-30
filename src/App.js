import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import NavBar from "./Components/NavBar/NavBar"

function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
