import TeamBox from "../../widgets/TeamBox/TeamBox"
const LeadershipTeam = () => {
  return (
    <div>
      <div className="container mb-20 px-4 md:px-20">
        <p className="text-primary uppercase font-medium tracking-wide">Our Team</p>
        <h3 className="font-semibold text-3xl md:text-4xl my-3">Our Leadership Team</h3>
        <p className="text-xs ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ratione?</p>

        <div className="team_cont flex flex-wrap justify-center items-center gap-5 my-10">
            <TeamBox />
            <TeamBox />
            <TeamBox />
            <TeamBox />
            <TeamBox />
            <TeamBox />
            <TeamBox />
            <TeamBox />
        </div>
      </div>
    </div>
  )
}

export default LeadershipTeam
