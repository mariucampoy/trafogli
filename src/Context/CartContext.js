import { createContext, useState } from "react"

const cartContext = createContext()

export function CartContextProvider(props){

const [cart, setCart] = useState([])
const value = {cart, addItem, totalItemsInCart, totalPriceInCart, removeItem, clear}


function addItem(itemData){

    let itemFound = cart.find(itemInCart => itemInCart.id === itemData.id)

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


function removeItem(itemId){
    cart.filter(item => {
        let newCart = item.id !== itemId.id
        setCart(newCart)
        return newCart
    })

}

function clear(){
    setCart([])

}


    return(
        <cartContext.Provider value={value}>
        {props.children}
        </cartContext.Provider>
    )
}

export default cartContext