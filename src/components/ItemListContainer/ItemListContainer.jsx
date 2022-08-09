import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { getFetch } from './Functions'
import ItemList from './ItemList.jsx'
import Preloader from '../preloader/Preloader'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


const ItemListContainer = ({ greeting }) => {

    const { id } = useParams()
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect (() => {
        const db = getFirestore()
        const queryCollection = collection (db , "items")
        
        if (id){
            const queryFilter = query(queryCollection, where("categoria", "==", id))
            getDocs(queryFilter)
                .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
        else{
            getDocs(queryCollection)
                .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }

    },[id])

    console.log(productos);
    
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