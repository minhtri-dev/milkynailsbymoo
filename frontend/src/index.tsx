import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router'

import './index.css'
import * as Pages from './pages'
import { Footer, Navbar } from '@components'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Pages.Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  </StrictMode>,
)
