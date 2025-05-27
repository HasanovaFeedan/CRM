import React, { useState, useRef } from 'react'
import { FaClock, FaQuestionCircle } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'
import "./que.scss"
import { FaCalendarDays } from "react-icons/fa6";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Quetos = () => {
  const [direction, setDirection] = useState('export');
  const [transport, setTransport] = useState('air');
  const [selectedRate, setSelectedRate] = useState('rounding');
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const datePickerRef = useRef(null);
  const timePickerRef = useRef(null);

  const handleTransportChange = (newTransport) => {
    setTransport(newTransport);
  };

  return (
    <div className='full-op'>
      <div className="flex-op">
        <div className="left-op">
          <p>Direction:</p>
          <label htmlFor="export">
            <input
              type="checkbox"
              id="export"
              checked={direction === 'export'}
              onChange={() => setDirection('export')}
            />
            <span>Export</span>
            <img src="/image/bir.png" alt="" />
          </label>
          <label htmlFor="import">
            <input
              type="checkbox"
              id="import"
              checked={direction === 'import'}
              onChange={() => setDirection('import')}
            />
            <span>Import</span>
            <img src="/image/iki.png" alt="" />
          </label>
          <label htmlFor="domestic">
            <input
              type="checkbox"
              id="domestic"
              checked={direction === 'domestic'}
              onChange={() => setDirection('domestic')}
            />
            <span>Domestic</span>
            <img src="/image/uc.png" alt="" />
          </label>
          <p>Transport:</p>
          <label htmlFor="air">
            <input
              type="checkbox"
              id="air"
              checked={transport === 'air'}
              onChange={() => handleTransportChange('air')}
            />
            <span>Air</span>
            <img src="/image/dord.png" alt="" />
          </label>
          <label htmlFor="ocean">
            <input
              type="checkbox"
              id="ocean"
              checked={transport === 'ocean'}
              onChange={() => handleTransportChange('ocean')}
            />
            <span>Ocean</span>
            <img src="/image/bes.png" alt="" />
          </label>
          <label htmlFor="inland">
            <input
              type="checkbox"
              id="inland"
              checked={transport === 'inland'}
              onChange={() => handleTransportChange('inland')}
            />
            <span>Inland</span>
            <img src="/image/alti.png" alt="" />
          </label>
          <p>Sub Type</p>
          <label htmlFor="subtype-air">
            <input 
              type="checkbox" 
              id="subtype-air" 
              checked={transport === 'air' || transport === 'ocean'} 
              readOnly 
            />
            <span>{transport === 'air' ? 'Air' : 'FCL'}</span>
            {transport === 'air' && <img src="/image/dord.png" alt="" />}
          </label>
        </div>
        <div className="right-op">
          <div className="one-input-op">
            <div className="op-side">
              <label>Shipper</label>
              <div className="op-f">
                <input className='op-inp' type="text" placeholder="Enter name" />
                <span>+</span>
                <IoSearch className='seric'/>
              </div>
            </div>
            <div className="op-side">
              <label>Shipper</label>
              <div className="op-f">
                <input className='op-inp' type="text" placeholder="Enter name" />
                <span>+</span>
                <IoSearch className='seric'/>
              </div>
            </div>
          </div>
          <div className="emp-op"></div>
          <div className="one-input-op">
            <div className="op-side">
              <label>My Customer</label>
              <div className="op-f">
                <select className='op-inp'>
                  <option value="">Select Shipper</option>
                  <option value="shipper1">Shipper 1</option>
                  <option value="shipper2">Shipper 2</option>
                  <option value="shipper3">Shipper 3</option>
                </select>
              </div>
            </div>
            <div className="op-side">
              <p className='opzero'> My Customer</p>
              <div className="op-f">
                <input className='op-inp' type="text" placeholder="" />
                <FaQuestionCircle className='question' />
                <span>+</span>
                <IoSearch className='seric'/>
              </div>
            </div>
          </div>
          <div className="rate-selector">
            <h3 className="title">General</h3>
            <div className="option-group">
              <label className={`option ${selectedRate === 'spot' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="rate"
                  value="spot"
                  checked={selectedRate === 'spot'}
                  onChange={() => setSelectedRate('spot')}
                />
                <span className="label-text">Spot Rate</span>
              </label>

              <label className={`option ${selectedRate === 'rounding' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="rate"
                  value="rounding"
                  checked={selectedRate === 'rounding'}
                  onChange={() => setSelectedRate('rounding')}
                />
                <span className="label-text">Routing Rates</span>
              </label>
            </div>
          </div>
          {selectedRate === 'rounding' && (
          <div className="direction-f">
<div className="flex-date-div">
<div className='flex-da'>
    <p className='p-d'>Start date: <span className='zero'>aaaaa</span></p>
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
    </div>
</div>
   <div className="op-f">
    
             <select className='op-inp'>
              
                  <option value="">Incoterm</option>
            
                  
                </select>
                <FaQuestionCircle className='question-i' />
              
              </div>
</div>
  <div className="one-input-op">
        
            <div className="op-side">
      
              <div className="op-f">
                <input className='op-inp' type="text" placeholder="Expiration Days" />
      
              </div>
            </div>
                <div className="op-side">
  
              <div className="op-f">
                <select className='op-inp'>
                  <option value="">Move Type</option>
        
                </select>
              </div>
            </div>
          </div>
        <div className="flex-date-div">
<div className='flex-da'>
    <p className='p-d'>Expiration Date:</p>
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
    </div>
</div>
<div className="secenek-kapsayici">
  <input type="checkbox" id="otomatik-kapat" className="onay-kutusu" />
  <label htmlFor="otomatik-kapat" className="secenek-metin">
Close automatically as declined after
  </label>
  <input type="number" className="gun-girdisi" placeholder="" />

  <span className="ek-metin">days</span>
</div>

</div>
<div className="emp-op"></div>
        <div className="pic-drc">
            <p>Pickup</p>
            <label htmlFor="delivery">
              <input type="checkbox" id="delivery" />
              <span>Include Pickup</span>
            </label>
          </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quetos;
