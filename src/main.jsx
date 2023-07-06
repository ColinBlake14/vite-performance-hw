import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { Header } from './App.jsx'
import './reset.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
)
