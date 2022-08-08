import {Link} from "react-router-dom"
import { memo } from "react" 

const item = memo(
    ({ producto }) => {

        return (
            <div key={producto.id} className="col-sm-4 d-flex justify-content-center">
                <div className="card">
                    <img src={producto.imagen} className="card-img-top imgBorder" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{producto.titulo}</h5>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to={`/item/${producto.id}`}>
                                <button className="cardButton">Ver Detalles</button>
                            </Link>
                            <p className="priceText">$ {producto.valor}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

) 
export default item