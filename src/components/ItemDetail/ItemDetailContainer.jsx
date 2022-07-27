import { getFetch } from "../ItemListContainer/Functions"
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import Preloader from '../preloader/Preloader'
import ItemDetail from "./ItemDetail"



const itemDetailContainer = () => {

    const {id} = useParams()
    console.log(id);

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getFetch(id)
            .then(respuesta => setProducto(respuesta))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className='d-flex flex-column align-items-center my-5'>
            {
                loading ? <Preloader /> : <ItemDetail productoInfo={producto} />
            }
        </div>

    )
}

export default itemDetailContainer