import React from 'react';
import './clientDetail.scss'; // We will create this file next
import { IoSearch } from 'react-icons/io5';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5"
import { FaUser } from "react-icons/fa";

const ClientDetail = () => {
  return (
<div className="dashboard-main-box">
        <div className="dashboard-header-client">
        <h1>Clients <span style={{color:"gray",fontWeight:"lighter"}}> > Name Surname</span></h1>
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
        <div className="client-detail-page">
      <div className="client-header">
        <div className="client-info-top">
          <div className="client-avatar-section">
            <div className="client-avatar">
              {/* Placeholder for avatar image */}
            </div>
            <div className="client-id-name">
              <span className="client-id-number">237890</span>
              <h1>Client Name</h1>
              <p>Country | City</p>
            </div>
          </div>
          <button className="view-more-info-btn">View more information</button>
        </div>
        <div className="client-contact-info">
 <div className="flex-bas">
           <div className="contact-item">
                   <BsFillTelephoneFill />
            {/* Placeholder for phone icon */}
            <span>(+994) XX XXX XX XX</span>
     
          </div>
          <div className="contact-item">
          
            <IoLocationSharp />
            {/* Placeholder for address icon */}
            <span>Client Address</span>
          </div>
 </div>
      <div className="flex-bas">
            <div className="contact-item">
                <MdEmail />
            {/* Placeholder for email icon */}
            <span>Email Address</span>
          </div>
          <div className="contact-item">
            <FaUser />
            {/* Placeholder for agent icon */}
            <span>Client / Agent</span>
          </div>
      </div>
        </div>
      </div>

      <div className="client-actions">
        <button className="action-btn">Create new operation</button>
        <button className="action-btn">Create new task</button>
      </div>

      <div className="lists-container">
        <div className="operation-list-section">
          <div className="list-header">
            <h2>Operation List</h2>
            <div className="legend">
              <span className="legend-item complete-legend"></span> Complete
              <span className="legend-item incomplete-legend"></span> Incomplete
            </div>
          </div>
          <div className="list-table operation-table">
            <div className="table-header">
              <span>Code</span>
              <span>Operation name</span>
              <span>Operation type</span>
            </div>
            {/* Repeat for each operation item */}
            {[...Array(6)].map((_, index) => (
              // Assuming 'complete' status will come from backend data
              // For now, alternating for visual example if needed, or remove class logic if backend handles it
              <div className={`table-row ${index % 2 === 0 ? 'complete-row' : 'incomplete-row'}`} key={index}>
                <span>3456789987</span>
                <span>Name example</span>
                <span>Operation type</span>
              </div>
            ))}
          </div>
        </div>

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
            {/* Repeat for each task item */}
            {[...Array(6)].map((_, index) => (
               // Assuming 'complete' status will come from backend data
              <div className={`table-row ${index % 2 === 0 ? 'complete-row' : 'incomplete-row'}`} key={index}>
                <span>TASK{String(index + 1).padStart(3, '0')}</span>
                <span>Name example</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default ClientDetail;