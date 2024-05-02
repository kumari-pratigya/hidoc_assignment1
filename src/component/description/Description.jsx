import React, { useState } from 'react';
import style from './Description.module.css';
import {drugsData} from '../../mockData/index';

const Description = () => {
  const [selectedDrugIndex, setSelectedDrugIndex] = useState(0);

  const handleDrugButtonClick = (index) => {
    setSelectedDrugIndex(index);
  };

  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-md-6'>
          <p>{drugsData[selectedDrugIndex].description}</p>
        </div>
        <div className='col-md-6'>
        <div className={`row py-2 ${style.ButtonRow}`}>

          {drugsData.map((name, i) => (
              <div  key={i} className=' col-xl-4 col-sm-6 py-1  col-sm-4'>
                <button className={`btn btn-outline-secondary ${style.button}`} onClick={() => handleDrugButtonClick(i)}>{name.title}</button>
              </div>
              
          ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Description;
