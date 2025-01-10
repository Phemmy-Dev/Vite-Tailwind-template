// import React from 'react'
import PropTypes from 'prop-types'

const ContactBox = (props) => {
  return (
    <div>
        <div className="box w-52 h-52 shadow-deep rounded-xl px-5 flex flex-col justify-center items-center">
            <img src={props.img}className='' alt="" />
            <h2 className='font-bold text-xl'>{props.title}</h2>
            <p className='text-sm'>{props.desc}</p>
        </div>
    </div>
  )
}

ContactBox.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string
}

export default ContactBox
