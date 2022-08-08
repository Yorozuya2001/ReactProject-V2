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
                    setCartList([...cartList])
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

    const valorTotal = () =>{
        return cartList.reduce((acumulador,prod) => acumulador += (prod.valor * prod.cantidad), 0)
    }

    const cantidadTotal = () => {
        return cartList.reduce((contador, prod) => contador += prod.cantidad, 0)
    }

    const eliminarProducto = (id) => {
        setCartList(cartList.filter(prod => prod.id != id))
    }

    return (
        <CartContext.Provider value = {{
            cartList,
            addToCart,
            removeToCart,
            valorTotal,
            cantidadTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider