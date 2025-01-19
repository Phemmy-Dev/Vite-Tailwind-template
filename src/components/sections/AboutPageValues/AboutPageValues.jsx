import ValueWidget from "../../widgets/ValueWidget/ValueWidget"
import advanceIcon from '../../../assets/images/icons/advance.png'
import learnIcon from '../../../assets/images/icons/learn.png'
import connectedIcon from '../../../assets/images/icons/connected.png'
import focusedIcon from '../../../assets/images/icons/focused.png'
import honestIcon from '../../../assets/images/icons/honest.png'

const AboutPageValues = () => {
  return (
    <div className="py-20">
        <h2 className="text-4xl text-center font-bold text-primary mb-10 md:text-5xl">Our Core Values</h2>
        <div className="flex flex-wrap justify-around items-center gap-10">
        <ValueWidget icon={<img src={advanceIcon} alt="Advance Icon" />} valueTitle={"Keep Advancing"} valueDesc={"Innovation empowers us to stay relevant and meet the ever-changing needs of those we serve. We are committed to maintaining a quality-focused approach while embracing change to improve our standards. By setting ambitious goals, we challenge ourselves to achieve greater impact, driving progress within Sub-Saharan Africa and beyond."}/>

        <ValueWidget icon={<img src={learnIcon} alt="Learn Icon" />} valueTitle={"Keep Learning"} valueDesc={"We rely on well-researched, proven tools to foster growth and innovation. By expanding our knowledge base, we build the confidence needed to redefine the narrative of the communities we serve. This proactive approach helps us identify challenges and create effective solutions tailored to the specific needs of every region."}/>

        <ValueWidget icon={<img src={connectedIcon} alt="Connected Icon" />} valueTitle={"Stay Connected"} valueDesc={"At Equipr, we believe in the power of community and collaboration. By connecting young minds with the right tools and opportunities, we help them unlock their potential and thrive. Each individual’s unique abilities can flourish when paired with strong support systems, empowering a network of change-makers."}/>

        <ValueWidget icon={<img src={focusedIcon} alt="Focused Icon" />} valueTitle={"Stay Focused"} valueDesc={"Our mission is fueled by a clear focus and strong partnerships. We set achievable goals in collaboration with local communities and global networks. This disciplined approach ensures we consistently deliver meaningful results that align with our vision."}/>

        <ValueWidget icon={<img src={honestIcon} alt="Honest Icon" />} valueTitle={"Be honest"} valueDesc={"Trust and transparency are at the core of everything we do. We value integrity and mutual respect, fostering relationships built on honesty. By maintaining high ethical standards, we strengthen trust within our organization, partners, and the youth we serve."}/>
        </div>
    </div>
  )
}

export default AboutPageValues
