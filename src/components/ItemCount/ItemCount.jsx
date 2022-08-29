import { useState } from 'react'

//Aqui se encuentra nuestro contador con su respectivo boton de "Agregar al carrito"

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);
    //Añade un item más
    const handleAdd = () => {
        count < stock && setCount(count + 1);
    }
    //Resta un item
    const handleQuit = () => {
        count > 1 && setCount(count - 1);
    }
    //Notifica que el item ha sido añadido al carrito por medio de console.log()
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