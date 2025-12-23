'use client'

import { Users, IndianRupee, TrendingUp, Package } from 'lucide-react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function StatsCounter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-12 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">
              {inView ? <CountUp end={1200} duration={2} /> : '0'}+
            </div>
            <div className="text-gray-600">Creators Joined</div>
          </div>
          
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <IndianRupee className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">
              {inView ? <CountUp end={5} duration={2} /> : '0'}%
            </div>
            <div className="text-gray-600">Flat Commission</div>
          </div>
          
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">
              {inView ? <CountUp end={42} duration={2} /> : '0'}%
            </div>
            <div className="text-gray-600">More Profit</div>
          </div>
          
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Package className="h-8 w-8 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">
              {inView ? <CountUp end={0} duration={2} /> : '0'}
            </div>
            <div className="text-gray-600">Monthly Fees</div>
          </div>
        </div>
      </div>
    </section>
  )
}