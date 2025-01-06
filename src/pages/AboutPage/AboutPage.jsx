import React from 'react'
import CurvedHeroImg from '../../assets/images/footer_img.jpg'
import Navbar from '../../components/widgets/Navbar/Navbar'
import CurvedHero from '../../components/widgets/CurvedHero/CurvedHero'
import Footer from '../../components/sections/Footer/Footer'

const AboutPage = () => {
  return (
    <div>
        <Navbar isTransparent={false} />
        <CurvedHero img={CurvedHeroImg} heading={"About Us"} subHeading={"Lorem jndjsnjnjehj"}/>
        <Footer />
    </div>
  )
}

export default AboutPage
