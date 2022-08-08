import React from 'react'
import ReactDOM from 'react-dom/client'
import { firebaseConnections } from '../firebase/config'
import App from './App'
import './index.scss'

firebaseConnections()

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
