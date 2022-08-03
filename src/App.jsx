import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/header/NavBar'
import './App.scss'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import Cart from './components/cart/Cart'
import CartContextProvider from './context/cartContext'

function App() {

    return (
        <BrowserRouter>
            <CartContextProvider>
                <NavBar />
                <Routes>
                    <Route index path='/' element={<ItemListContainer greeting={'Bienvenido a la tienda'} />} />
                    <Route path='/category/:id' element={<ItemListContainer greeting={'Bienvenido a la tienda'} />} />
                    <Route path='/item/:id' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </CartContextProvider>
        </BrowserRouter>
    )
}

export default App
