import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)



const CartContextProvider = ({children}) => {

    //Estados & funciones globales

    const [cartList, setCartList] = useState([])

    //añade producto a mi carrito
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

    //setea la lista de mi carrito eliminando todo el contenido del array
    const removeToCart = () =>{
        setCartList([])
    }

    //calcula el valor total de nuestro carrito
    const totalValue = () =>{
        return cartList.reduce((acum,prod) => acum += (prod.valor * prod.cantidad), 0)
    }

    //cuenta la cantidad de productos en nuestro carrito
    const cartCont = () => {
        return cartList.reduce((cont, prod) => cont += prod.cantidad, 0)
    }

    //elimina un determinado producto de nuestro carrito
    const deleteProduct = (id) => {
        setCartList(cartList.filter(prod => prod.id != id))
    }

    //Toma elementos del Dom (especificamente los datos del usuario)
    const getDomElement = (id) => {
        const element = document.getElementById(id)
        return element.value;
    }

    return (
        <CartContext.Provider value = {{
            cartList,
            addToCart,
            removeToCart,
            totalValue,
            cartCont,
            deleteProduct,
            getDomElement
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider