import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)



const CartContextProvider = ({children}) => {

    //Estados & funciones globales

    const [cartList, setCartList] = useState([])

    const addToCart = (prod) => {
        
        if (cartList.find(item => item.id === prod.id)) 
        {
            for (const item in cartList) {
                if (cartList[item].id === prod.id) {
                    cartList[item].cantidad += prod.cantidad
                }
            }
        } 
        else 
        {
            setCartList([...cartList,prod])
        }
    }

    const removeToCart = () =>{
        setCartList([])
    }

    return (
        <CartContext.Provider value = {{
            cartList,
            addToCart,
            removeToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider