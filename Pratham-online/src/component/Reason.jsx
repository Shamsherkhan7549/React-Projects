import React from 'react'

const Reason = ({icon, heading, paragraph}) => {
  return (
    <div className='col-lg-4 col-md-6 col-12  py-3'>
        <i className={icon}></i>
        <h5>{heading}</h5>
         <p>{paragraph}</p>
    </div>
  )
}

export default Reason