import React from 'react'
import style from './ExploreMore.module.css'
const ExploreMore = () => {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-4'>
            <h5 className={style.exploreHeading}>Explore More on Hidoc Dr</h5>
        </div>
        <div className='col-md-4 text-start'>
            <p className={style.criticalCare}>Critical Care . 10Mar 2023</p>
        </div>
        <div className='col-md-4  text-start'>
        <p className={style.criticalCare}>CriticalCare . 28Mar 2023</p>

        </div>

      </div>
      <div className='row'>
        <div className='col-md-4 text-start'>
            <p className={style.criticalCare}>News</p>
            <h3 className={style.description}>Education:Diabeties and tooth loss together cause cognitive impairment</h3>
            <p>Diabeties and tooth loss together cause cognitive impairment and cognitive decline in older adults,according to new research
            published in a special issue of the journal of dental Research</p>
            <p>Posted on 15 Mar 2023</p>
        </div>
        <div className='col-md-4 text-start'>
        <h3 className={style.description1}>Discovering Arthrogryposis understanding the Causes and symptoms and Diagnosis </h3>
<p>Arthrogryposis also known as Curvature of the joints, is a rare condition that affects the joints in the body</p>
        </div>
        <div className='col-md-4 text-start'>
        <h3 className={style.description1}>The science behind Crest Disease:Exploring the uderlying mechanisms</h3>
        <hr/>
        <p className={style.criticalCare}>CriticalCare . 22Feb 2023</p>
    <h3 className={style.description1}>Comprehensive Guide to Apache Scoring:how it works and why  uou should use it</h3>
        </div>

      </div>
    </div>
  )
}

export default ExploreMore
