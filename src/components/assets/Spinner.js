import React from 'react';
import spinner from "../assets/spinner.gif"

function Spinner() {
  return (
    <div className="spinner">
      <img src={spinner} alt="spinner"></img>
    </div>
  );
}

export default Spinner;
