'use client'

import Hero from '@/components/hero'
import ComparisonTable from '@/components/comparison-table'
import Features from '@/components/features'
import HowItWorks from '@/components/how-it-works'
import Testimonials from '@/components/testimonials'
import WaitlistForm from '@/components/waitlist-form'
import StatsCounter from '@/components/stats-counter'
import BenefitsShowcase from '@/components/benefits-showcase'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <StatsCounter />
      <ComparisonTable />
      <Features />
      <HowItWorks />
      {/* <BenefitsShowcase /> */}
      <WaitlistForm />
    </div>
  )
}