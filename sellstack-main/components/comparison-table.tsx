'use client'

import { Check, X, AlertCircle, IndianRupee, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ComparisonTable() {
  const features = [
    {
      feature: 'Commission Fee',
      sellstack: 'Only 5% (2.5% for early birds)',
      gumroad: '10% + payment processing fees',
      sellstackGood: true,
      icon: '₹'
    },
    {
      feature: 'Monthly Subscription',
      sellstack: '₹0 forever',
      gumroad: '$10/month for advanced features',
      sellstackGood: true,
      icon: '📅'
    },
    {
      feature: 'UPI Payments',
      sellstack: 'Native UPI, PayTM, PhonePe',
      gumroad: 'Third-party integrations only',
      sellstackGood: true,
      icon: '💸'
    },
    {
      feature: 'GST Invoicing',
      sellstack: 'Auto-generated GST invoices',
      gumroad: 'Manual setup needed',
      sellstackGood: true,
      icon: '🧾'
    },
    {
      feature: 'WhatsApp Delivery',
      sellstack: 'Built-in WhatsApp file delivery',
      gumroad: 'Email only',
      sellstackGood: true,
      icon: '📱'
    },
    {
      feature: 'Customer Support',
      sellstack: 'Priority Indian timezone support',
      gumroad: 'Global queue, slower response',
      sellstackGood: true,
      icon: '🛟'
    },
    {
      feature: 'Payment Methods',
      sellstack: 'UPI, Cards, NetBanking, Wallet',
      gumroad: 'Cards, PayPal (no UPI)',
      sellstackGood: true,
      icon: '💳'
    },
    {
      feature: 'Platform Maturity',
      sellstack: 'New with modern tech stack',
      gumroad: '10+ years established',
      sellstackGood: false,
      icon: '🏢'
    },
    {
      feature: 'Global Audience',
      sellstack: 'Focus on Indian market',
      gumroad: 'Worldwide audience',
      sellstackGood: false,
      icon: '🌍'
    }
  ]

  return (
    <section id="comparison" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">SellStack</span> Beats Others
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Built specifically for Indian creators with local payment methods, lower fees, and better support
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-3 mb-8">
            <div className="text-lg font-semibold text-gray-700 p-4"></div>
            <div className="text-center">
              <div className="inline-flex flex-col items-center space-y-2">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <IndianRupee className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-800">SellStack</div>
                  <div className="text-sm text-green-600 font-semibold">BETTER FOR INDIA</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex flex-col items-center space-y-2">
                <div className="h-16 w-16 bg-gray-200 rounded-2xl flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-gray-600" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-800">Others</div>
                  <div className="text-sm text-gray-500">GLOBAL PLATFORM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`grid grid-cols-3 p-6 ${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'} hover:bg-blue-50/30 transition-colors`}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-800">{item.feature}</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full">
                    {item.sellstackGood ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-blue-500" />
                    )}
                    <span className={`font-medium ${item.sellstackGood ? 'text-green-700' : 'text-blue-700'}`}>
                      {item.sellstack}
                    </span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
                    {!item.sellstackGood ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <X className="h-5 w-5 text-red-400" />
                    )}
                    <span className="text-gray-700">{item.gumroad}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Savings Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-8 shadow-lg border border-green-200"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                💰 Calculate Your Savings
              </h3>
              <p className="text-gray-600">See how much you save compared to Others</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow">
                <div className="text-sm text-gray-600 mb-2">On Monthly Sales of</div>
                <div className="text-3xl font-bold text-blue-600">₹1,00,000</div>
                <div className="mt-4">
                  <div className="text-sm text-gray-500">Others Fee (10%)</div>
                  <div className="text-xl font-semibold text-red-500">₹10,000</div>
                </div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl shadow">
                <div className="text-sm text-gray-600 mb-2">SellStack Fee (5%)</div>
                <div className="text-3xl font-bold text-purple-600">₹5,000</div>
                <div className="mt-4">
                  <div className="text-sm text-gray-500">Your Immediate Savings</div>
                  <div className="text-xl font-semibold text-green-500">₹5,000</div>
                </div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg">
                <div className="text-white mb-2">Extra Annual Profit</div>
                <div className="text-3xl font-bold text-white">₹60,000</div>
                <div className="mt-4 text-green-100">
                  That's like getting 6 months free!
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}