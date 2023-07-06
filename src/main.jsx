import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { Header } from 'src/App.jsx'
import 'src/reset.css'
import 'src/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
)
