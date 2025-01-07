// import React from 'react'
import PropTypes from 'prop-types'


const ValueWidget = (props) => {
  return (
    <div>
        <div className="container w-[320px] h-[300px] flex  flex-col bg-white p-4 rounded-lg shadow-xl border-2 border-primary gap-4">
            {/* Icon */}
            <div className=" w-20 h-20  text-white rounded-full flex items-center justify-center"> 
                {props.icon}
            </div>
            {/* text */}
            <div className="">
                <h4 className='font-bold text-xl mb-2'>{props.valueTitle}</h4>
                <p className='text-xs text-justify '>{props.valueDesc}</p>
            </div>
        </div>
    </div>
  )
}

ValueWidget.propTypes = {
    icon: PropTypes.element,
    valueTitle: PropTypes.string,
    valueDesc: PropTypes.string
}

export default ValueWidget
