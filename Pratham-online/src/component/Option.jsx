import React from 'react'

const Option = ({cl,p1,p2}) => {
  return (
    <div className='col-sm-6 col-12 col-lg-3 py-3 py-lg-0 px-5 px-lg-0'>
        <h4 className=''>{cl}</h4>
        <button type="button" class="btn btn-warning text-white shadow-sm my-3">{p1}</button> <br />
        <button type="button" class="btn btn-warning text-white shadow-sm">{p2}</button>
    </div>
  )
}

export default Option