// import React from 'react'
import propTypes from 'prop-types'
import { motion } from 'framer-motion'

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Goalbox = (props) => {
  return (
    <div>
        <motion.div 
        className="container bg-white flex flex-col justify-center items-start p-8 rounded-lg shadow-md mb-4 w-[350px] md:w-[500px]"
        variants={childVariants}>
            <h2 className='bg-primary px-4 py-2 rounded-3xl mb-4 font-semibold text-white'>{props.title}</h2>
            <p className='text-sm md:text-base'>{props.description}</p>
        </motion.div>
    </div>
  )
}

Goalbox.propTypes = {
    title: propTypes.string,
    description: propTypes.string
  }

export default Goalbox
