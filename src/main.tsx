import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Friend from './Routes/Friends.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Friend/>
  </React.StrictMode>,
)
