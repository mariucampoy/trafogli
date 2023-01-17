import { createContext, useState } from "react"

const cartContext = createContext()

export function CartContextProvider(props){

const [cart, setCart] = useState([])
const [show, setShow] = useState(false);

const[filteredCategory, setFilteredCategory] = useState([])
const[filteredColor, setFilteredColor] = useState([])
const[filteredSize, setFilteredSize] = useState([])

// const defaultFilters = {    category: filteredCategory,
//                             medida: filteredSize,
//                             color: filteredColor }



const value = {cart, addItem, totalItemsInCart, totalPriceInCart, removeItem, clear, show, handleShow, handleClose,
                filteredCategory, filtrarCategoria, filteredColor, filtrarColor, filteredSize, filtrarMedida
             }

function addItem(itemData){

    let itemFound = cart.find(itemInCart => itemInCart.id === itemData.id && itemInCart.size === itemData.size && itemInCart.colour === itemData.colour)

    if(itemFound){

        let newCart = cart.map(itemInCart => {
            if(itemInCart.id === itemData.id){
// Redundancia
                itemInCart.count += itemData.count
                return itemInCart

            }
            else{
                return itemInCart
            }
    })
    setCart(newCart)}
    else{
            const newCart = [...cart]
            newCart.push(itemData)
            setCart(newCart)
        }
}

function totalItemsInCart(){
    let total = 0;
    cart.forEach((itemInCart) => {
    total = total + itemInCart.count
    })
    return total
}

function totalPriceInCart() {
    let totalPrice = 0;
    cart.forEach((itemInCart) => {
      totalPrice = totalPrice + itemInCart.count * itemInCart.precio;
    });
    return totalPrice;
  }

function removeItem(itemId, itemSize, itemColour){
    let newCart = cart.filter ((item) => item.id !== itemId || item.size !== itemSize || item.colour !== itemColour)
    setCart(newCart);
}

function clear(){
    setCart([])
}

function handleShow() {setShow(true)};
function handleClose(){ setShow(false)};

function filtrarCategoria(valorCategoria){
    setFilteredCategory([valorCategoria])
}

function filtrarMedida(valorMedida){
    setFilteredSize(valorMedida)
}

function filtrarColor(valorColor){
    setFilteredColor([valorColor])
}


// function buildFilter(defaultFilters){
//     let query = {};
//     for (let keys in defaultFilters) {
//         if (defaultFilters[keys].constructor === Array && defaultFilters[keys].length > 0) {
//             query[keys] = defaultFilters[keys];
//         }
//     }
//     return query;
// }

// let filterData = (productList, query) => {
//   const filteredData = productList.filter( (item) => {
//       for (let key in query) {
//           if (item[key] === undefined || !query[key].includes(item[key])) {
//               return false;
//           }
//       }
//       return true;
//   });
//   return filteredData;
// };




    return(
        <cartContext.Provider value={value}>
        {props.children}
        </cartContext.Provider>
    )
}


export default cartContext