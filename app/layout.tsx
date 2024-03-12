import type { Metadata } from 'next'
import './globals.css'
import { ProductProvider } from './[hooks]/useProducts'

export const metadata: Metadata = {
  title: 'Greenspark Next App',
  description: 'Greenspark products page',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
