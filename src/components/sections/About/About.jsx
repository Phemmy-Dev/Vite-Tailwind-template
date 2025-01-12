import {Link} from "react-router"
const About = () => {
    return (
    <>
        <div className="w-full px-5 py-10 md:px-20 flex flex-col items-center justify-center md:flex-row bg-equiprGray">  
            {/* First Section */}
            <div className="w-full md:w-1/2 flex justify-center items-center">jdjdjdj</div>

            {/* Second Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-2">
            <p className="text-primary">We are igniting purpose</p>
            <h2 className="font-bold text-4xl ">Lorem ipsum dolor, sit amet consectetur adipisicing elit!</h2>
            <p className="text-sm mt-3"> At Equip-r, we connect young minds with tools to enhance their search for relevance in their chosen sector of influence. We create learning opportunities, environments that allow young people to flourish and go beyond the boundaries of their current location within Sub-Saharan Africa. We achieve this by partnering with global organisations and network; providing tools to empower them: training, mentorship, grants, equipment that allows them to tap into networking environments made possible by technological advancements..</p>
            <Link to={"/"}><button className="bg-primary px-4 py-2 text-white font-semibold text-sm mt-3 rounded-md ">Discover More</button></Link>
            </div>
        </div>
    </>
    )
}
export default About
