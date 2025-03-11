import React from 'react'
import Hero from '../component/Hero'
import Program from '../component/Program'
import OptionContainer from '../component/OptionContainer'
import WhyPratham from '../component/WhyPratham'
const Home = () => {
  return (
    <div className=''>
       <div className='banner-program'>
            <Hero 
            id={1}
            img1={"../public/ubanner3.jpeg"}
            img2={"../public/b12.jpg"}
            img3={"../public/b13.jpg"}
            />
            <Program/>
       </div>
        <Hero 
            id={2}
            img1={"../public/newbp.png"}
            img2={"../public/b12.jpg"}
            img3={"../public/b13.jpg"}
            />
       <OptionContainer/>
       <Hero 
            id={3}
            img1={"../public/bannerselectionipm1.jpg"}
            img2={"../public/b8.jpg"}
            img3={"../public/b4.jpg"}
            />

          <div className=" WhyPratham">
          <WhyPratham/>
          </div>

         
            
       
    </div>
  )
}

export default Home