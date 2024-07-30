import React from 'react'
import ReactDOM from 'react-dom/client'
import './qrcode.css'
import { QrGenerator } from './QrGenerator.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QrGenerator />
  </React.StrictMode>,
)
