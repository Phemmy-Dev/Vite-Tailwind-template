// import React from 'react'
import CommunityImg from '../../assets/images/communityImg.jpg'
import Navbar from '../../components/widgets/Navbar/Navbar'
// import Footer from '../../components/sections/Footer/Footer'

const JoinPage = () => {
  return (
    <div>
        <Navbar isTransparent={false} />
        <div
        className="bg-cover bg-center relative h-[86vh] md:h-[85vh] w-full flex justify-center items-center flex-col"
        style={{ backgroundImage: `url(${CommunityImg})` }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="batcontent flex flex-col justify-center items-center gap-3 text-white z-10">
            <h1 className='text-3xl px-4 md:px-0 md:text-4xl font-semibold text-tltwhite text-center'>We're Not Accepting New Members Right Now.</h1>
                <p className='text-xs text-tltwhite w-2/3 md:w-1/2 text-justify'>Thank you for your interest in becoming a part of the Equipr community! While we truly value your enthusiasm to join us, we are currently focused on training Batch 5 members and are not accepting new applications at the moment.</p>
                <p className='w-2/3 md:w-1/2 text-xs text-justify text-tltwhite'>We encourage you to stay connected to our social media pages and keep an eye on updates about our next batch.</p>
                <p className='w-2/3 md:w-1/2 text-xs text-justify text-tltwhite'></p>
        </div>
        </div>
        {/* <Footer />   */}
    </div>
  )
}

export default JoinPage
