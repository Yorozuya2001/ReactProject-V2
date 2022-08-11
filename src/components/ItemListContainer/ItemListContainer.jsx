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
        <section className='background-image'>
            <h1 className='greeting'>{greeting}</h1>
            <div className='d-flex flex-column align-items-center py-5'>
                <>
                    {
                        loading ? <Preloader /> : <ItemList id={productos} />
                    }
                </>
            </div>
        </section>
    )
}

export default ItemListContainer