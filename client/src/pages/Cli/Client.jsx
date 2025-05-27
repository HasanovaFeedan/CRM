import React, { useState } from 'react'
import './cli.scss'
import { FaBell } from 'react-icons/fa'


const Client = () => {
  const [showModal, setShowModal] = useState(false);
  return (
   <div className="dashboard-main-box">
     <div className="dashboard-header-client">
            <h2>Client</h2>
            <div className="dashboard-header-right-client">
              <div className="search-container">
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search..." 
                  style={{ 
                    background: 'rgba(229, 229, 229, 1)',
                    border: 'none',
                    outline: 'none',
                    width: '100%',
                    height: '100%',
                    fontFamily: 'Satoshi',
                    fontSize: '16px',
                    color: '#111A23'
                  }} 
                />
                <span className="search-icon">
                  <svg width="18" height="18" fill="none" stroke="#111A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="8" r="7" />
                    <line x1="13" y1="13" x2="17" y2="17" />
                  </svg>
                </span>
              </div>
              <span className="notification-badge">
                <FaBell />

              </span>
              <button className='download-excell'>Download Excel  <img className='dow' src="/image/download.png" alt="" /></button>
            </div>
          </div>
     <div className="clients-page">
      <div className="clients-container">
    

        <div className="clients-content">
         
          <div className="client-list">
            <div className="client-list-header">
              <div className="client-list-title" style={{ fontWeight: 600, fontSize: 18 }}>Client List</div>
              <div className="client-list-actions">
                <span className="active-badge">Active</span>
                <span className="deactive-badge">Deactive</span>
                <button className="sort-btn">Sort by ▼</button>
                <button className="new-client-btn" onClick={() => setShowModal(true)}>+ New client</button>
              </div>
            </div>
          
            <table className="client-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Client Name</th>
                  <th>Country</th>
                  <th>City</th>
                  <th>Last sent</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((_, i) => (
                  <tr key={i}>
                    <td>3456789987</td>
                    <td>Name example</td>
                    <td>Country Name</td>
                    <td>City Name</td>
                    <td>Today</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
         
          <div className="active-clients">
            <div className="active-title">Active Clients</div>
            <table className="active-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Client Name</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(12)].map((_, i) => (
                  <tr key={i}>
                    <td>34567</td>
                    <td>Name example</td>
                    <td>Import</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Client
