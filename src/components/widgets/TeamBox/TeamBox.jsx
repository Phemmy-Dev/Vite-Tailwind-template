import PropTypes from 'prop-types';
const TeamBox = (props) => {
  return (
    <div>
        <div className="box flex flex-wrap items-center justify-center gap-12 relative overflow-hidden shadow-lg">
            <div className="tutor_box_img flex flex-col relative overflow-hidden">
                <img src={props.img} alt="" className=" w-40 h-48 md:w-[260px] md:h-[300px] rounded-lg transform transition-transform duration-500 hover:scale-110 hover:rounded-lg"/>
            </div>
            <div className=" absolute box_text mt-2 bottom-1 inset-x-0 flex flex-col justify-start mx-1 md:mx-3 bg-gray-300 bg-opacity-90 rounded-lg py-2 px-2 md:px-4 z-20">
                <h4 className="text-tltorange font-bold text-xs md:text-sm ">
                    {props.name}
                </h4>
                <p className=" font-normal text-xs">
                    {props.title}
                </p>
            </div>
    </div>
    </div>
  )
}

TeamBox.propTypes ={
    img: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,

}

export default TeamBox
