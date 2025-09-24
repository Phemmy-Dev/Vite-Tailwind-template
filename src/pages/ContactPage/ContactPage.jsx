// import React from 'react'
import Navbar from '../../components/widgets/Navbar/Navbar'
import CurvedHero from '../../components/widgets/CurvedHero/CurvedHero'
import ContactImg from '../../assets/images/contactImg3.jpg'
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
      <CurvedHero img={ContactImg} heading={"Contact Us"} subHeading={"Get In Touch With Us"}/>

      <div className="contact_cont py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className='text-4xl md:text-5xl font-bold text-primary mb-6'>
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Ready to empower the next generation? We're here to answer your questions, 
            discuss partnerships, or help you join our global community of changemakers.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Phone Numbers Section - Featured */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border-l-4 border-primary">
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Call Us Directly</h3>
              <p className="text-gray-600">Speak with our team for immediate assistance</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group">
                <div className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">🇳🇬</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">Nigeria Office</h4>
                      <p className="text-sm text-gray-600">West Africa Hub</p>
                    </div>
                  </div>
                  <a href="tel:+2349081002507" 
                     className="block text-center text-xl font-mono bg-white rounded-lg py-3 px-4 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm">
                    +234 908 100 2507
                  </a>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-red-50 rounded-xl p-6 hover:bg-red-100 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">🇬🇧</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">UK Office</h4>
                      <p className="text-sm text-gray-600">European Hub</p>
                    </div>
                  </div>
                  <a href="tel:+447904932366" 
                     className="block text-center text-xl font-mono bg-white rounded-lg py-3 px-4 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm">
                    +44 7904 932366
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Other Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-green-500">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 transition-colors duration-300">
                    <svg className="w-8 h-8 text-green-500 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Email Us</h3>
                  <p className="text-gray-600 mb-6">Get detailed responses to your inquiries</p>
                  <a href="mailto:equiprteam@gmail.com" 
                     className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 font-medium">
                    equiprteam@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-pink-500">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-500 transition-colors duration-300">
                    <svg className="w-8 h-8 text-pink-500 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Follow Us</h3>
                  <p className="text-gray-600 mb-6">See our latest updates and community highlights</p>
                  <a href="https://www.instagram.com/equiprteam/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors duration-300 font-medium">
                    @equiprteam
                  </a>
                </div>
              </div>
            </div>

            {/* Twitter */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                    <svg className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Join Conversation</h3>
                  <p className="text-gray-600 mb-6">Connect with our community discussions</p>
                  <a href="https://x.com/EquiprTeam" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium">
                    @EquiprTeam
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Whether you're looking to join our program, become a partner, or learn more about our impact, 
                we're excited to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+2349081002507" 
                   className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
                  Call Nigeria: +234 908 100 2507
                </a>
                <a href="tel:+447904932366" 
                   className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
                  Call UK: +44 7904 932366
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
