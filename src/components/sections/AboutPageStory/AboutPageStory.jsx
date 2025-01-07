// import React from 'react'
import Innocent from '../../../assets/images/innocent.jpg'
import Femi from '../../../assets/images/femi.jpg'

const AboutPageStory = () => {
  return (
    <div className="flex justify-center items-center  ">
        <div className="container flex flex-col justify-center p-10 items-center w-[95%] gap-20  md:flex-row">
            {/* Left Section */}
            <div className="left_section md:w-2/5 flex gap-10 h-full items-center">
                <div className="first_img w-[100px] h-[200px] md:w-[250px] md:h-[400px]  ">
                <img src={Innocent} alt="" className="rounded-xl"/>
                </div>

                <div className="second_img w-[100px] h-[200px] md:w-[250px] md:h-[400px]  mt-24">
                <img src={Femi} alt="" className="rounded-xl"/>
                </div>
                
            </div>

            {/* Right Section */}
            <div className="right_section md:w-1/2">
                <h2 className="text-3xl font-bold text-primary md:text-6xl mb-2">Our Story</h2>
                <div className="w-24 h-1 bg-primary mb-5"></div> {/* Underline */}
                <p className="text-sm"> At Equip-r, we connect young minds with tools to enhance their search for relevance in their chosen sector of influence. We create learning opportunities, environments that allow young people to flourish and go beyond the boundaries of their current location within Sub-Saharan Africa. We achieve this by partnering with global organisations and network; providing tools to empower them: training, mentorship, grants, equipment that allows them to tap into networking environments made possible by technological advancements.
                    <br />
                    <br />
                In young people in the Sub-Saharan region, we see a formidable force full of untapped potentials due to lack of resource and opportunity. Within the right community, young people can only become a better version of themselves ensuring that future of the region is one that enjoys all the benefits that accompanies advancements in all sectors of the global stage.
                <br />
                <br />
                We see ourselves, not just as enablers of youth development; we see ourselves as nation builders and world changers.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutPageStory
