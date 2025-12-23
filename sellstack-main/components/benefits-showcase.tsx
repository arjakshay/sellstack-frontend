// components/benefits-showcase.tsx (replace testimonials.tsx)
'use client'

import { CheckCircle, Shield, Zap, Globe, Lock, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const platformBenefits = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Save 50% on Fees",
    description: "Pay 5% instead of Gumroad's 10%+ fees. That's ₹5,000 saved on every ₹1,00,000 sales.",
    comparison: "vs Gumroad: 10% + payment fees"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Instant UPI Payouts",
    description: "Get paid directly to your bank in minutes, not 7-day waiting periods.",
    comparison: "vs Others: 3-7 day delays"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Made for India",
    description: "GST invoices, WhatsApp delivery, RuPay/UPI payments - built for Indian creators.",
    comparison: "vs Foreign platforms: No local support"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Zero Monthly Fees",
    description: "Pay only when you make sales. No subscriptions, no hidden charges.",
    comparison: "vs Others: $10-$30/month subscriptions"
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Bank-level Security",
    description: "PCI-DSS compliant, encrypted transactions, secure file storage.",
    comparison: "Enterprise-grade security"
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Priority Support",
    description: "Dedicated Indian timezone support with <4 hour response time.",
    comparison: "vs Others: 24-48 hour global queues"
  }
]

export default function BenefitsShowcase() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Smart Creators Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SellStack
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Built with everything Indian creators need, nothing they don't
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-200 hover:border-blue-200">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {benefit.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="text-sm font-medium text-gray-500 mb-1">Comparison:</div>
                  <div className="text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
                    {benefit.comparison}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-green-200"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              💰 Calculate Your Potential Savings
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">₹1,00,000</div>
                <div className="text-gray-600">Monthly Sales</div>
                <div className="mt-4 text-sm text-gray-500">
                  <div>Gumroad: ₹10,000 fees</div>
                  <div className="font-bold text-green-600">SellStack: ₹5,000 fees</div>
                  <div className="font-bold mt-2">Save ₹5,000/month</div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">₹60,000</div>
                <div className="text-gray-600">Extra Annual Income</div>
                <div className="mt-4 text-sm text-gray-500">
                  <div>That's like getting</div>
                  <div className="font-bold text-purple-600">6 months free!</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-xl shadow-lg text-white text-center">
                <div className="text-3xl font-bold mb-2">+42%</div>
                <div>More Profit Margin</div>
                <div className="mt-4 text-green-100 text-sm">
                  By switching from Gumroad to SellStack
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}