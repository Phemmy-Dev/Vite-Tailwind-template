import PropTypes from 'prop-types';
import Innocent from '../../../assets/images/innocent.jpg';
const TeamBox = (props) => {
  return (
    <div>
        <div className="box flex flex-wrap items-center justify-center gap-12 relative overflow-hidden shadow-lg">
            <div className="tutor_box_img flex flex-col">
                <img src={Innocent} alt="" className=" w-40 h-48 md:w-[260px] md:h-[300px] rounded-lg"/>
            </div>
            <div className="box_text mt-2 absolute bottom-2 inset-x-0 flex flex-col justify-start border-2 border-primary mx-3 bg-white bg-opacity-90 rounded-lg py-1 px-4 z-20">
                <h4 className="text-tltorange font-bold text-sm ">
                    Pablo
                </h4>
                <p className=" font-normal text-xs">
                    Leader
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
