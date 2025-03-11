import React from 'react'

const Hero = ({id,img1, img2, img3}) => {
  return (
    <div className='container'>
        <div className="row py-5">
        <div id={id} className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="banner1"/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="banner2"/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="banner3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    </div>
  )
}

export default Hero