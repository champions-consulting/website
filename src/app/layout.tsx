import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import {Roboto} from 'next/font/google'
import type {Metadata} from 'next' // Import Metadata type
import '@/assets/styles/globals.css' // Import global styles

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap', // Add display: swap for better font loading
})

export const metadata: Metadata = {
  title: 'Champions Consulting',
  description: 'Full-Stack Software Solutions',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
