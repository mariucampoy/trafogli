import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import NavBar from "./Components/NavBar/NavBar"
import { CartContextProvider } from './Context/CartContext';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {



  return (

    <CartContextProvider>
    <BrowserRouter>

      <NavBar />

      <Routes>
       <Route path='/' element={ <ItemListContainer/>} />
       <Route path='/category/:categoryid' element={ <ItemListContainer/>} />
       <Route path='/detail/:id' element={ <ItemDetailContainer/>} />
       <Route path='/cart' element={ <Cart/>} />
       <Route path='/checkout/:orderId' element={ <Checkout/>} />
      </Routes>

    </BrowserRouter>
    </CartContextProvider>




  );
}

export default App;
