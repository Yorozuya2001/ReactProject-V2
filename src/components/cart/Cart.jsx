import { useCartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {

    const { cartList, removeToCart, valorTotal, cantidadTotal, eliminarProducto } = useCartContext()

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
                        <button onClick={removeToCart} className="buttonConfirm">Vaciar el carro de compras</button>
                }

            </div>
        </div>
    )
}

export default Cart