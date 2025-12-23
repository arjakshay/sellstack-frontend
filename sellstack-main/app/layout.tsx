import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SellStack - The Affordable other global platforms Alternative for Indian Creators',
  description: 'Sell digital products with 5% commission only. Perfect for eBooks, courses, templates, and more. Launching soon!',
  keywords: 'digital products, sell online, Indian creators, low commission, Gumroad alternative',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}