import React from 'react'
import Option from './Option'
const OptionContainer = () => {
  return (
    <div className='container'>
        <div className="row py-5">
            <h2>Option For</h2>
            
            <Option 
            cl={"Class 10th"}
            p1={"STREAM SELECTION"}
            p2={"CAREER SELECTION"}
            />

<Option 
            cl={"Class 12th"}
            p1={"CUET CLAT"}
            p2={"IIM | IPM | AILET"}
            />

<Option 
            cl={"Study Abroad"}
            p1={"SAT CUET Coaching"}
            p2={"APPLICATION GUIDANCE"}
            />
        

        <Option 
            cl={"Up Skilling"}
            p1={"NCFM Derivatives"}
            p2={"COUNSELING DIVISION"}
            />
       </div>
        
    </div>
  )
}

export default OptionContainer