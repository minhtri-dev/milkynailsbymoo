import { Navbar, Footer } from '@components'
import type { ReactNode } from 'react'

import '@styles/globals.css'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
