import { Link } from "react-router-dom"

const Order = ({ orderGenerated }) => {

    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <h2>Gracias por tu compra</h2>
            <p>Código de pedido: {orderGenerated}</p>
            <Link to="/">
                <button className="buttonConfirm">Ir al home</button>
            </Link>
        </div>
    )
}

export default Order