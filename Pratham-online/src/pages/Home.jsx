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
            img1={"../src/assets/ubanner3.jpeg"}
            img2={"../src/assets/b12.jpg"}
            img3={"../src/assets/b13.jpg"}
            />
            <Program/>
       </div>
        <Hero 
            id={2}
            img1={"../src/assets/newbp.png"}
            img2={"../src/assets/b12.jpg"}
            img3={"../src/assets/b13.jpg"}
            />
       <OptionContainer/>
       <Hero 
            id={3}
            img1={"../src/assets/bannerselectionipm1.jpg"}
            img2={"../src/assets/b8.jpg"}
            img3={"../src/assets/b4.jpg"}
            />

          <div className=" WhyPratham">
          <WhyPratham/>
          </div>

         
            
       
    </div>
  )
}

export default Home