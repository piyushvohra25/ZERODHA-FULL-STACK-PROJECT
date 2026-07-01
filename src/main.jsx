import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import HomePage from './landing_page/home/HomePage'
import AboutPage from './landing_page/about/AboutPage'
import ProductPage from './landing_page/products/ProductsPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HomePage />
  </StrictMode>,
)
