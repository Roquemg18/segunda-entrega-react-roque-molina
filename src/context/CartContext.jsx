import React, { useState, useContext } from "react"

export const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext)

function CartProvider({children}) {
    const [cart, setCart]= useState([])

    const clearCart = ()=>setCart([]);

    const isInCart = (id)=>cart.find(product => product.id === id) ? true: false;

    const removeProduct = (id)=> setCart(cart.filter(product=> product.id !== id))

    console.log("carrito",cart);

    const addProduct = (product, newQuantity) =>{
        const newCart = cart.filter (prod => prod.id !== product.id);
        newCart.push({ ...product, quantity: newQuantity });
        setCart(newCart)
    }
    const totalPrice = ()=>{
        return cart.reduce((prev, act)=> prev + act.quantity * act.precio, 0)
    }

    const totalProducts = () => { 
        return cart.reduce((acumulador, productoActual)=> acumulador + productoActual.quantity,0)
        
        
    }
    


    return(
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider