// import React from 'react'
import Navbar from '../../components/widgets/Navbar/Navbar'
import CurvedHero from '../../components/widgets/CurvedHero/CurvedHero'
import CurvedHeroImg from '../../assets/images/footer_img.jpg'
import ContactBox from '../../components/widgets/ContactBox/ContactBox'
import Mail from '../../assets/images/mail.png'
import Phone from '../../assets/images/phone.png'
import Instagram from '../../assets/images/instagram.png'
import Twitter from '../../assets/images/twitter.png'
import Footer from '../../components/sections/Footer/Footer'

const ContactPage = () => {
  return (
    <div>
      <Navbar isTransparent={false} />
      <CurvedHero img={CurvedHeroImg} heading={"Contact Us"} subHeading={"Get In Touch With Us"}/>

      <div className="contact_cont  justify-between px-20 items-center mb-10">
        {/* <h1 className='text-3xl text-center font-bold mb-9'>Get in touch with us</h1> */}

        <div className="boxes flex justify-center items-center gap-20 flex-col md:flex-row">
          <a href="tel:09081002507"><ContactBox img={Phone} title="Phone" desc="09081002507"/></a>
          <a href="mailto:equiprteam@gmail.com"><ContactBox img={Mail} title="Email" desc="equiprteam@gmail.com"/></a>
          <a href="https://www.instagram.com/equiprteam/"><ContactBox img={Instagram} title="Instagram" desc="equiprteam"/></a>
          <a href="https://x.com/EquiprTeam"><ContactBox img={Twitter} title="Twitter (X)" desc="EquiprTeam"/></a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
