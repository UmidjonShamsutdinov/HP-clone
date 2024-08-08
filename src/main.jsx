import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import RouteController from './routes/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <RouteController>
        <App />
      </RouteController>
    </BrowserRouter>    
)
