import ctaImg from "../../../assets/images/homeCta.png"
import { Link } from "react-router-dom"

const CTA = () => {
    return (
        <div
        className="py-32 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${ctaImg})` }}
        >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-65"></div>

        {/* Content */}
        <div className="relative z-10 text-white flex justify-center items-center text-xs">
            <div className="container mx-auto h-full flex flex-col justify-center items-center">
                <p className="text-primary">Join the Movement to Ignite Purpose and Drive Change</p>
                <h2 className="text-3xl md:text-4xl font-bold my-2 text-center px-4 md:px-0">Ready to Transform Your Future?</h2>
                {/* <p className="text-lg mt-3">Equip-r is ready to help you take the next step in your career.</p> */}
                <Link to={"/join"} className="bg-primary px-4 py-2 text-white font-semibold text-sm mt-3 rounded-md transition-all duration-300 hover:bg-blue-400 active:scale-95">
                Get  Started
                </Link>
            </div>
        </div>
        </div>
    )
}

export default CTA
