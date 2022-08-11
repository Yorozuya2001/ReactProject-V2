import { useCartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {

    const { cartList, removeToCart, valorTotal, cantidadTotal, eliminarProducto } = useCartContext()

    //Funcion para guardar Orden

    const user = {
        name: "Rogelio Rabbit",
        phone: 1136187810,
        email: "LocoChelo@gmail.com"
    }

    const buyed = (e) => {
        e.preventDefault()
        const buyer = {
            buyer: user,
            items: cartList.map(prod =>{
                return {
                    producto: prod.titulo,
                    id: prod.id,
                    precio: prod.valor
                }
            }),
            total: valorTotal()
        }
        
    console.log(buyer);

        // Guardar orden en Base de Datos

        const db = getFirestore()
        const queryOrders = collection(db, "orders")
        addDoc(queryOrders, buyer)
            .then(resp => console.log(resp))
    }




    return (
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
                                <button className="buttonDelete" onClick={() => eliminarProducto(item.id)}><MdDeleteForever className="buttonDeleteImage"/></button>
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
                            <h2>No hay Articulos en tu carrito :(</h2>
                            <Link to="/">
                            <button className="buttonConfirm">Ir a comprar</button>
                            </Link>
                        </div>
                        :
                        <>
                        <button onClick={removeToCart} className="buttonConfirm">Vaciar el carro de compras</button>
                        <button onClick={buyed} className="buttonConfirm">Confirmar Pedido</button>
                        </>
                }

            </div>
        </div>
    )
}

export default Cart