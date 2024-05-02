import React, { useState, useEffect } from 'react';
import style from './DrugsDetails.module.css';
import { DRUG_DETAIL_AXIOS } from '../../servies';

const DrugDetails = () => {
  const [drugData, setDrugData] = useState([]);
  const [selectedDrug, setSelectedDrug] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
  DRUG_DETAIL_AXIOS()
      .then((res) => {
        console.log(res);
        const initialDrug = res.data.data.drugData[0]; // Get the first drug
        setDrugData(res.data.data.drugData);
        setSelectedDrug(initialDrug); // Set the first drug as selected by default
        setLoading(false); // Data has been fetched, set loading to false
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Even if there's an error, loading should be set to false
      });
  }, []);

  const handleRowClick = (drug) => {
    setSelectedDrug(drug);
  };

  return (
    <div className='container'>
     
        <div className={`row ${style.drugContainer}`}>
          <div className='col-md-4'>
            <div className={`${style.drugList} border border-3 border-secondary py-2`}>
              <h3 className='border-bottom border-3 border-secondary'>Drug Data</h3>
              {loading ? ( // Conditional rendering of loader
        <div className="text-center mt-5">
          <p>Loading...</p>
        </div>
      ) : (<>
              {drugData.map((data, i) => (
                <div
                  className={` ${selectedDrug === data ? style.drugName : style.notactive}`}
                  key={i}
                  onClick={() => handleRowClick(data)}
                >
                  {data.drugName}
                </div>
              ))}
              </>
      )}
            </div>
          </div>
          <div className='col-md-8'>
            <div className={`${style.DetialContainer} border border-3 border-secondary py-2`}>
              <h3 className='border-bottom border-3 border-secondary'>Drug Details</h3>
              {loading ? ( // Conditional rendering of loader
        <div className="text-center mt-5">
          <p>Loading...</p>
        </div>
      ) : (<>
              {selectedDrug && (
                <div className={` d-flex flex-column align-items-center `}>
                  <h6 className={style.drugDetailsHeading}>{selectedDrug.drugName}</h6>
                  <p className={style.drugDetails}>{selectedDrug.drugDetails}</p>
                </div>
              )}
              </>
      )}
            </div>
          </div>
        </div>
    </div>
  );
};

export default DrugDetails;
