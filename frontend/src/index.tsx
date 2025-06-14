import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router'

import './index.css'
import * as Pages from './pages'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/services" element={<Pages.Service />} />
          <Route path="/portfolio" element={<Pages.Portfolio />} />
          <Route path="*" element={<Pages.NotFound />} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
