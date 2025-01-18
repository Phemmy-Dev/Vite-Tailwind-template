import TeamBox from "../../widgets/TeamBox/TeamBox"
import bolade from '../../../assets/images/leaders/bolade.jpg';
import Josh from '../../../assets/images/leaders/josh.jpg';
import Zee from '../../../assets/images/leaders/zee.jpg';
import Miji from '../../../assets/images/leaders/miji.jpg';
import Lekan from '../../../assets/images/leaders/lekan.jpg';
import Ayomipo from '../../../assets/images/leaders/ayomipo.jpg';
import Enoch from '../../../assets/images/leaders/enoch.jpg';
import Malik from '../../../assets/images/leaders/malik.jpg';
import Jerimiah from '../../../assets/images/leaders/jerimiah.jpg';
import Boluwatife from '../../../assets/images/leaders/boluwatife.jpg';
import Maurel from '../../../assets/images/leaders/maurel.jpg';
import Patricia from '../../../assets/images/leaders/patricia.jpg';
import Sharon from '../../../assets/images/leaders/sharon.jpg';

const LeadershipTeam = () => {
  return (
    <div>
      <div className="container mb-20 px-4 md:px-20">
        <p className="text-primary uppercase font-medium tracking-wide">Our Team</p>
        <h3 className="font-semibold text-3xl md:text-4xl my-3">Our Leadership Team</h3>
        <p className="text-xs ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ratione?</p>

        <div className="team_cont flex flex-wrap justify-center items-center gap-5 my-10">
            <TeamBox img={bolade} name={"Mobolade Adesokan"} title={"Founder/Director"} />
            <TeamBox img={Malik} name={"Maleek Kuye"} title={"Leader & Program Manager"}/>
            <TeamBox img={Josh} name={"Joshua Oroge"} title={"Leader"}/>
            <TeamBox img={Zee} name={"Aaliyah Zemaiye"} title={"Leader"}/>
            <TeamBox img={Miji} name={"Olamiji Ononuga"} title={"Leader"}/>
            <TeamBox img={Ayomipo} name={"Ayomipo "} title={"Leader"}/>
            <TeamBox img={Lekan} name={"Olamilekan Iwayemi"} title={"Leader"}/>
            <TeamBox img={Enoch} name={"Enoch Oladimeji"} title={"Leader"}/>
            <TeamBox img={Patricia} name={"Patricia Adetuase"} title={"Leader"}/>
            <TeamBox img={Jerimiah} name={"Ande Jeremiah Terese"} title={"Leader"}/>
            <TeamBox img={Boluwatife} name={"Boluwatife Adetuase"} title={"Leader"}/>
            <TeamBox img={Maurel} name={"Maurel Houatchueng "} title={"Leader"}/>
            <TeamBox img={Sharon} name={"Sharon Bamikole"} title={"Leader"}/>
        </div>
      </div>
    </div>
  )
}

export default LeadershipTeam
