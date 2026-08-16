import { HeroSection }     from '@/components/landing/HeroSection'
import { ProblemSection }   from '@/components/landing/ProblemSection'
import { MethodSection }    from '@/components/landing/MethodSection'
import { FeatureGrid }      from '@/components/landing/FeatureGrid'
import { CoursesPreview }   from '@/components/landing/CoursesPreview'
import { SocialProof }      from '@/components/landing/SocialProof'
import { PricingTable }     from '@/components/landing/PricingTable'
import { FinalCTA }         from '@/components/landing/FinalCTA'

export default function LandingPage() {
  return (
    <div className="bg-bg-base overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <MethodSection />
      <FeatureGrid />
      <CoursesPreview />
      <SocialProof />
      <PricingTable />
      <FinalCTA />
    </div>
  )
}
