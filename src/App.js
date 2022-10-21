import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from "./Components/NavBar/NavBar"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greeting="mensaje"/>
      </header>
    </div>
  );
}

export default App;
