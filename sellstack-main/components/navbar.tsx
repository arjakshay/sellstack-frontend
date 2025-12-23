'use client'

import { useState } from 'react'
import { Menu, X, Blocks, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)

  return (
    <nav className="glass-effect sticky top-0 z-50 w-full border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Blocks className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SellStack
              </span>
              <div className="text-xs text-gray-500 -mt-1">by Indian creators</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Features
            </Link>
            <Link href="#comparison" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Vs Others
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition font-medium">
              How It Works
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Testimonials
            </Link>
            <Link 
              href="#waitlist" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 hover:shadow-blue-200"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top-5">
            <Link href="#features" className="block text-gray-700 hover:text-blue-600 py-2 font-medium" onClick={() => setIsOpen(false)}>
              Features
            </Link>
            <Link href="#comparison" className="block text-gray-700 hover:text-blue-600 py-2 font-medium" onClick={() => setIsOpen(false)}>
              Vs Others
            </Link>
            <Link href="#how-it-works" className="block text-gray-700 hover:text-blue-600 py-2 font-medium" onClick={() => setIsOpen(false)}>
              How It Works
            </Link>
            <Link href="#pricing" className="block text-gray-700 hover:text-blue-600 py-2 font-medium" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <Link href="#testimonials" className="block text-gray-700 hover:text-blue-600 py-2 font-medium" onClick={() => setIsOpen(false)}>
              Testimonials
            </Link>
            <Link 
              href="#waitlist" 
              className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              Join Waitlist
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}