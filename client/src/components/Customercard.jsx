import React from "react";
import "./CustomerGrowthCard.css";

const CustomerGrowthCard = () => {
  return (
    <div >
    <div className="basaline">
     <div className="cg-header">Customer Growth</div>
    <div className="cg-arrow-btn">
        <span>&#8599;</span>
      </div>
 </div>
      <div className="cg-percentage">+91.7%</div>

      <div className="cg-progress-container">
        <div className="cg-progress-bar" style={{ width: "91.7%" }}>
          <span className="cg-progress-label">+91.7% / 100</span>
        </div>
      </div>

  
    </div>
  );
};

export default CustomerGrowthCard;
