// import React from 'react'
import propTypes from 'prop-types'

const Goalbox = (props) => {
  return (
    <div>
        <div className="container bg-white flex flex-col justify-center items-start p-8 rounded-lg shadow-md mb-4 w-[500px]">
            <h2 className='bg-primary px-4 py-2 rounded-3xl mb-4 font-semibold text-white'>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

Goalbox.propTypes = {
    title: propTypes.string,
    description: propTypes.string
  }

export default Goalbox
