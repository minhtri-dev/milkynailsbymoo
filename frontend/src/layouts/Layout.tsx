import { Navbar, Footer } from '@components'
import type { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}

export default Layout