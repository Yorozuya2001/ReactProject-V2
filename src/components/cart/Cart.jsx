import { useCartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { MdDeleteForever } from "react-icons/md";
import Form from "../form/Form";
import { useState } from "react";
import Order from "../form/Order";

const Cart = () => {

    const { cartList, removeToCart, valorTotal, cantidadTotal, eliminarProducto, getDomElement } = useCartContext()
    const [idOrder, setIdOrder] = useState("");
    //Funcion para guardar Orden

    const  formDates = () => {
        const name = getDomElement("name");
        const surname = getDomElement("surname");
        const phone = getDomElement("phone");
        const email = getDomElement("email");
        const emailChecked = getDomElement("email-checked");

        const userDates = {
            name: name,
            surname: surname,
            phone: phone,
            email: email,
            emailChecked: emailChecked,
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
            total: valorTotal()
        }

        console.log(buyer)

        // Guardar orden en Base de Datos

        const db = getFirestore()
        const queryOrders = collection(db, "orders")
        addDoc(queryOrders, buyer)
            .then(resp => setIdOrder(resp.id))

        }




    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6">
                    <div className="d-flex flex-column align-items-center my-5">
                        {
                            cartList.map(item => (
                                <div key={item.id} className="card" style={{ width: "18rem" }}>
                                    <img src={item.imagen} className="card-img-top imgBorder" alt="..." />
                                    <div className="card-body ">
                                        <p className="card-title">{item.titulo}</p>
                                        <p className="card-text">Cantidad: {item.cantidad}</p>
                                        <div className="d-flex justify-content-between">
                                            <p className="priceText">Valor: ${item.valor * item.cantidad}</p>
                                            <button className="buttonDelete" onClick={() => eliminarProducto(item.id)}><MdDeleteForever className="buttonDeleteImage" /></button>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                        <div className="d-flex flex-column align-items-center justify-content-center my-3">
                            <h2>{valorTotal() != 0 && `Precio Total: $ ${valorTotal()}`}</h2>
                            {
                                cantidadTotal() === 0 ?
                                    <div className="d-flex justify-content-center align-items-center flex-column">
                                        <h2>No hay Articulos en tu carrito</h2>
                                        <Link to="/">
                                            <button className="buttonConfirm">Ir a comprar</button>
                                        </Link>
                                    </div>
                                    :
                                    <>
                                        <button onClick={removeToCart} className="buttonConfirm">Vaciar el carro de compras</button>
                                        
                                    </>
                            }
                        </div>
                    </div>

                </div>
                <div className="col-sm-6">
                        {
                            cantidadTotal() != 0 && <Form buyed={buyed}/>
                        }
                        {
                        idOrder != "" && <Order orderGenerated={idOrder}/>
                        }
                </div>
            </div>
        </div>
    )
}

export default Cart