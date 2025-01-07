// import React from 'react'
import CurvedHeroImg from '../../assets/images/footer_img.jpg'
import Navbar from '../../components/widgets/Navbar/Navbar'
import CurvedHero from '../../components/widgets/CurvedHero/CurvedHero'
import AboutPageStory from '../../components/sections/AboutPageStory/AboutPageStory'
import AboutPageVisionMission from '../../components/sections/AboutPageVisionMission/AboutPageVisionMission'
import AboutPageValues from '../../components/sections/AboutPageValues/AboutPageValues'
import LeadershipTeam from '../../components/sections/LeadershipTeam/LeadershipTeam'
import Footer from '../../components/sections/Footer/Footer'

const AboutPage = () => {
  return (
    <div>
        <Navbar isTransparent={false} />
        <CurvedHero img={CurvedHeroImg} heading={"About Us"} subHeading={"Who We Are, Our Goals And More...."}/>
        <AboutPageStory />
        <AboutPageVisionMission />
        <AboutPageValues />
        <LeadershipTeam />
        <Footer />
    </div>
  )
}

export default AboutPage
