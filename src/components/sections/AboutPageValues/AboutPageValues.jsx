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
        <ValueWidget icon={<img src={advanceIcon} alt="Advance Icon" />} valueTitle={"Keep Advancing"} valueDesc={"Innovations allow us to stay relevant and to continue to meet the needs of those we serve. We strive to be quality-focused and open to change that would improve our standards continuously. We set ourselves challenges that motivates us to go even further."}/>

        <ValueWidget icon={<img src={learnIcon} alt="Learn Icon" />} valueTitle={"Keep Learning"} valueDesc={"We work with tools that are well-researched and have been proven effective. By increasing our knowledgebase, we have the confidence to change the narrative of the regions we support. We can also identify risks and resolve issues peculiar to each community within the region"}/>

        <ValueWidget icon={<img src={connectedIcon} alt="Connected Icon" />} valueTitle={"Stay Connected"} valueDesc={"People are an important part of every sector and people need people. Each person is unique in their giftings and their abilities. In order to match young people with the right tools and opportunities, we must be aware of how to tap their God-given potential and connect them with the right support systems."}/>

        <ValueWidget icon={<img src={focusedIcon} alt="Focused Icon" />} valueTitle={"Stay Focused"} valueDesc={"As a team, we focus on our mission by setting achievable goals in collaboration with the communities we serve and our global partners."}/>

        <ValueWidget icon={<img src={honestIcon} alt="Honest Icon" />} valueTitle={"Be honest"} valueDesc={"Trust is one of the most valuable assets within any organisation or relationship. We are intentionally transparent. We model integrity and respect within our organisations and with our partners."}/>
        </div>
    </div>
  )
}

export default AboutPageValues
