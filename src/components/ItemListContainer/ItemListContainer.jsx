import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList.jsx'
import Preloader from '../preloader/Preloader'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


const ItemListContainer = ({ greeting }) => {

    const { id } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    //Use effect que trae productos de nuestra base de datos en firestore
    useEffect (() => {
        const db = getFirestore()
        const queryCollection = collection (db , "items")
        //condicion para filtrar
        if (id){
            const queryFilter = query(queryCollection, where("categoria", "==", id))
            getDocs(queryFilter)
                .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
        else{
            getDocs(queryCollection)
                .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }

    },[id])

    
    return (
        <section className='background-image'>
            <h1 className='greeting'>{greeting}</h1>
            <div className='d-flex flex-column align-items-center py-5'>
                <>
                    {
                        loading ? <Preloader /> : <ItemList id={products} />
                    }
                </>
            </div>
        </section>
    )
}

export default ItemListContainer