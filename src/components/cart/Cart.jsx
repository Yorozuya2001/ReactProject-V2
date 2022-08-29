import { useCartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { MdDeleteForever } from "react-icons/md";
import Form from "../form/Form";
import { useState } from "react";
import Order from "../form/Order";

const Cart = () => {

    const { 
        cartList, 
        removeToCart, 
        totalValue, 
        cartCont, 
        deleteProduct, 
        getDomElement 
    } = useCartContext()
    
    const [idOrder, setIdOrder] = useState("");

    //Funcion para guardar Orden

    const formDates = () => {
        const name = getDomElement("name");
        const phone = getDomElement("phone");
        const email = getDomElement("email");
        const emailCheck = getDomElement("emailCheck");
        const userDates = {
            name: name,
            phone: phone,
            email: email,
            emailCheck: emailCheck,
        }
        return userDates;
    }

    const buyed = (e) => {
        e.preventDefault()
        const user = formDates()
        const buyer = {
            buyer: user,
            items: cartList.map(prod => {
                return {
                    producto: prod.titulo,
                    id: prod.id,
                    precio: prod.valor
                }
            }),
            total: totalValue()
        }

        // Guardar orden en Base de Datos
        const db = getFirestore()
        const queryOrders = collection(db, "orders")
        addDoc(queryOrders, buyer)
            .then(resp => setIdOrder(resp.id))
            .finally(() => removeToCart())
    }

    return (
        <>
            {
                idOrder != "" ?
                    <Order orderGenerated={idOrder}/>
                    :
                    <div className="container-fluid">
                        <div className="row">        
                                {
                                    cartCont() === 0 ?
                                        <div className="d-flex justify-content-center align-items-center flex-column">
                                            <h2>No hay Articulos en tu carrito</h2>
                                            <Link to="/">
                                                <button className="buttonConfirm">Ir a comprar</button>
                                            </Link>
                                        </div>
                                        :
                                        <>
                                            <div className="col-sm-6">
                                                <div className="d-flex flex-column align-items-center my-5">
                                                    <h2>{totalValue() != 0 && `Precio Total: $ ${totalValue()}`}</h2>
                                                    {
                                                        cartList.map(item => (
                                                            <div key={item.id} className="card" style={{ width: "18rem" }}>
                                                                <img src={item.imagen} className="card-img-top imgBorder" alt="..." />
                                                                <div className="card-body ">
                                                                    <p className="card-title">{item.titulo}</p>
                                                                    <p className="card-text">Cantidad: {item.cantidad}</p>
                                                                    <div className="d-flex justify-content-between">
                                                                        <p className="priceText">Valor: ${item.valor * item.cantidad}</p>
                                                                        <button className="buttonDelete" onClick={() => deleteProduct(item.id)}><MdDeleteForever className="buttonDeleteImage" /></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                    <button onClick={removeToCart} className="buttonConfirm">Vaciar el carro de compras</button>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                {
                                                    cartCont() != 0 && <Form buyed={buyed} />
                                                }
                                            </div>
                                        </>
                                }
                            </div>
                        </div>
            }
        </>
    )
}

export default Cart