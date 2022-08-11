import { HiShoppingCart } from "react-icons/hi"
import { useCartContext } from '../../context/cartContext'
import { NavLink } from 'react-router-dom'

const CardWidget = () => {

    const {cantidadTotal} = useCartContext()

    return (
        <NavLink to="/cart">
        <div className='position-relative spacing'>
            {
                cantidadTotal() != 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{ cantidadTotal() }</span>
            }
                <HiShoppingCart className='cart' alt="Tu carrito de compras" />
        </div>
        </NavLink>
    )
}

export default CardWidget