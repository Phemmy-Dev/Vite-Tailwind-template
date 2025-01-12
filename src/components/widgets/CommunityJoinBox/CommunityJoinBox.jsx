import React from 'react'
// import PropTypes from 

const CommunityJoinBox = (props) => {
  return (
    <div className='border-[1px] border-black rounded-md px-5 py-3 hover:bg-primary hover:text-white transition duration-500 w-[300px]'>
        <h4 className='font-semibold text-xl'>{props.jointitle}</h4>
        <p className='text-xs'>{props.joindesc}</p>
    </div>
  )
}

export default CommunityJoinBox
