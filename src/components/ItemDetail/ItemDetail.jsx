import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { onAdd } from '../ItemListContainer/Functions'



const itemDetail = ({ productoInfo }) => {
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
                            <ItemCount initial={1} stock={22} onAdd={onAdd} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default itemDetail