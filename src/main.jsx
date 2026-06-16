import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { CompareProvider } from './context/CompareContext'
import { CartProvider } from './context/CartContext'
import { CartUIProvider } from './context/CartUIContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartUIProvider>
      <CartProvider>
        <CompareProvider>
          <App />
        </CompareProvider>
      </CartProvider>
    </CartUIProvider>
  </StrictMode>,
)