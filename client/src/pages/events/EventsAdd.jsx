import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarDays, FaClock } from "react-icons/fa6";
import "./eventadd.scss";
import { IoLocationSharp, IoSearch } from "react-icons/io5";

const NewEventModal = ({ isOpen, onClose }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const datePickerRef = useRef(null);
  const timePickerRef = useRef(null);
const fileInputRef = useRef(null);
  if (!isOpen) return null;


  return (
    <div className="modal-overlay">
    <div className="event-div">
   <div className="space-event">
  <h1>New Event</h1>
  <p onClick={onClose} className="close-button">×</p>
</div>

        <div className="space-white">
 <div className="flex-space">
           <input type="text" placeholder="Name" />
<select id="eventType" name="eventType">
  <option style={{color:"gray"}} value="" disabled selected>Type of event</option>
  <option value="meeting">Meeting</option>
  <option value="call">Call</option>
  <option value="visit">Visit</option>
</select>
 </div>
 <div className="emp-op"></div>
 <div className="flex-space">
  <p className="client-p">Client:</p>
  <label className="rad">
    <input className="radio-input" type="radio" name="client" value="yes" />
    Yes
  </label>
  <label className="rad">
    <input className="radio-input" type="radio" name="client" value="no" />
    No
  </label>
</div>
   
                
                  <div className="op">
                    <input className='op-inp' type="text" placeholder="Enter name" />
                    <span>+</span>
                    <IoSearch className='icn-space'/>
                  </div>
<div className="emp-op"></div>

<div className="flex-space">
           <input type="text" placeholder="operation" />
<select id="eventType" name="eventType">
  <option style={{color:"gray"}} value="" disabled selected>Priority</option>
  <option value="meeting">Meeting</option>
  <option value="call">Call</option>
  <option value="visit">Visit</option>
</select>
 </div>
<div className="flex-space-div">
<div className="none-op">
     <p>Date:</p>
          <div className="calendar-div">
           
                            <span>{startDate.toLocaleDateString('tr-TR')}</span>
                            <FaCalendarDays 
                              className='i' 
                              onClick={() => datePickerRef.current?.setOpen(true)}
                            />
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              dateFormat="dd/MM/yyyy"
                              className="date-picker-input"
                              ref={datePickerRef}
                              onClickOutside={() => datePickerRef.current?.setOpen(false)}
                            />
                          </div>
</div>
              <div className="none-op">
                            <p>Clock:</p>
                  <div className="clock-div">
                            <span>{startTime.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}</span>
                            <FaClock 
                              className='i'
                              onClick={() => timePickerRef.current?.setOpen(true)}
                            />
                            <DatePicker
                              selected={startTime}
                              onChange={(time) => setStartTime(time)}
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              dateFormat="HH:mm"
                              className="time-picker-input"
                              ref={timePickerRef}
                              onClickOutside={() => timePickerRef.current?.setOpen(false)}
                            />
                          </div>      </div>  

</div>
 <div className="flex-div-row">
  <p>Adress:</p>
       <div className="op-location">
            <input type="text" placeholder="Add Adress" />
           <IoLocationSharp className="loc" />
       </div>

 </div>
 <div className="emp-op"></div>
  <div className="flex-formss">
               <div className="direc-coment">
                  <p className="doc">Comments</p>
                  <div className='com-div'>
                    <input type="text" placeholder='Add comment' />
                  </div>
                </div>
           <div className="direc-coment">
  <p className="doc">Documents</p>
  <div className='com-divz' onClick={() => fileInputRef.current.click()}>
    <img src="/image/documebt.png" alt="document icon" />
    <p>Add Document</p>
  </div>
  <input
    type="file"
    ref={fileInputRef}
    style={{ display: 'none' }}
    onChange={(e) => {
      const file = e.target.files[0];
      if (file) {
        console.log("Selected file:", file.name);
      }
    }}
  />
</div>

              </div>

       
                </div>
                 <button  className="space-button">Create</button>


        </div>
              
    </div>
    

  );
};

export default NewEventModal;
