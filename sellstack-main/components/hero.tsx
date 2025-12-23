'use client'

import { ArrowRight, Sparkles, TrendingUp, Shield, Zap, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">
                Launching Soon • Early Access Available
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Stop Paying 10%</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                To Foreign Platforms
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10">
              Built for <span className="font-bold text-blue-600">Indian creators</span> with local payment methods. 
              Sell digital products with just <span className="font-bold text-green-600">5% commission</span>.
              Keep more of your hard-earned money.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="#waitlist" 
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
                >
                  <span>Join Early Access</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span className="font-medium">1,200+ creators already joined</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">GST Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-700">Instant UPI Payouts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">Made in India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              {/* Mock Dashboard */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded w-1/3"></div>
                  <div className="h-8 w-8 bg-blue-100 rounded-full"></div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="text-sm text-gray-600">This Month</div>
                    <div className="text-2xl font-bold text-blue-600">₹42,580</div>
                    <div className="text-xs text-green-500">↑ 24% from last month</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <div className="text-sm text-gray-600">Commission</div>
                    <div className="text-2xl font-bold text-purple-600">2.5%</div>
                    <div className="text-xs text-green-500">Early Bird Rate</div>
                  </div>
                </div>

                {/* Product Card */}
                <div className="border rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <div className="h-12 w-12 bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg"></div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">React Templates Bundle</div>
                      <div className="text-sm text-gray-600">Digital Product</div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-lg font-bold text-gray-900">₹1,499</span>
                        <span className="text-sm text-green-600">8 sales today</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Comparison */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">You save vs Others</div>
                    <div className="text-2xl font-bold text-green-600">₹7,500/month</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">On ₹1,50,000 sales</div>
                    <div className="text-lg font-bold text-gray-800">Extra profit</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              50% OFF for Early Birds
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              UPI • PayTM • Cards
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}