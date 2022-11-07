import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import NavBar from "./Components/NavBar/NavBar"

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>

      <Routes>
       <Route path='/' element={ <ItemListContainer/>} />
       <Route path='/category/:categoryid' element={ <ItemListContainer/>} />
       <Route path='/detalle/:id' element={ <ItemDetailContainer/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
