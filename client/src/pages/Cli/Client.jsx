
import React, { useState } from 'react'
import './cli.scss'
import { FaBell } from 'react-icons/fa'
import { IoSearch } from "react-icons/io5";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const dummyClients = [
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: false },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: false },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: true },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: false },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: true },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: true },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: true },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: false },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: false },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: true },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: true },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: true },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: true },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: true },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: true },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: false },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: false },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: false },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: false },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: false },
  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: false },

  { code: '3456789987', name: 'Name', country: 'Country', city: 'City', lastSent: 'Today', active: true },



];

const downloadExcel = () => {
  const worksheetData = [
    ['Code', 'Name', 'Country', 'City', 'Last Sent', 'Active'],
    ...dummyClients.map(c => [
      c.code,
      c.name,
      c.country,
      c.city,
      c.lastSent,
      c.active ? 'Active' : 'Deactive'
    ])
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Clients');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const data = new Blob([excelBuffer], { type: 'application/octet-stream' });

  saveAs(data, 'clients.xlsx');
};

const Client = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('active');

  const activeClients = dummyClients.filter(c => c.active);

  return (
    <div className="dashboard-main-box-client">
   
      <div className="dashboard-header-client">
        <h2>Clients</h2>
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
          <button className="notification-badge"><FaBell /></button>
          <button
            className="download-excell"
            style={{
              background: 'rgba(16, 185, 129, 1)',
              width: '183px',
              height: '42px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={downloadExcel}
          >
            Download Excel
            <img src="/image/download.png" alt="" style={{ height: '20px' }} />
          </button>
        </div>
      </div>
   
      <div className="client-container">
     
        <div className="client-list-section">
          <div className="client-list-header">
            <h3>Client List</h3>
            <div className="client-legend">
              <span className="legend-box active"></span> Active
              <span className="legend-box deactive"></span> Deactive
            </div>
            <div className="client-actions">
              <select className="sort-select">
                <option>Sort by</option>
                <option>Name</option>
                <option>Country</option>
              </select>
              <button className="new-client-button" onClick={() => setShowModal(true)}>+ New client</button>
            </div>
          </div>
          <div className="client-table">
            <div className="table-header">
              <div>Code</div>
              <div>Client Name</div>
              <div>Country</div>
              <div>City</div>
              <div>Last sent</div>
            </div>
            {dummyClients.map((client, idx) => (
              <div className={`table-row ${client.active ? 'active-row' : 'deactive-row'}`} key={idx}>
                <div>{client.code}</div>
                <div>{client.name}</div>
                <div style={{ fontWeight: 600 }}>{client.country}</div>
                <div>{client.city}</div>
                <div>{client.lastSent}</div>
              </div>
            ))}
          </div>
        </div>
    
        <div className="active-clients-section">
          <div className="active-header">
            <h4>Active Clients</h4>
            <span className="see-all">See all</span>
          </div>
          <div className="active-client-table">
            <div className="table-header">
              <div>Code</div>
              <div>Client Name</div>
              <div>Operation</div>
            </div>
            {activeClients.map((client, idx) => (
              <div className="table-row" key={idx}>
                <div>{client.code.slice(0,5)}</div>
                <div>{client.name}</div>
                <div className="import-text">Import</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Client
