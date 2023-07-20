import React from "react";
import image from "/backgroundCateringSection.png";

const CateringRequest = () => {


  return (
    <div className="cateringContainer">
      {/* <div className="cateringRequestTextContainer">
        <h1 className="cateringRequestTitle">Catering Request </h1>
      </div> */}
      <br />
      <div className="cateringRequest">
        <h1 className="catering">
          DO YOU <span className="catering2"> GOVINDA'S VEGETARIAN </span>
          CUISINE?
        </h1>
        <br /> <br />
        <div className="cateringLine">
        <span className="cateringRequestText">
          Please give us at least 10 days before the desired Catering Date   
        </span>
        <img src="../assets/spacer.png" className="spacer" />
        <button className="cateringButton" href="jgarcia@email.com">
          Request Catering
        </button>
      </div>
      </div>
      <div className="cateringButtonContainer"></div>
    </div>
  );
  
};

export default CateringRequest;