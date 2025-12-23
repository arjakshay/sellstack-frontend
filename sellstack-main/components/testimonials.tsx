// components/testimonials.tsx - UPDATED VERSION
'use client'

import { Star, Users, TrendingUp, Target, Clock, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const earlyAdopters = [
  {
    type: "E-book Authors",
    count: "320+",
    icon: "📚",
    description: "Joining from Twitter & LinkedIn"
  },
  {
    type: "Course Creators",
    count: "180+",
    icon: "🎓",
    description: "Teachers & educators waiting"
  },
  {
    type: "UI/UX Designers",
    count: "420+",
    icon: "🎨",
    description: "Template creators signed up"
  },
  {
    type: "Developers",
    count: "290+",
    icon: "💻",
    description: "Plugin & tool builders"
  },
  {
    type: "Digital Artists",
    count: "95+",
    icon: "🖌️",
    description: "Illustrators & artists"
  },
  {
    type: "Photographers",
    count: "210+",
    icon: "📸",
    description: "Stock photo creators"
  }
]

const expectedBenefits = [
  {
    title: "42% More Profit",
    description: "Compared to Gumroad's 10% fees",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "green"
  },
  {
    title: "Instant Payouts",
    description: "UPI transfers in minutes, not days",
    icon: <Zap className="h-6 w-6" />,
    color: "blue"
  },
  {
    title: "Made for India",
    description: "GST invoices, WhatsApp delivery",
    icon: <Target className="h-6 w-6" />,
    color: "purple"
  },
  {
    title: "Early Bird Perks",
    description: "50% discount for first 1000",
    icon: <Clock className="h-6 w-6" />,
    color: "orange"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              1,200+ Creators
            </span>{" "}
            Are Joining
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join early adopters who are switching from expensive platforms to SellStack
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1,200+</div>
                <div className="text-blue-100">Creators Joined</div>
                <div className="text-sm text-blue-200 mt-1">Early Access List</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">₹0</div>
                <div className="text-blue-100">Monthly Fees</div>
                <div className="text-sm text-blue-200 mt-1">Pay only when you sell</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5%</div>
                <div className="text-blue-100">Flat Commission</div>
                <div className="text-sm text-blue-200 mt-1">Half of Others' rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">28+</div>
                <div className="text-blue-100">Indian Cities</div>
                <div className="text-sm text-blue-200 mt-1">Creators from across India</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Early Adopters Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {earlyAdopters.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <div className="font-bold text-gray-800 text-lg">{item.count}</div>
                  <div className="text-gray-600">{item.type}</div>
                  <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expected Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-800">
            What Early Adopters Are Saying They'll Gain
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expectedBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-200 transition-colors"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  benefit.color === 'green' ? 'bg-green-100 text-green-600' :
                  benefit.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  benefit.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-gray-800 text-lg mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Be Among the First 1000 Creators
            </h3>
            <p className="text-gray-600 mb-8">
              Secure your 2.5% commission rate forever. Early adopters get priority support, 
              feature requests, and special recognition on our launch day.
            </p>
            <a
              href="#waitlist"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Join Early Access Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}