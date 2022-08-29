import {Link} from "react-router-dom"
import { memo } from "react" 

const item = memo(
    ({ product }) => {

        return (
            <div key={product.id} className="col-md-4 col-xl-3 d-flex justify-content-center">
                <div className="card">
                    <img src={product.imagen} className="card-img-top imgBorder" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.titulo}</h5>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to={`/item/${product.id}`}>
                                <button className="cardButton">Ver Detalles</button>
                            </Link>
                            <p className="priceText">$ {product.valor}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

) 
export default item