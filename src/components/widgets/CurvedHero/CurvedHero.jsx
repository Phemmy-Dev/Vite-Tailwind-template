import React from 'react'
import propTypes from 'prop-types'


const CurvedHero = (props) => {
  return (
    <div className="flex justify-center items-center">
        <div 
        className="bg-cover bg-center relative w-[97%] my-10 rounded-2xl overflow-hidden flex justify-center items-center"
        style={{ backgroundImage: `url(${props.img})` }}>
              {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative z-10 text-white py-36 text-center">
                <h2 className='text-3xl font-bold text-primary md:text-6xl mb-5'>{props.heading}</h2>
                <p>{props.subHeading}</p>
            </div>
        </div>
    </div>
  )
}

CurvedHero.propTypes = {
    img: propTypes.string,
    heading: propTypes.string,
    subHeading: propTypes.string
}

export default CurvedHero
