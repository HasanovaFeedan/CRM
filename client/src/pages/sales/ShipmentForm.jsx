import React, { useState } from 'react';
import './ShipmentForm.scss';

const ShipmentForm = ({ onClose }) => {
  const [value, setValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState({
    direction: '',
    transport: '',
    subType: ''
  });

  const handleRadioChange = (category, value) => {
    setSelectedOptions(prev => ({
      ...prev,
      [category]: value
    }));
  };

  return (
    <>
      <div className="jus-mod">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>New Opportunity</h2>
      </div>
      <div className="white-shipment">
        <div className="shipment-flex">
          <input type="text" placeholder='Client Name*' />
          <input type="text" placeholder='Contact Person*' />
        </div>
        <div className="emp-op"></div>
        <div className="shipment-flex">
          <p className='pe'>Type of shipment</p>
        </div>
        <div className="column-list" style={{display: 'flex', gap: '20px', width: '100%'}}>
          <div className="column" style={{flex: 1}}>
            <h4>Direction:</h4>
            {['export', 'import', 'transit', 'domestic'].map(dir => (
              <div className="option-item" key={dir}>
                <input
                  type="radio"
                  id={dir}
                  name="direction"
                  value={dir}
                  checked={selectedOptions.direction === dir}
                  onChange={() => handleRadioChange('direction', dir)}
                />
                <label htmlFor={dir}>{dir.charAt(0).toUpperCase() + dir.slice(1)}</label>
              </div>
            ))}
          </div>

          <div className="column" style={{flex: 1}}>
            <h4>Transport:</h4>
            {['air', 'sea', 'road', 'rail', 'multimodal'].map(trans => (
              <div className="option-item" key={trans}>
                <input
                  type="radio"
                  id={trans}
                  name="transport"
                  value={trans}
                  checked={selectedOptions.transport === trans}
                  onChange={() => handleRadioChange('transport', trans)}
                />
                <label htmlFor={trans}>{trans.charAt(0).toUpperCase() + trans.slice(1)}</label>
              </div>
            ))}
          </div>

          <div className="column" style={{flex: 1}}>
            <h4>Sub type:</h4>
            {['express', 'charter', 'general'].map(sub => (
              <div className="option-item" key={sub}>
                <input
                  type="radio"
                  id={sub}
                  name="subType"
                  value={sub}
                  checked={selectedOptions.subType === sub}
                  onChange={() => handleRadioChange('subType', sub)}
                />
                <label htmlFor={sub}>{sub.charAt(0).toUpperCase() + sub.slice(1)}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="emp-op"></div>
        <div className="justfy-radio">
          <p>Quotation sent</p>
          <div className='yesno-div'>
            <label className='yesno'>
              <input
                type="radio"
                name="yesno"
                value="yes"
                checked={value === 'yes'}
                onChange={() => setValue('yes')}
              />
              Yes
            </label>
            <label className='yesno'>
              <input
                type="radio"
                name="yesno"
                value="no"
                checked={value === 'no'}
                onChange={() => setValue('no')}
              />
              No
            </label>
          </div>
        </div>
        <div className="emp-op"></div>
        <div className="justfy-radio">
          <p>Expected deal value</p>
          <input className='az' type="text" placeholder='Amount' />
        </div>
        <div className="justfy-radio">
          <p>Status</p>
          <select className='az'>
            <option value="">Initial contact</option>
       
          </select>
        </div>
        <div className="emp-op"></div>
        <p className='pe'>Comment</p>
        <div className="com-a">
          <input type="text" placeholder='Add comments' />
        </div>
      </div>
      <div className="flex-bat">
        <button className='add-sh-btn'>History negotiations</button>
        <button className='add-ship-btn'>Add</button>
      </div>
    </>
  );
};

export default ShipmentForm;
