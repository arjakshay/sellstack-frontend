'use client'

import { useState } from 'react'
import { Mail, User, Smartphone, ArrowRight, Gift, CheckCircle, Clock, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [position, setPosition] = useState(1201)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // In production: API call to your backend
    console.log({ email, name, phone })
    
    // Simulate submission
    setSubmitted(true)
    setPosition(position + 1)
    
    // Reset after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
      setName('')
      setPhone('')
    }, 5000)
  }

  const benefits = [
    { icon: <Gift className="h-5 w-5" />, text: "50% OFF forever (2.5% commission rate)" },
    { icon: <Zap className="h-5 w-5" />, text: "Early access & priority onboarding" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "Exclusive feature requests power" },
    { icon: <Clock className="h-5 w-5" />, text: "Dedicated Indian timezone support" }
  ]

  return (
    <section id="waitlist" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <div className="h-2 w-2 bg-yellow-300 rounded-full animate-ping"></div>
              <span className="text-white font-semibold">
                🚀 LIMITED TIME OFFER
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get <span className="text-yellow-300">50% OFF</span> Commission
              <br />
              <span className="text-2xl md:text-3xl font-normal text-blue-100">For Our First 1000 Creators</span>
            </h2>
            
            <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto">
              Join our exclusive early access list and lock in a <strong className="text-yellow-300">2.5% commission rate forever</strong>.
              That's less than half of what other platform charges!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                Early Bird Benefits
              </h3>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="h-10 w-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    <p className="text-white/90 text-lg">{benefit.text}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Savings Calculator */}
              <div className="mt-12 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-300/30">
                <div className="text-white font-bold text-lg mb-3">Your Savings Calculator</div>
                <div className="space-y-4">
                  <div className="flex justify-between text-white">
                    <span>On ₹1,00,000 sales:</span>
                    <span className="font-bold">Save ₹5,000</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>On ₹5,00,000 sales:</span>
                    <span className="font-bold">Save ₹25,000</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Annual (₹10L sales):</span>
                    <span className="font-bold text-yellow-300">Save ₹50,000+</span>
                  </div>
                </div>
              </div>
              
              {/* Counter */}
              <div className="mt-8 text-center">
                <div className="text-white/80 mb-2">Spots remaining for 50% OFF:</div>
                <div className="text-3xl font-bold text-white">
                  {1000 - (position - 1200)} / 1000
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full mt-2 overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${((position - 1200) / 1000) * 100}%` }}
                    className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {!submitted ? (
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Join the Waitlist
                    </h3>
                    <p className="text-gray-600">
                      Get notified when we launch and secure your 50% discount
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                          required
                        />
                      </div>
                      
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email Address"
                          className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                          required
                        />
                      </div>
                      
                      <div className="relative">
                        <Smartphone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="WhatsApp Number (Optional)"
                          className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                        />
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="text-sm text-gray-700 mb-2">
                        By joining, you agree to:
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></div>
                          <span>Get early access notification</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></div>
                          <span>Receive product updates</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2"></div>
                          <span>No spam, unsubscribe anytime</span>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center space-x-3"
                    >
                      <span>Secure My 50% Discount</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    
                    <div className="text-center text-sm text-gray-500">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        <span>1,200+ creators already joined</span>
                      </div>
                      <p>We'll email you 2 days before public launch</p>
                    </div>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl shadow-2xl p-10 text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Welcome to SellStack Early Access! 🎉
                  </h3>
                  
                  <p className="text-gray-600 mb-8 text-lg">
                    You've secured your <strong className="text-green-600">50% commission discount (2.5% rate forever)</strong>.
                    We'll contact you at <strong className="text-blue-600">{email}</strong> before our official launch.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="inline-flex flex-col items-center bg-blue-50 text-blue-700 px-8 py-4 rounded-2xl">
                      <div className="text-sm text-blue-600">Your position in queue</div>
                      <div className="text-3xl font-bold">#{position}</div>
                    </div>
                    
                    <div className="text-sm text-gray-500">
                      Estimated access: <span className="font-semibold">2-4 weeks</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-gray-600">
                      Next steps: Check your email for confirmation and join our exclusive WhatsApp group for early birds.
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
          
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="text-white/80 mb-6">Trusted by creators from</div>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {['Amazon', 'Google', 'Microsoft', 'Adobe', 'Canva', 'Notion'].map((company, index) => (
                <div key={index} className="text-white/60 text-lg font-medium">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}