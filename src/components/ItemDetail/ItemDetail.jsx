import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import ItemCount from '../ItemCount/ItemCount'
import { onAdd } from '../ItemListContainer/Functions'



const itemDetail = ({ productoInfo }) => {

    const { addToCart } = useCartContext();

    const [toCart, setToCart] = useState(true)

    const listen = (cant) => {
        onAdd(cant)
        addToCart({ ...productoInfo, cantidad: cant })
        setToCart(false)
    }

    return (
        <div className="cardDetail mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={productoInfo.imagen} className="img-fluid rounded-start" alt="Imagen pruebas" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{productoInfo.titulo}</h5>
                        <p className="card-text">{productoInfo.descripcion}</p>
                        <p className="DetailPriceText">$ {productoInfo.valor}</p>
                        <div className='d-flex align-items-end'>
                            {toCart ?
                                <ItemCount initial={1} stock={22} onAdd={listen} />
                                :
                                <div className='d-flex flex-column'>
                                    <Link to="/cart"><button className='buttonConfirm'>Ver el carro de compras</button></Link>
                                    <Link to="/">
                                        <button className="buttonConfirm">Seguir comprando</button>
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default itemDetail