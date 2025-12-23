'use client'

import { Upload, Link as LinkIcon, IndianRupee, Smartphone, TrendingUp, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    number: "01",
    icon: <Upload className="h-8 w-8" />,
    title: "Upload Your Product",
    description: "Upload eBooks, courses, templates, or any digital file. No limits on file size or type.",
    color: "blue"
  },
  {
    number: "02",
    icon: <IndianRupee className="h-8 w-8" />,
    title: "Set Your Price",
    description: "Price in INR. Add discounts, payment plans, or pay-what-you-want options.",
    color: "green"
  },
  {
    number: "03",
    icon: <LinkIcon className="h-8 w-8" />,
    title: "Get Your Sales Page",
    description: "Beautiful, customizable sales page with built-in SEO. No design skills needed.",
    color: "purple"
  },
  {
    number: "04",
    icon: <Smartphone className="h-8 w-8" />,
    title: "Share & Sell",
    description: "Share your link anywhere. Customers pay via UPI, cards, or wallets.",
    color: "orange"
  },
  {
    number: "05",
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Get Paid Instantly",
    description: "95% of sale goes to your bank account immediately via UPI. 5% is our commission.",
    color: "pink"
  },
  {
    number: "06",
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Grow Your Business",
    description: "Use analytics, email marketing, and affiliate tools to grow your audience.",
    color: "indigo"
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Selling in{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              5 Minutes
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            It's incredibly simple. No technical knowledge required. Just upload, set price, and share.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              {/* Connector Lines */}
              {index < steps.length - 1 && (
                <>
                  {/* Mobile connector */}
                  <div className="absolute top-1/2 right-0 w-8 h-px bg-gray-300 md:hidden"></div>
                  {/* Desktop connector */}
                  {index % 2 === 0 && index < steps.length - 2 && (
                    <div className="hidden md:block absolute top-0 right-0 w-8 h-full">
                      <div className="absolute top-1/2 right-0 w-8 h-px bg-gray-300"></div>
                      <div className="absolute top-1/2 right-0 h-8 w-px bg-gray-300"></div>
                    </div>
                  )}
                </>
              )}

              <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${
                    step.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                    step.color === 'green' ? 'from-green-500 to-emerald-500' :
                    step.color === 'purple' ? 'from-purple-500 to-pink-500' :
                    step.color === 'orange' ? 'from-orange-500 to-red-500' :
                    step.color === 'pink' ? 'from-pink-500 to-rose-500' : 'from-indigo-500 to-blue-500'
                  } flex items-center justify-center`}>
                    <div className="text-white font-bold text-2xl">{step.number}</div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className={`text-${step.color}-600`}>
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                    </div>
                    
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                    
                    {/* Example for each step */}
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Example:</div>
                      {index === 0 && (
                        <div className="text-sm text-gray-700">"React Course.zip" - 2.4 GB</div>
                      )}
                      {index === 1 && (
                        <div className="text-sm text-gray-700">₹1,499 or ₹299/month x 6</div>
                      )}
                      {index === 2 && (
                        <div className="text-sm text-gray-700">sellstack.com/s/react-course</div>
                      )}
                      {index === 3 && (
                        <div className="text-sm text-gray-700">Share on Twitter, WhatsApp, Instagram</div>
                      )}
                      {index === 4 && (
                        <div className="text-sm text-gray-700">₹1,424.05 instantly to your UPI</div>
                      )}
                      {index === 5 && (
                        <div className="text-sm text-gray-700">See which content sells best</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Demo Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              🚀 From Zero to First Sale
            </h3>
            <p className="text-gray-600">Here's how quickly you can start earning</p>
          </div>
          
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 md:block hidden"></div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Time Points */}
              {[
                { time: "5 min", title: "Account Setup", desc: "Sign up with phone/email" },
                { time: "2 min", title: "Upload Product", desc: "Drag & drop your file" },
                { time: "1 min", title: "Set Price", desc: "Choose INR pricing" },
                { time: "2 min", title: "Customize Page", desc: "Add description, images" },
                { time: "0 min", title: "Share Link", desc: "Copy your unique URL" },
                { time: "?", title: "First Sale!", desc: "Depends on your audience" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'md:text-right md:flex-row-reverse' : ''}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-xl p-4 shadow-lg">
                      <div className="text-sm text-gray-500">{item.time}</div>
                      <div className="font-bold text-gray-800">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="h-6 w-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                    {index < 5 && (
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 h-8 w-px bg-gradient-to-b from-blue-300 to-purple-300 md:hidden"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 md:hidden"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow">
              <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-gray-800">Total setup time: ~10 minutes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}