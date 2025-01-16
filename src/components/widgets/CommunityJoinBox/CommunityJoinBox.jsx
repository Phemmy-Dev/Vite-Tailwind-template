// import React from 'react'
// import PropTypes from 

const CommunityJoinBox = (props) => {
  return (
    <div className='border-[1px] border-black rounded-md px-5 py-3 hover:bg-primary hover:text-white transition duration-500 w-[300px]'>
        <h4 className='font-semibold text-xl'>{props.jointitle}</h4>
        <p className='text-[10px]'>{props.joindesc}</p>
    </div>
  )
}

CommunityJoinBox.propTypes = {
    jointitle: 'string',
    joindesc: 'string'
}
export default CommunityJoinBox
