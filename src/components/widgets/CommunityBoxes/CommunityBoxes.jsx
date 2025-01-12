import PropTypes from 'prop-types'

const CommunityBoxes = (props) => {
  return (
    <div className='w-[270px] bg-white px-3 py-2  rounded-md shadow-deep'>
      {/* <img src={props.img} alt=""  className='w-[270px] h-[230px] rounded-md'/> */}
      <h3 className='text-primary font-semibold text-2xl mt-2'>{props.comtitle}</h3>
      {/* <p className='w-[50%] text-xs text-black'>{props.comdesc}</p> */}
    </div>
  )
}

CommunityBoxes.propTypes = {
    img: PropTypes.string,
    comtitle: PropTypes.string,
    comdesc: PropTypes.string,
    }

export default CommunityBoxes
