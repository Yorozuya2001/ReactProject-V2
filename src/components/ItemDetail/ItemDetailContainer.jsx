import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from "react-router-dom"
import Preloader from '../preloader/Preloader'
import ItemDetail from "./ItemDetail"



const itemDetailContainer = () => {

    const { id } = useParams()

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    //Use effect que trae indormacion especifica de nuestra base de datos de firestore (trae informacion solo de un item especifico)
    useEffect(() => {
        const db = getFirestore()
        const queryproduct = doc(db, "items", id)
        getDoc(queryproduct)
            .then(resp => setProduct({ id: resp.id, ...resp.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className=' backgroundColor d-flex flex-column align-items-center py-5'>
            {
                loading ? <Preloader /> : <ItemDetail productInfo={product} />
            }
        </div>

    )
}

export default itemDetailContainer