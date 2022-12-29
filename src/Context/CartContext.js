import { createContext, useState } from "react"

const cartContext = createContext()

export function CartContextProvider(props){

const [cart, setCart] = useState([])
const [show, setShow] = useState(false);



const value = {cart, addItem, totalItemsInCart, totalPriceInCart, removeItem, clear, show, handleShow, handleClose }


function addItem(itemData){

    let itemFound = cart.find(itemInCart => itemInCart.id === itemData.id && itemInCart.size === itemData.size && itemInCart.colour === itemData.colour)

    if(itemFound){

        let newCart = cart.map(itemInCart => {
            if(itemInCart.id === itemData.id){
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
      totalPrice = totalPrice + itemInCart.count * itemInCart.price;
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


    return(
        <cartContext.Provider value={value}>
        {props.children}
        </cartContext.Provider>
    )
}

export default cartContext