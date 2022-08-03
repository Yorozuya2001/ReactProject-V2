import { useCartContext } from "../../context/cartContext"

const Cart = () => {

    const { cartList,removeToCart } = useCartContext()

    return (
        <div className="d-flex flex-column align-items-center my-5">
            <h2>Articulos del carrito</h2>
            {
                cartList.map(item => (
                    <div key={item.id} className="card" style={{width: "18rem"}}>
                        <img src={item.imagen} className="card-img-top imgBorder" alt="..." />
                        <div className="card-body ">
                            <p className="card-title">{item.titulo}</p>
                            <p className="card-text">Cantidad: {item.cantidad}</p>
                            <p className="priceText">Valor Total: {item.valor * item.cantidad}</p>
                        </div>
                    </div>
                ))
            }
            <div className="d-flex justify-content-center my-3">
                <button onClick={removeToCart} className="buttonConfirm">Vaciar el carro de compras</button>
            </div>
        </div>
    )
}

export default Cart