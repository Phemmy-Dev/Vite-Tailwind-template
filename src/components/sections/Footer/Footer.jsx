import { Link } from "react-router";

const Footer = () => {
  return (
    <>
    <div className="footer__container flex justify-center py-4 shadow-md bg-primary mt-10">
        <div className="footer__column__1 w-1/4">
        <h3 className="text-white text-lg font-semibold mb-2">Who are we?</h3>
            <p className="text-white md:w-10/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam ut perspiciatis quis natus nesciunt ipsa odit numquam harum eius?</p>
        </div>

        <div className="footer__column__2 w-1/5 ">
            <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
            <ul className="text-white">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/advertise">Advertise Your Event</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>    

        <div className="footer__column__3 w-1/5 ">
            <h3 className="text-lg font-semibold text-white mb-2">Legal</h3>
            <ul className="text-white">
                <li><Link to="/terms">Terms & Conditions</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
        </div>

        <div className="footer__column__4 w-1/4 ">
            <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
            <ul className="text-white">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Footer
