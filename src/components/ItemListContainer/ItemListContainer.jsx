import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { getFetch } from './Functions'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from './ItemList.jsx'
import Preloader from '../preloader/Preloader'
import { onAdd } from './Functions'


const ItemListContainer = ({ greeting }) => {

    const { id } = useParams()

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)




    useEffect(() => {
        if (id) {
            getFetch()
                .then(respuesta => setProductos(respuesta.filter(prod => prod.categoria === id)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
        else{
            getFetch()
                .then(respuesta => setProductos(respuesta))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [id])

    
    return (
        <>
            <div className='d-flex flex-column align-items-center my-5'>
                <h1>{greeting}</h1>
                <>
                    {
                        loading ? <Preloader /> : <ItemList id={productos} />
                    }
                </>
            </div>
        </>
    )
}

export default ItemListContainer