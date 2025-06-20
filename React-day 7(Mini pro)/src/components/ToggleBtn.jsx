import React, { useState } from 'react';
import './ToggleBtn.css';

const ToggleBtn = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  return (
    // <div className="toggle-container">
    //   <button className={`toggle-btn ${isOn ? 'on' : 'off'}`} onClick={toggleHandler}>
    //     {isOn ? 'ON' : 'OFF'}
    //   </button>
    // </div>


    <div className="toggle-container">
     <button className={`toggle-btn ${isOn ? "on" : "off"}`} onClick={toggleHandler}>
     {isOn ? "ON": "OFF"}
     </button>
    </div>
  );
};

export default ToggleBtn;
