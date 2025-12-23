'use client'

import { Check, X, IndianRupee, Zap, Star, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Pricing() {
  const plans = [
    {
      name: "Early Bird",
      price: "2.5%",
      description: "Limited time offer for first 1000 creators",
      features: [
        "2.5% commission forever",
        "Unlimited products & bandwidth",
        "Instant UPI payouts",
        "WhatsApp delivery",
        "GST invoicing",
        "Priority support",
        "Early access features",
        "No monthly fees"
      ],
      popular: true,
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      name: "Standard",
      price: "5%",
      description: "After public launch",
      features: [
        "5% commission (still 50% less than Gumroad)",
        "Unlimited products & bandwidth",
        "Instant UPI payouts",
        "WhatsApp delivery",
        "GST invoicing",
        "Email support",
        "Basic analytics",
        "No monthly fees"
      ],
      popular: false,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Gumroad",
      price: "10%+",
      description: "For comparison",
      features: [
        "10% commission + payment fees",
        "$10/month for advanced features",
        "7-day payouts (non-UPI)",
        "Email delivery only",
        "Manual GST setup",
        "Global support queue",
        "Advanced analytics (paid)",
        "Monthly subscription needed"
      ],
      popular: false,
      gradient: "from-gray-400 to-gray-600"
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pay only when you make sales. No monthly fees, no hidden charges. Just a simple percentage of your success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    🎯 MOST POPULAR
                  </div>
                </div>
              )}

              <div className={`h-full bg-white rounded-3xl shadow-xl overflow-hidden border-2 ${
                plan.popular ? 'border-yellow-400' : 'border-gray-200'
              }`}>
                {/* Plan Header */}
                <div className={`p-8 bg-gradient-to-r ${plan.gradient} text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-white/90 mb-6">{plan.description}</p>
                  
                  <div className="flex items-end justify-center">
                    <div className="text-5xl font-bold">{plan.price}</div>
                    {plan.name !== "Gumroad" && (
                      <div className="ml-2 mb-1 text-white/80">commission only</div>
                    )}
                  </div>
                  
                  {plan.name === "Early Bird" && (
                    <div className="mt-4 text-center">
                      <div className="text-sm opacity-90">Limited spots remaining</div>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        {plan.name === "Gumroad" && featureIndex >= plan.features.length - 4 ? (
                          <X className="h-5 w-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                        ) : (
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        )}
                        <span className={`${
                          plan.name === "Gumroad" && featureIndex >= plan.features.length - 4 
                            ? 'text-gray-400' 
                            : 'text-gray-700'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Example Calculation */}
                  {plan.name !== "Gumroad" && (
                    <div className="mb-8 p-4 bg-gray-50 rounded-xl">
                      <div className="text-sm text-gray-600 mb-2">Example on ₹10,000 sale:</div>
                      <div className="flex justify-between items-center">
                        <div className="text-gray-700">You receive</div>
                        <div className="text-xl font-bold text-green-600">
                          ₹{plan.name === "Early Bird" ? "9,750" : "9,500"}
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="text-gray-700">Our commission</div>
                        <div className="text-gray-600">
                          ₹{plan.name === "Early Bird" ? "250" : "500"}
                        </div>
                      </div>
                    </div>
                  )}

                  <a
                    href="#waitlist"
                    className={`block w-full text-center py-4 px-6 rounded-xl font-bold text-lg transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:shadow-2xl hover:scale-105'
                        : plan.name === "Gumroad"
                        ? 'bg-gray-200 text-gray-800 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-xl'
                    }`}
                  >
                    {plan.name === "Early Bird" ? "Join Waitlist →" : 
                     plan.name === "Standard" ? "Get Notified at Launch" : 
                     "Not Recommended"}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-green-200"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <IndianRupee className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Save 50-75%</h4>
              <p className="text-gray-600">Compared to Other platforms fees</p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Instant Payouts</h4>
              <p className="text-gray-600">Via UPI, not 7-day delays</p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Made for India</h4>
              <p className="text-gray-600">GST, UPI, WhatsApp support</p>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "What's the catch? Why only 5%?",
                a: "We're focused on the Indian market with lower operational costs. We make money when you make money - it's that simple."
              },
              {
                q: "Are there any monthly fees?",
                a: "Absolutely not. We only take a commission when you make a sale. No subscriptions, no hidden fees."
              },
              {
                q: "How do payouts work?",
                a: "95% of each sale goes instantly to your UPI ID. The 5% commission covers payment processing and platform costs."
              },
              {
                q: "What file types can I sell?",
                a: "Anything digital: PDFs, videos, audio, zip files, software, fonts, templates - no limits on file type or size."
              },
              {
                q: "Is there a free trial?",
                a: "You can sign up and upload products for free. We only charge when you make sales."
              },
              {
                q: "When are you launching?",
                a: "We're launching to waitlist members in Q1 2024. Join now to get early access and 50% discount."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}