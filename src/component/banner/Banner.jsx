import React from 'react'
import style from './Banner.module.css'
import { FaSearch } from "react-icons/fa"
const Banner = () => {
  return (
    <div>
    <div className={`py-2 ${style.heading}`}>
      <h4>Your one stop solution for<span className={style.headingColor}> Medical Learning & Updates </span></h4>
      </div>
      <div className={`row gx-0 py-2 ${style.subheading}`}>
<div className='col-md-6'>
<h4>Get knowledge of the<span className={style.headingColor}> Approved Drugs</span></h4>
</div>
<div className='col-md-6'>
  <div className=''>
    <input className= ' position-relative border border-none px-4 py-1 rounded-pill pr-4' type='text' placeholder="enter drugs type" />
      <FaSearch style={{ position: 'relative', top: '0%', right: '35px' }} />
  </div>
</div>



</div>
      </div>
  
  )
}

export default Banner
