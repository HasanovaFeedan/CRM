import React from 'react';
import './clientDetail.scss';
import { IoSearch } from 'react-icons/io5';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5"
import { FaUser } from "react-icons/fa";
import { useParams } from 'react-router-dom';

const dummyClients = [
  { code: '3456789988', name: 'Name2', country: 'Country2', city: 'City2', phone: '(+994) XX XXX XX XX', email: 'email2@example.com', address: 'Address 2', agent: 'Agent 2' },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', phone: '(+994) YY YYY YY YY', email: 'email@example.com', address: 'Address', agent: 'Agent' },

];

const ClientDetail = () => {
  const { code } = useParams();

  const client = dummyClients.find(c => c.code === code);

  if (!client) {
    return (
      <div className="dashboard-main-box">
        <h2>Client with code "{code}" not found.</h2>
      </div>
    );
  }

  return (
    <div className="dashboard-main-box">
      <div className="dashboard-header-client">
        <h1>Clients <span style={{color:"gray",fontWeight:"lighter"}}> &gt; {client.name}</span></h1>
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
              <div className="client-avatar"></div>
              <div className="client-id-name">
                <span className="client-id-number">{client.code}</span>
                <h1>{client.name}</h1>
                <p>{client.country} | {client.city}</p>
              </div>
            </div>
            <button className="view-more-info-btn">View more information</button>
          </div>

          <div className="client-contact-info">
            <div className="flex-bas">
              <div className="contact-item">
                <BsFillTelephoneFill />
                <span>{client.phone}</span>
              </div>
              <div className="contact-item">
                <IoLocationSharp />
                <span>{client.address}</span>
              </div>
            </div>
            <div className="flex-bas">
              <div className="contact-item">
                <MdEmail />
                <span>{client.email}</span>
              </div>
              <div className="contact-item">
                <FaUser />
                <span>{client.agent}</span>
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
              {[...Array(6)].map((_, index) => (
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
              {[...Array(6)].map((_, index) => (
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
