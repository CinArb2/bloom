import AboutSection from './AboutSection'
import ConsultationSection from './ConsultationSection'
import FeaturedSection from './FeaturedSection'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import TestimonialCard from './Testimonials'

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <AboutSection />
      <FeaturedSection />
      <TestimonialCard />
      <ConsultationSection />
      {/* <CTASection /> */}
      <Footer />
    </div>
  )
}

export default App
