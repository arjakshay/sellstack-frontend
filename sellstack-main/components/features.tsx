'use client'

import { 
  Zap, 
  Lock, 
  TrendingUp, 
  Smartphone, 
  Globe, 
  Shield,
  FileText,
  CreditCard,
  MessageSquare,
  BarChart3,
  DownloadCloud,
  Users
} from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Instant UPI Payouts",
    description: "Receive money directly to your bank account within minutes, not days",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "5% Flat Commission",
    description: "Only 5% per sale. No hidden fees, no monthly subscriptions",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "WhatsApp Delivery",
    description: "Automatically send download links via WhatsApp to Indian customers",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "GST Compliant",
    description: "Auto-generated GST invoices for every transaction. Stay tax compliant",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Real-time Analytics",
    description: "Track sales, customer behavior, and revenue in beautiful dashboards",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: <DownloadCloud className="h-8 w-8" />,
    title: "Unlimited Hosting",
    description: "Host unlimited products, files, and videos with no storage limits",
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Built-in Marketing",
    description: "Email collection, discount codes, and affiliate marketing tools",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Made for India",
    description: "Built by Indian creators, for Indian creators. We understand your needs",
    gradient: "from-yellow-500 to-amber-500"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sell Successfully
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Packed with features that matter to Indian creators. No bloat, just what you need to grow your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600">
                  {feature.description}
                </p>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500">Perfect for</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {index % 3 === 0 && <>
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">E-books</span>
                      <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-medium">Courses</span>
                    </>}
                    {index % 3 === 1 && <>
                      <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">Templates</span>
                      <span className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-xs font-medium">Stock Photos</span>
                    </>}
                    {index % 3 === 2 && <>
                      <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-xs font-medium">Plugins</span>
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium">Fonts</span>
                    </>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800">42% More Profit</h4>
            </div>
            <p className="text-gray-600">
              Compared to Other's 10% commission, you keep significantly more of your earnings with our 5% rate.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800">Zero Setup Time</h4>
            </div>
            <p className="text-gray-600">
              Start selling in under 5 minutes. Upload your product, set a price, and share your link.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Lock className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800">Bank-level Security</h4>
            </div>
            <p className="text-gray-600">
              All transactions are PCI-DSS compliant. Your customers' data is always secure.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}