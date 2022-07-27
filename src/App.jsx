import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/header/NavBar'
import './App.scss'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'

function App() {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route index path='/' element={<ItemListContainer greeting={'Bienvenido a la tienda'} />} />
                <Route path='/category/:id' element={<ItemListContainer greeting={'Bienvenido a la tienda'} />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
