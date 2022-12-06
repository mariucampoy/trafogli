import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import NavBar from "./Components/NavBar/NavBar"
import { CartContextProvider } from './Context/CartContext';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import "./App.css"


function App() {



  return (

    <CartContextProvider>
      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryid' element={<ItemListContainer />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout/:orderId' element={<Checkout />} />
        </Routes>

        <Footer/>

        <div className='whatsapp-container'>
          <Link to="https://wa.me/541138501171">
            <img className='whatsapp' src='/img/whatsapplogo.svg'></img>
          </Link >
        </div>

      </BrowserRouter>
    </CartContextProvider>




  );
}

export default App;
