import '@styles/globals.css'
import { Navbar, Footer } from '@components'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
            <title>Milky Nails by Moo</title>
            <meta name="viewport" content="width=device-width" />
            <link rel="icon" href="/blue_logo_transparent_crop.png" />
        </head>
        <Navbar />
            <body>
            {children}
            </body>
        <Footer />
    </html>
  )
}
