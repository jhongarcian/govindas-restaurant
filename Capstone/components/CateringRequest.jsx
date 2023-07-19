import React from "react";
import image from "/backgroundCateringSection.png";

const CateringRequest = () => {


  return (
    <div className="cateringContainer">
    <div className="cateringRequest">
        <h1 className="cateringRequestTitle">Catering Request</h1>
        <span className="cateringRequestText">Please give us at least 10 days before the desired Catering Date</span>
      </div>
      <div className="cateringButtonContainer">
        <button className="cateringButton">Request Catering</button>
        </div>
      </div>
  );
  
};

export default CateringRequest;