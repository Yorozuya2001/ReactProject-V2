
const Order = ({ orderGenerated }) => {

    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <h2>Gracias por tu compra</h2>
            <p>Código de pedido: {orderGenerated}</p>
        </div>
    )
}

export default Order