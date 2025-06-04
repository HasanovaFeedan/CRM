import React, { useState } from 'react'
import "./task.scss"
import { GiProgression } from "react-icons/gi";
import Calendar from "../../components/Calendar";
import { Link } from 'react-router-dom';
import Add from '../../components/add/Add';
import { FaBell } from 'react-icons/fa';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import * as XLSX from 'xlsx'; 
const priorities = [
  { label: 'Low', color: '#FDE7E7', text: '#F75555' },
  { label: 'Medium', color: '#D6F5E7', text: '#1BC58D' },
  { label: 'High', color: '#FFE7D6', text: '#FF9900' },
];

const valueChart = 72
const initialTasks = [
  { name: 'Name example', priority: 'Low', deadline: '05 / 12/ 2025', person: 'Person Name', operation: 'Import', timer: '02: 08: 35' },
  { name: 'Name example', priority: 'Medium', deadline: '05 / 12/ 2025', person: 'Person Name', operation: 'Import', timer: '02: 08: 35' },
  { name: 'Name example', priority: 'High', deadline: '05 / 12/ 2025', person: 'Person Name', operation: 'Import', timer: '02: 08: 35' },
  { name: 'Name example', priority: 'Medium', deadline: '05 / 12/ 2025', person: 'Person Name', operation: 'Import', timer: '02: 08: 35' },
  { name: 'Name example', priority: 'Low', deadline: '05 / 12/ 2025', person: 'Person Name', operation: 'Import', timer: '02: 08: 35' },
  { name: 'Name example', priority: 'Low', deadline: '05 / 12/ 2025', person: 'Person Name', operation: 'Import', timer: '02: 08: 35' },
  { name: 'Name example', priority: 'Low', deadline: '05 / 12/ 2025', person: 'Person Name', operation: 'Import', timer: '02: 08: 35' },
  { name: 'Name example', priority: 'Low', deadline: '05 / 12/ 2025', person: 'Person Name', operation: 'Import', timer: '02: 08: 35' },
  { name: 'Name example', priority: 'Low', deadline: '05 / 12/ 2025', person: 'Person Name', operation: 'Import', timer: '02: 08: 35' },
];

function downloadExcel() {
  const worksheetData = [
    ['Task Name', 'Priority', 'Deadline', 'Responsible Person', 'Operation type', 'Timer'],
    ...initialTasks.map(task => [
      task.name,
      task.priority,
      task.deadline,
      task.person,
      task.operation,
      task.timer
    ])
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Tasks');

  XLSX.writeFile(workbook, 'tasks.xlsx');
}

function PriorityDropdown({ Chart, onChange }) {
  const [open, setOpen] = useState(false);
  const current = priorities.find(p => p.label === Chart) || priorities[0];
  return (
    <div className="priority-dropdown">
      <button
        className={`priority-btn ${current.label.toLowerCase()}`}
        onClick={e => { e.preventDefault(); setOpen(o => !o); }}
      >
        {current.label}
        <span style={{ display: 'inline-block', marginLeft: 4, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ▼
        </span>
      </button>
      {open && (
        <div className="priority-list">
          {priorities.map(p => (
            <div
              key={p.label}
              className={p.label.toLowerCase()}
              onClick={() => { onChange(p.label); setOpen(false); }}
            >
              {p.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TaskTable({ onAddTaskClick }) {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <div className="task-table-container">
      <div className="task-table-header">
        <h2>Tasks List</h2>
        <div className="task-table-actions">
          <button className="download-btn" onClick={downloadExcel}>Download Excel <img src="/image/download.png" alt="" /></button> 


<select className='sort-btn'>
  <option value="asc">Sort By</option>

  <option value="asc">Artan</option>
  <option value="desc">Azalan</option>
 
</select>


        
          <button style={{fontSize:"12px"}} className="add-task-link" onClick={onAddTaskClick}>+ New task</button>
        </div>
      </div>
      <table className="task-table">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Priority</th>
            <th>Deadline <span style={{ fontSize: 13 }}>▼</span></th>
            <th>Responsible Person</th>
            <th>Operation type</th>
            <th>Timer</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, idx) => (
            <tr key={idx}>
              <td>{task.name}</td>
              <td>
                <PriorityDropdown Chart={task.priority} onChange={val => {
                  setTasks(ts => ts.map((t, i) => i === idx ? { ...t, priority: val } : t));
                }} />
              </td>
              <td>{task.deadline}</td>
              <td>{task.person}</td>
              <td>{task.operation}</td>
              <td>{task.timer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const Task = () => {
  const [calendarMode, setCalendarMode] = useState('Monthly');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  return (
    <div className="dashboard-main-box">
            <div className="dashboard-header">
              <h2>Tasks</h2>
              <div className="dashboard-header-right">
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
              </div>
            </div>
   <div className="flex-task">
       <div className="direction-gr">
        <div className="flexdiv-group">
          <div className="flexcard">
            <div className="coulmn-writes">
              <h5>In Progress</h5>
              <h1 className='num'>32</h1>
            </div>
            <img src="/image/onepng.png" alt="" />
          </div>
          <div className="flexcard">
            <div className="coulmn-writes">
              <h5>Complated</h5>
              <h1 className='num'>63</h1>
            </div>
    <img style={{width:"36px"}} src="/image/icon-tt.png" alt="" />
          </div>
          <div className="flexcard">
            <div className="coulmn-writes">
              <h5>On Hold</h5>
              <h1 className='num'>45</h1>
            </div>
            <img src="/image/Vectors.png" alt="" />
          </div>
        </div>
        <div className="cedvel">
          <TaskTable onAddTaskClick={() => setIsAddModalOpen(true)} />
        </div>
      </div>
      <div className="rightrate-group">
        <div className="progress-card">
          <div className="progress-header">
            <span>Progress Rate</span>
         
          </div>
          <div style={{maxWidth:"130px",width:"100%",display:"flex", justifyContent:"center",alignItems:"center",marginLeft:"70px"}}>
            <CircularProgressbar
            value={valueChart}
            maxValue={100}
            text={`${valueChart}%`}
            circleRatio={0.75}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              strokeLinecap: "butt",
              trailColor: "#eee"
            })}
          />
          </div>
          <Calendar mode={calendarMode} />
        </div>
      </div>
   </div>
      <Add isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
}

export default Task
