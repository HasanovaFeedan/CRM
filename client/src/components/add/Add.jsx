import React, { useState, useRef } from 'react'
import "./add.scss"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Add = ({ isOpen, onClose }) => {
  const [selectedTaskType, setSelectedTaskType] = useState('client');
  const [deadline, setDeadline] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const datePickerRef = useRef(null);
  const modalContentRef = useRef(null);

 
  const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day} / ${month} / ${year}`;
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div
        className="modal-content"
        ref={modalContentRef}
        style={{
          background: selectedTaskType === 'client' ? '#ffffff' : '#f4f7fa'
        }}
      >
        <button className="modal-close" onClick={onClose}>&times;</button>

        {selectedTaskType !== 'client' && (
          <h2 style={{ marginBottom: 0 }}>New Task</h2>
        )}

        <div className="modal-form-wrapper">
          <div className="form-group">
            <div className="form-row">
              <span className='taskty' style={{ minWidth: 100, marginRight: 12, }}>Task Type:</span>
              <div className="task-type-group">
                <label className="task-type-option">
                  <input
                    type="radio"
                    name="taskType"
                    value="client"
                    checked={selectedTaskType === 'client'}
                    onChange={() => setSelectedTaskType('client')}
                  /> Client task
                </label>
                <label className="task-type-option">
                  <input
                    type="radio"
                    name="taskType"
                    value="internal"
                    checked={selectedTaskType === 'internal'}
                    onChange={() => setSelectedTaskType('internal')}
                  /> Internal task
                </label>
              </div>
            </div>
          </div>

          {selectedTaskType === 'client' ? (
            <form className="new-task-form">
                  <div className="form-group">
               

               
                <div className="form-row">
                  <select>
                    <option>Select Client</option>
                  </select>
                  <button type="button" className="add-new-btn">+ Add new</button>
                </div>
              </div>
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

              {/* DEADLINE FIELD WITH REACT-DATEPICKER */}
              <div className="form-group">
                <label>Deadline:</label>
                <div className="form-row" style={{ position: 'relative' }}>
                  <div className="deadline-input-wrapper">
                    <DatePicker
                      ref={datePickerRef}
                      selected={deadline}
                      onChange={date => setDeadline(date)}
                      dateFormat="dd / MM / yyyy"
                      customInput={
                        <input
                          type="text"
                          placeholder="dd / mm / yyyy"
                          className="deadline-input"
                          value={deadline ? formatDate(deadline) : ''}
                          readOnly
                          style={{ background: 'transparent' }}
                        />
                      }
                      open={calendarOpen}
                      onClickOutside={() => setCalendarOpen(false)}
                      onSelect={() => setCalendarOpen(false)}
                      popperPlacement="bottom-end"
                    />
                    <img
                      src="/image/cals.png"
                      alt="calendar"
                      className="calendar-icon"
                      style={{ position: 'absolute', right: 18, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', width: 22, height: 22 }}
                      onClick={() => setCalendarOpen(true)}
                    />
                  </div>
                </div>
              </div>


              <div className="flex-forms">
                <div className="direc-forms">
                  <p className="doc">Documents</p>
                  <div className="document">
                    <img src="/image/documebt.png" alt="document icon" />
                    <p>Select from base</p>
                  </div>
                  <button type="button">+ Add New</button>
                </div>
                <div className="direc-coment">
                  <p className="doc">Documents</p>
                  <div className='com-div'>
                    <input type="text" placeholder='Add comment' />
                  </div>
                </div>
              </div>

              <button type="submit" className="create-btn">Create</button>
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
              {/* DEADLINE FIELD WITH REACT-DATEPICKER */}
              <div className="form-group">
                <label>Deadline:</label>
                <div className="form-row" style={{ position: 'relative' }}>
                  <div className="deadline-input-wrapper">
                    <DatePicker
                      ref={datePickerRef}
                      selected={deadline}
                      onChange={date => setDeadline(date)}
                      dateFormat="dd / MM / yyyy"
                      customInput={
                        <input
                          type="text"
                          placeholder="dd / mm / yyyy"
                          className="deadline-input"
                          value={deadline ? formatDate(deadline) : ''}
                          readOnly
                          style={{ background: 'transparent' }}
                        />
                      }
                      open={calendarOpen}
                      onClickOutside={() => setCalendarOpen(false)}
                      onSelect={() => setCalendarOpen(false)}
                      popperPlacement="bottom-end"
                    />
                    <img
                      src="/image/cals.png"
                      alt="calendar"
                      className="calendar-icon"
                      style={{ position: 'absolute', right: 18, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', width: 22, height: 22 }}
                      onClick={() => setCalendarOpen(true)}
                    />
                  </div>
                </div>
              </div>
                <div className="flex-forms">
                <div className="direc-forms">
                  <p className="doc">Documents</p>
                  <div className="document">
                    <img src="/image/documebt.png" alt="document icon" />
                    <p>Select from base</p>
                  </div>
                  <button type="button">+ Add New</button>
                </div>
                <div className="direc-coment">
                  <p className="doc">Documents</p>
                  <div className='com-div'>
                    <input type="text" placeholder='Add comment' />
                  </div>
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
