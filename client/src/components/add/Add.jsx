import React, { useState } from 'react'
import "./add.scss"

const Add = ({ isOpen, onClose }) => {
  const [selectedTaskType, setSelectedTaskType] = useState('client');
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2 style={{marginBottom: 0}}>New Task</h2>
        <div className="modal-form-wrapper">
          <div className="form-group">
            <div className="form-row">
              <span style={{fontWeight:500, minWidth:100, marginRight:12}}>Task Type:</span>
              <div className="task-type-group">
                <label className="task-type-option">
                  <input type="radio" name="taskType" value="client" checked={selectedTaskType === 'client'} onChange={() => setSelectedTaskType('client')} /> Client task
                </label>
                <label className="task-type-option">
                  <input type="radio" name="taskType" value="internal" checked={selectedTaskType === 'internal'} onChange={() => setSelectedTaskType('internal')} /> Internal task
                </label>
              </div>
            </div>
          </div>
          {selectedTaskType === 'client' ? (
            <form className="new-task-form">
            rgwafe
            </form>
          ) : (
                <form className="new-task-form">
              <div className="form-group">
                <label>Select Project:</label>
                <div className="form-row">
                  <select>
                    <option>Select Project</option>
                  </select>
                  <button type="button" className="add-new-btn">+ Add new</button>
                </div>
              </div>
              <div className="form-group">
                <label>Operation Type:</label>
                <div className="form-row">
                  <select>
                    <option>Choose Operation type</option>
                  </select>
                  <button type="button" className="add-new-btn">+ Add new</button>
                </div>
              </div>
              <div className="form-group">
                <label>Responsible Person:</label>
                <div className="form-row">
                  <select>
                    <option>Person name</option>
                  </select>
                  <button type="button" className="add-new-btn">+ Add new</button>
                </div>
              </div>
              <div className="form-group">
                <label>Deadline:</label>
                <div className="form-row">
                  <input type="text" placeholder="dd / mm / yyyy" style={{flex: 1}} />
                  <span className="calendar-icon">📅</span>
                </div>
              </div>
              <button type="submit" className="create-btn">Create</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Add
