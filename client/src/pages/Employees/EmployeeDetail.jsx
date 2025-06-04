import React from 'react';
import './EmployeeDetail.scss'; // We will create this file next
import { IoSearch } from 'react-icons/io5';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const EmployeeDetail = () => {
  // Placeholder data - this would come from props or state
  // const [value, setValue] = React.useState(87); // Example for dynamic value if needed
  const employee = {
    name: "Employee Name",
    id: "EMP123",
    phone: "(+994) XX XXX XX XX",
    email: "employee.email@example.com",
    address: "Employee Address, City, Country",
    avatarUrl: "", // Placeholder for avatar image URL
    kpiValue: 87, // Example KPI value
    features: [
      { name: "Feature name", value: "23.09%" },
      { name: "Feature name", value: "91%" },
      { name: "Feature name", value: "5.98%" },
      { name: "Feature name", value: "0.009" },
    ]
  };

  return (
    <div className="dashboard-main-box">

    <div className="dashboard-header-client">
        <h1>Employees <span style={{color:"gray",fontWeight:"lighter"}}> {'>'} {employee.name}</span></h1>
            <div className="dashboard-header-right-client">
              <div className="search-containers">
                <input 
                  type="text" 
                  className="search-inputs" 
                  placeholder="Search..." 
                  style={{ 
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    width: '90%',
                    height: '100%',
                    fontFamily: 'Satoshi',
                    fontSize: '16px',
                    color: '#111A23',
                    borderRadius:"20px"
                  }} 
                />
               
    <IoSearch className='sear' />
    
              </div>
      
            </div>
          </div>
      <div className="employee-detail-page">
        <div className="employee-header-section">
          <div className="employee-info-top">
            <div className="employee-avatar-section">
              <div className="employee-avatar">
                {/* <img src={employee.avatarUrl || "/path/to/default-avatar.png"} alt={employee.name} /> */}
              </div>
              <div className="employee-name-contact">
                <h1>{employee.name}</h1>
                <div className="contact-item">
                  <BsFillTelephoneFill />
                  <span>{employee.phone}</span>
                </div>
                <div className="contact-item">
                  <MdEmail />
                  <span>{employee.email}</span>
                </div>
                <div className="contact-item">
                  <IoLocationSharp />
                  <span>{employee.address}</span>
                </div>
              </div>
            </div>
            <button className="view-more-info-btn">View more information</button>
          </div>
        </div>

        <div className="employee-stats-kpi-section">
          <div className="employee-features-grid">
            {employee.features.map((feature, index) => (
              <div className="feature-box" key={index}>
                <h2>{feature.value}</h2>
                <p>{feature.name}</p>
              </div>
            ))}
          </div>
          {/* Replacing with the provided KPI panel structure */}
          <div className="kpi-panel">
            <div className="kpi-header">
              <span>KPI</span>
              <CircularProgressbar
                value={employee.kpiValue} // Using employee.kpiValue
                maxValue={100} // Assuming KPI is a percentage 0-100
                text={`${employee.kpiValue}%`}
                circleRatio={0.75}
                styles={buildStyles({
                  rotation: 1 / 2 + 1 / 8,
                  strokeLinecap: "butt",
                  trailColor: "rgba(183, 200, 255, 1)",
                  pathColor: "#FF4CE1",
                  textColor: "#eee", // This might need to be adjusted based on panel bg
                })}
              />
              <div className="kpi-update">Latest Update</div> {/* This was part of your provided JSX */}
            </div>
            {/* <div className="kpi-chart">
              <div className="kpi-chart-placeholder"></div>
            </div> */} {/* Commenting out kpi-chart as it's not in the target image's KPI section */}
            {/* Removing the kpi-features div as requested */}
          </div>
        </div>

        <div className="lists-container">
          <div className="task-list-section">
            <h2 className='gaptask'>Task List</h2>
            <div className="legend">
              <span className="legend-item complete-legend"></span> 
              <span className="legend-item incomplete-legend"></span>
            </div>
            <div className="list-table task-table">
              <div className="table-header">
                <span>Number</span>
                <span>Task Name</span>
              </div>
              {[...Array(4)].map((_, index) => (
                <div className={`table-row ${index % 2 === 0 ? 'complete-row' : 'incomplete-row'}`} key={index}>
                  <span>TASK{String(index + 1).padStart(3, '0')}</span>
                  <span>Name example</span>
                </div>
              ))}
            </div>
          </div>

          <div className="operation-list-section">
            <div className="list-header">
              <h2>Operation List</h2>
              <div className="legend">
                <span className="legend-item complete-legend"></span> Complete
                <span className="legend-item incomplete-legend"></span> Uncomplete
              </div>
            </div>
            <div className="list-table operation-table">
              <div className="table-header">
                <span>Code</span>
                <span>Operation name</span>
                <span>Operation type</span>
              </div>
              {[...Array(4)].map((_, index) => (
                <div className={`table-row ${index % 2 === 0 ? 'complete-row' : 'incomplete-row'}`} key={index}>
                  <span>3456789987</span>
                  <span>Name example</span>
                  <span>Operation type</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
