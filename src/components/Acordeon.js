import React, { useState } from 'react';
import { Data } from './Data';
import './Acordeon.css'




const Acordeon = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    
      <div className="accordion-section">
        <div className="container">
          {Data.map((item, index) => {
            return (
              <>
                <div className="wrap" onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index }</span>
                </div>
                {clicked === index ? (
                  <div className="dropdown">
                    <p>{item.answer}</p>
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
   
  );
};

export default Acordeon;
