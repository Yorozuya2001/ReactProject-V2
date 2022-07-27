import { useState } from 'react'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        count < stock && setCount(count + 1);
    }

    const handleQuit = () => {
        count > 1 && setCount(count - 1);
    }

    const handleAddToCart = () => {
        onAdd(count)
    }
    return (
        <div className=''>
            <div className='d-flex justify-content-evenly align-items-center'>
                <button className='addRestButton' onClick={handleQuit}>-</button>
                <label>{count}</label>
                <button className='addRestButton' onClick={handleAdd}>+</button>
            </div>
            <div className='d-flex justify-content-center'>
                <button className='buttonConfirm' onClick={handleAddToCart}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount