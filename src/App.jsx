import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/header/NavBar'
import Footer from './components/footer/footer'
import './App.scss'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import Cart from './components/cart/Cart'
import CartContextProvider from './context/cartContext'
import Introduction from './components/introduction/Introduction'

function App() {

    return (
        <BrowserRouter>
            <CartContextProvider>
                <NavBar />
                <Routes>
                    <Route index path='/' element={<Introduction />} />
                    <Route path='/all' element={<ItemListContainer greeting={'Variedad en productos'} />} />
                    <Route path='/category/:id' element={<ItemListContainer greeting={'Variedad en productos'} />} />
                    <Route path='/item/:id' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
                <Footer/>
            </CartContextProvider>
        </BrowserRouter>
    )
}

export default App
