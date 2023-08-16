import React from 'react'
import ReactDOM from 'react-dom/client'
import ContactUs from './pages/Contactus'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/*" element={<App />} />
    <Route path="/contactus" element={<ContactUs />} />
  </Routes>

  </BrowserRouter>
  </React.StrictMode>,
)


