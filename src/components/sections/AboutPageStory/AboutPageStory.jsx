// import React from 'react'
import Innocent from '../../../assets/images/innocent.jpg'
import Femi from '../../../assets/images/femi.jpg'

const AboutPageStory = () => {
  return (
    <div className="flex justify-center items-center  ">
        <div className="container flex flex-col justify-center p-10 items-center  w-full md:w-[95%] gap-20  md:flex-row">
            {/* Left Section */}
            <div className="left_section md:w-2/5 flex gap-10 h-full items-center">
                <div className="first_img w-[160px] h-[200px] md:w-[250px] md:h-[400px]  ">
                <img src={Innocent} alt="" className="rounded-xl"/>
                </div>

                <div className="second_img w-[160px] h-[200px] md:w-[250px] md:h-[400px]  mt-24">
                <img src={Femi} alt="" className="rounded-xl"/>
                </div>
                
            </div>

            {/* Right Section */}
            <div className="right_section w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-primary md:text-6xl mb-2">Our Story</h2>
                <div className="w-24 h-1 bg-primary mb-5"></div> {/* Underline */}
                <p className="text-sm"> At Equipr, we are on a mission to empower young minds across Sub-Saharan Africa with the resources, opportunities, and networks they need to excel. By connecting ambitious youth to tools that enhance their relevance in their chosen sectors, we enable them to break barriers and thrive in a competitive global environment.
                    <br />
                    <br />
                    We create transformative learning experiences and supportive environments that allow young people to realize their potential, moving beyond the constraints of their current circumstances. Through strategic partnerships with global organizations, we deliver world-class training, mentorship, grants, and equipment—equipping the next generation to tap into global opportunities made possible by technological innovation.
                <br />
                <br />
                In the youth of Sub-Saharan Africa, we see a force brimming with untapped potential, often hindered by limited access to resources and opportunities. By fostering a thriving community, we enable young people to grow into the best versions of themselves, ensuring a future where the region stands strong on the global stage.
                <br /> <br />
                At Equipr, we are more than just enablers of youth development; we see ourselves as architects of progress, nation builders, and changemakers. Together, we are shaping a brighter future, one empowered leader at a time.

                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutPageStory
