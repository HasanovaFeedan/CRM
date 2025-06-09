import React from 'react';
import './OperationDetail.scss';
import { FaPlane } from 'react-icons/fa'; 
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { useParams } from 'react-router-dom';

const handleDownloadExcel = () => {
  const data = [
    {
      'Gross Weight (kg)': '0.000',
      'Volume (CBM)': '0.000',
      'Changeable Weight (kg)': '0.000',
      'Pieces': 0,
      'A/R Invoices (MXN)': '0.000',
      'A/P Invoices (MXN)': '0.000',
      'Profit (MXN)': '0.000',
      'Open Receivables (MXN)': '0.000',
      'Open Payables (MXN)': '0.000',
      'Profit Percentage': '0.000',
    }
  ];

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Operation Detail');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const fileData = new Blob([excelBuffer], { type: 'application/octet-stream' });
  saveAs(fileData, 'operation_detail.xlsx');
};

const OperationDetail = () => {
  const { id } = useParams(); 

  return (
    <div className="dashboard-main-box">
      <div className="dashboard-header-emp">
        <h2>Operations <span>> Single Operation #{id}</span></h2>
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
  
          <button className='download-excel-dash' onClick={handleDownloadExcel}>
            Download Excel  
            <img className='dow' src="/image/download.png" alt="" />
          </button>
        </div>
      </div>

      <div className="white-sec">
        <div className="sub-header-controls">
          <div className="flight-info-bar">
            <FaPlane className="flight-icon" />
            <span className="flight-number">4567890</span>
          </div>
          <div className="sub-header-actions">
            <button className="quote-button">Go to Quote page</button>
            <div className="document-dropdown">
              <button style={{backgroundColor:"black"}} className="add-document-button">
                Add Document <span className="dropdown-arrow">&#9662;</span>
              </button>
              {/* Dropdown content */}
            </div>
          </div>
        </div>

        <main className="operation-main-content">
          <section className="info-section cargo-info">
            <h2>Cargo information</h2>
            <div className="cargo-content-wrapper">
              <div className="shipment-details">
                <h4>Shipment</h4>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="value">0.000</span>
                    <span className="label">Gross Weight(kg)</span>
                  </div>
                  <div className="info-item">
                    <span className="value">0.000</span>
                    <span className="label">Volume(CBM)</span>
                  </div>
                  <div className="info-item">
                    <span className="value">0.000</span>
                    <span className="label">Changeable Weight(kg)</span>
                  </div>
                  <div className="info-item">
                    <span className="value">0</span>
                    <span className="label">Pieces</span>
                  </div>
                </div>
              </div>
              <div className="master-details">
                <h3>Master</h3>
                <p>MAWB: </p>
                <p>Flight: </p>
                <p>Flight No: </p>
                <p>Flight Date: </p>
              </div>
            </div>
          </section>

          <section className="info-section money-info">
            <h2>Money information</h2>
            <div className="info-grid">
              <div className="info-item">
                <span className="value">0.000</span>
                <span className="label">A/R Invoices (MXN)</span>
              </div>
              <div className="info-item">
                <span className="value">0.000</span>
                <span className="label">A/P Invoices (MXN)</span>
              </div>
              <div className="info-item">
                <span className="value">0.000</span>
                <span className="label">Profit (MXN)</span>
              </div>
              <div className="info-item">
                <span className="value">0.000</span>
                <span className="label">Open Receivables (MXN)</span>
              </div>
              <div className="info-item">
                <span className="value">0.000</span>
                <span className="label">Open Payables (MXN)</span>
              </div>
              <div className="info-item">
                <span className="value">0.000</span>
                <span className="label">Profit Percentage</span>
              </div>
            </div>
            <div className="summary-values">
              <div className="summary-item">
                <span>0.00</span> <span className="currency">(MXN)</span>
              </div>
              <div className="summary-item">
                <span>0.00</span> <span className="currency">(MXN)</span>
              </div>
            </div>
          </section>

          <section className="info-section document-list">
            <h2>Document</h2>
            <ul>
              <li>Document Name Example</li>
              <li>Document Name Example</li>
              <li>Document Name Example</li>
              <li>Document Name Example</li>
              <li>Document Name Example</li>
              <li>Document Name Example</li>
              <li>Document Name Example</li>
              <li>Document Name Example</li>
              <li>Document Name Example</li>
              <li>Document Name Example</li>
            </ul>
          </section>
        </main>

        <section className="additional-info-cards">
          <div className="info-card agent-card">
            <h3>Agent: Example Cargo</h3>
            <p>Example Cargo</p>
            <p><span>&#128205;</span> Location here</p>
            <p>Country</p>
            <p><span>&#128222;</span> XXX XXX XX XX</p>
          </div>
          <div className="info-card issuing-carrier-card">
            <h3>Issuing Carrier's Agent: Name example</h3>
            <p>Example Cargo</p>
            <p><span>&#128205;</span> Location here</p>
            <p>Country</p>
            <p><span>&#128222;</span> XXX XXX XX XX</p>
          </div>
        </section>

        <section className="notes-section">
          <h2>Notes</h2>
          <textarea placeholder="Additional notes and thoughts"></textarea>
        </section>
      </div>
    </div>
  );
};

export default OperationDetail;
