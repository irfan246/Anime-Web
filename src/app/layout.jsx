import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Aniweb</title>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body className={`${inter.className} select-none`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
