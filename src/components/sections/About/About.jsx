import {Link} from "react-router"
import VideoPlayerx from "../../widgets/VideoPlayerx/VideoPlayerx"

const About = () => {
    return (
    <>
        <div className="w-full px-5 py-10 gap-20 md:px-20 flex flex-col items-center justify-center md:flex-row bg-equiprGray">  
            {/* First Section */}
            <div className="w-[350px] md:w-1/4 flex justify-center items-center">
                <VideoPlayerx />
            </div>

            {/* Second Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-2">
            <p className="text-primary">Igniting Purpose, Transforming Futures</p>
            <h2 className="font-bold text-3xl md:text-4xl ">Empowering Young Minds to Shape Tomorrow’s Africa</h2>
            <p className="text-sm mt-3"> At Equipr, we are on a mission to unlock the untapped potential of young leaders across Sub-Saharan Africa. We connect ambitious minds with tools, opportunities, and environments that foster growth, innovation, and impact.
                <br /> <br />
                Through strategic partnerships with global organizations, we provide training, mentorship, funding, and access to cutting-edge technology, enabling youth to overcome barriers and thrive in their chosen fields of influence. Our programs are designed to inspire resilience, collaboration, and purpose—transforming local challenges into global solutions and empowering a generation to lead with confidence.
            </p>
            <Link to={"/about"}><button className="bg-primary px-4 py-2 text-white font-semibold text-sm mt-3 rounded-md transition-all duration-300 hover:bg-blue-400 active:scale-95 ">Discover More</button></Link>
            </div>
        </div>
    </>
    )
}
export default About
