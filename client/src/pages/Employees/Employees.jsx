import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import "./Employes.scss";
import Employesadd from '../../components/add/Employesadd';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { useNavigate } from 'react-router-dom';

const downloadExcel = () => {
  const employees = [
    { name: 'Name', surname: 'Surname', activeTasks: 24, activeShipments: 36 },
    { name: 'Name', surname: 'Surname', activeTasks: 24, activeShipments: 36 },
    { name: 'Name', surname: 'Surname', activeTasks: 24, activeShipments: 36 },
    { name: 'Name', surname: 'Surname', activeTasks: 24, activeShipments: 36 },
    { name: 'Name', surname: 'Surname', activeTasks: 24, activeShipments: 36 },
    { name: 'Name', surname: 'Surname', activeTasks: 24, activeShipments: 36 },
  ];

  const worksheetData = [
    ['Name', 'Surname', 'Active Tasks', 'Active Shipments'],
    ...employees.map(e => [e.name, e.surname, e.activeTasks, e.activeShipments])
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Employees');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const data = new Blob([excelBuffer], { type: 'application/octet-stream' });

  saveAs(data, 'employees.xlsx');
};

const Employees = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const value = 320;

  // Backend için örnek data
  const employees = [
    { id: '1', name: 'John', surname: 'Doe', activeTasks: 24, activeShipments: 36, kpi: 32 },
    { id: '2', name: 'Jane', surname: 'Smith', activeTasks: 15, activeShipments: 40, kpi: 45 },
    { id: '3', name: 'Michael', surname: 'Johnson', activeTasks: 30, activeShipments: 20, kpi: 55 },
    { id: '4', name: 'Emily', surname: 'Davis', activeTasks: 18, activeShipments: 22, kpi: 62 },
    { id: '5', name: 'David', surname: 'Brown', activeTasks: 27, activeShipments: 35, kpi: 41 },
    { id: '6', name: 'Sarah', surname: 'Wilson', activeTasks: 22, activeShipments: 30, kpi: 36 },
  ];

  const handleCardClick = (employeeId) => {
    navigate(`/employees/detail/${employeeId}`);
  };

  return (
    <div className='dashboard-main-box'>
      <div className="dashboard-header-emp">
        <h2>Employees</h2>
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
          <button className='download-excel-dash' onClick={downloadExcel}>
            Download Excel  <img className='dow' src="/image/download.png" alt="" />
          </button>
        </div>
      </div>
      <div className="employees-container">
        <div className="dr-emp">
          <div className="kpi-panel">
            <div className="kpi-header">
              <span>KPI</span>
              <CircularProgressbar
                value={value}
                maxValue={1000}
                text={`${value}%`}
                circleRatio={0.75}
                styles={buildStyles({
                  rotation: 1 / 2 + 1 / 8,
                  strokeLinecap: "butt",
                  trailColor: "rgba(183, 200, 255, 1)",
                  pathColor: "#FF4CE1",
                  textColor: "#eee",
                })}
              />
              <div className="kpi-update">Latest Update</div>
            </div>
            <div className="kpi-chart">
              <div className="kpi-chart-placeholder"></div>
            </div>
            <div className="kpi-features">
              <div className="kpi-feature-box">
                <div>32%</div>
                <span>Feature Name</span>
              </div>
              <div className="kpi-feature-box">
                <div>12%</div>
                <span>Feature Name</span>
              </div>
              <div className="kpi-feature-box">
                <div>48%</div>
                <span>Feature Name</span>
              </div>
              <div className="kpi-feature-box">
                <div>26%</div>
                <span>Feature Name</span>
              </div>
            </div>
          </div>
          <button className="see-kpi-details">See all KPI details</button>
        </div>

        <div className="employee-list-section">
          <div className="employee-list-header">
            <span>Employee List</span>
            <div className="employee-list-actions">
              <select className="sort-by-select">
                <option>Sort by</option>
              </select>
              <button className="new-employee-btn" onClick={openModal}>+ New employee</button>
            </div>
          </div>

          <div className="employee-cards-grid">
            {employees.map(emp => (
              <div
                className="employee-card"
                key={emp.id}
                onClick={() => handleCardClick(emp.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="employee-card-top">
                  <div className="employee-avatar"></div>
                  <div className="employee-name-surname-box">
                    <div className="employee-name">{emp.name}</div>
                    <div className="employee-surname">{emp.surname}</div>
                  </div>
                  <div className="employee-kpi">KPI: <span>{emp.kpi}%</span></div>
                </div>
                <div className="employee-info">
                  <div className="employee-details-row">
                    <span className="employee-details-label">Active Tasks Number</span>
                    <span className="employee-details-value">{emp.activeTasks}</span>
                  </div>
                  <div className="employee-details-row">
                    <span className="employee-details-label">Active Shipments Number</span>
                    <span className="employee-details-value">{emp.activeShipments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Employesadd isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Employees;
