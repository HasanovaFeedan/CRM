import React, { useState } from 'react';
import './ShipmentForm.scss';

const ShipmentForm = () => {
   const [value, setValue] = useState('');
     const [showModal, setShowModal] = useState(false);
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
      <div className="modal-contents">
   <div className="jus-mod">
           <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
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
      <div className="option-item">
        <input 
          type="radio" 
          id="export" 
          name="direction"
          value="export"
          checked={selectedOptions.direction === 'export'}
          onChange={() => handleRadioChange('direction', 'export')}
        />
        <label htmlFor="export">Export</label>
      </div>
      <div className="option-item">
        <input 
          type="radio" 
          id="import" 
          name="direction"
          value="import"
          checked={selectedOptions.direction === 'import'}
          onChange={() => handleRadioChange('direction', 'import')}
        />
        <label htmlFor="import">Import</label>
      </div>
      <div className="option-item">
        <input 
          type="radio" 
          id="transit" 
          name="direction"
          value="transit"
          checked={selectedOptions.direction === 'transit'}
          onChange={() => handleRadioChange('direction', 'transit')}
        />
        <label htmlFor="transit">Transit</label>
      </div>
      <div className="option-item">
        <input 
          type="radio" 
          id="domestic" 
          name="direction"
          value="domestic"
          checked={selectedOptions.direction === 'domestic'}
          onChange={() => handleRadioChange('direction', 'domestic')}
        />
        <label htmlFor="domestic">Domestic</label>
      </div>
    </div>

    <div className="column" style={{flex: 1}}>
      <h4>Transport:</h4>
      <div className="option-item">
        <input 
          type="radio" 
          id="air" 
          name="transport"
          value="air"
          checked={selectedOptions.transport === 'air'}
          onChange={() => handleRadioChange('transport', 'air')}
        />
        <label htmlFor="air">Air</label>
      </div>
      <div className="option-item">
        <input 
          type="radio" 
          id="sea" 
          name="transport"
          value="sea"
          checked={selectedOptions.transport === 'sea'}
          onChange={() => handleRadioChange('transport', 'sea')}
        />
        <label htmlFor="sea">Sea</label>
      </div>
      <div className="option-item">
        <input 
          type="radio" 
          id="road" 
          name="transport"
          value="road"
          checked={selectedOptions.transport === 'road'}
          onChange={() => handleRadioChange('transport', 'road')}
        />
        <label htmlFor="road">Road</label>
      </div>
      <div className="option-item">
        <input 
          type="radio" 
          id="rail" 
          name="transport"
          value="rail"
          checked={selectedOptions.transport === 'rail'}
          onChange={() => handleRadioChange('transport', 'rail')}
        />
        <label htmlFor="rail">Rail</label>
      </div>
      <div className="option-item">
        <input 
          type="radio" 
          id="multimodal" 
          name="transport"
          value="multimodal"
          checked={selectedOptions.transport === 'multimodal'}
          onChange={() => handleRadioChange('transport', 'multimodal')}
        />
        <label htmlFor="multimodal">Multimodal</label>
      </div>
    </div>

    <div className="column" style={{flex: 1}}>
      <h4>Sub type:</h4>
      <div className="option-item">
        <input 
          type="radio" 
          id="express" 
          name="subType"
          value="express"
          checked={selectedOptions.subType === 'express'}
          onChange={() => handleRadioChange('subType', 'express')}
        />
        <label htmlFor="express">Express</label>
      </div>
      <div className="option-item">
        <input 
          type="radio" 
          id="charter" 
          name="subType"
          value="charter"
          checked={selectedOptions.subType === 'charter'}
          onChange={() => handleRadioChange('subType', 'charter')}
        />
        <label htmlFor="charter">Charter</label>
      </div>
      <div className="option-item">
        <input 
          type="radio" 
          id="general" 
          name="subType"
          value="general"
          checked={selectedOptions.subType === 'general'}
          onChange={() => handleRadioChange('subType', 'general')}
        />
        <label htmlFor="general">General</label>
      </div>
    </div>
  </div>
  <div className="emp-op"></div>
  <div className="justfy-radio">
    <p>Quotation sent</p>
   <div>
      <label>
        <input
          type="radio"
          name="yesno"
          value="yes"
          checked={value === 'yes'}
          onChange={() => setValue('yes')}
        />
       Yes
      </label>
      <label>
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
<p>Expected deal value</p>
    <select className='az' value={value} onChange={(e) => setValue(e.target.value)}>
      <option value="">Initial contact</option>
      <option value="yes">Evet</option>
      <option value="no">Hayır</option>
    </select>
  </div>
  <div className="emp-op"></div>
  <p className='pe'>Comment</p>
<div className="com-a">
    <input className='' type="text" placeholder='Add comments' />
</div>
</div>
<div className="flex-bat">
  <button className='add-sh-btn'>History negotiations</button>
<button className='add-ship-btn'>Add</button>
</div>
      </div>
  );
};

export default ShipmentForm;