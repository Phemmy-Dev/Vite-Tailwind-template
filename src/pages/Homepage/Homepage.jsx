import Spacer from '../../components/sections/Spacer/Spacer'
import Navbar from '../../components/widgets/Navbar/Navbar'
import Hero from '../../components/sections/Hero/Hero'
import About from '../../components/sections/About/About'
import ImpactMetrics from '../../components/sections/ImpactMetrics/ImpactMetrics'
import CTA from '../../components/sections/CTA/CTA'
import Footer from '../../components/sections/Footer/Footer'

const Homepage = () => {
  return (
    <div>
      <Navbar isTransparent={false} />
      <Hero />
      <Spacer />
      <About />
      <Spacer/>
      <ImpactMetrics />
      <Spacer />
      <CTA />
      <Footer />
    </div>
  )
}

export default Homepage
