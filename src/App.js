import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import NavBar from "./Components/NavBar/NavBar"
import { CartContextProvider } from './Context/CartContext';
import Checkout from './Components/Checkout/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Landing from './Components/Landing/Landing';
import PreguntasFrecuentes from "./Components/PreguntasFrecuentes/PreguntasFrecuentes"
import TerminosCondiciones from "./Components/TerminosCondiciones/TerminosCondiciones"
import Contacto from "./Components/Contacto/Contacto"
import "./App.css"

function App() {



  return (

    <CartContextProvider>
      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/category/:categoryid' element={<ItemListContainer />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
          <Route path='/checkout/:orderId' element={<Checkout />} />
          <Route path='/preguntas-frecuentes' element={<PreguntasFrecuentes />} />
          <Route path='/terminos-y-condiciones' element={<TerminosCondiciones />} />
          <Route path='/contacto' element={<Contacto />} />
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
