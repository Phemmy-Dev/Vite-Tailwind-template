// import React from 'react'
import Goalbox from '../../widgets/Goalbox/Goalbox'
import VisionImage from '../../../assets/images/impactmetricsBG2.jpg'

const AboutPageVisionMission = () => {
  return (
    <div className='flex justify-center items-center bg-primary py-10'>
      <div className="container  w-[95%] flex  flex-col md:flex-row">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col justify-center items-center">
        <Goalbox title={"Our Vision"} description={"Create ecosystems that will bridge gaps in education and networking, creating sustainable opportunities for generations of young people and their families in Sub-Saharan Africa."}/>
        <Goalbox title={"Our Mission"} description={"To equip and empower the next generation of African leaders."}/>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2">
        <img src={VisionImage} alt=""  className='rounded-2xl'/>
        </div>
      </div>
    </div>
  )
}

export default AboutPageVisionMission
