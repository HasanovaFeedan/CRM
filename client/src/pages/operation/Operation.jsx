import React, { useState } from 'react'
import "./op.scss"
import { IoSearch } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";

const Operation = () => {
  const [direction, setDirection] = useState('export');
  const [transport, setTransport] = useState('air');
  const [shipmentType, setShipmentType] = useState('FCL');
  const [rateType, setRateType] = useState('spot');

  return (
    <div className='full-op'>
      <h1>New Direct Shipment</h1>
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
              onChange={() => setTransport('air')}
            />
            <span>Air</span>
            <img src="/image/dord.png" alt="" />
          </label>
          <label htmlFor="ocean">
            <input 
              type="checkbox" 
              id="ocean"
              checked={transport === 'ocean'}
              onChange={() => setTransport('ocean')}
            />
            <span>Ocean</span>
            <img src="/image/bes.png" alt="" />
          </label>
          <label htmlFor="inland">
            <input 
              type="checkbox" 
              id="inland"
              checked={transport === 'inland'}
              onChange={() => setTransport('inland')}
            />
            <span>Inland</span>
            <img src="/image/alti.png" alt="" />
          </label>
          {transport === 'ocean' && (
            <>
              <p>Shipment Type:</p>
              <label htmlFor="fcl">
                <input 
                  type="checkbox" 
                  id="fcl"
                  checked={shipmentType === 'FCL'}
                  onChange={() => setShipmentType('FCL')}
                />
                <span>FCL</span>
              </label>
              <label htmlFor="lcl">
                <input 
                  type="checkbox" 
                  id="lcl"
                  checked={shipmentType === 'LCL'}
                  onChange={() => setShipmentType('LCL')}
                />
                <span>LCL</span>
              </label>
            </>
          )}
          <p>Sub Type</p>
          <label htmlFor="subtype">
            <input 
              type="checkbox" 
              id="subtype"
              checked={shipmentType === 'FCL'}
              onChange={() => setShipmentType('FCL')}
            />
            <span>FCL</span>
            <img src="/image/dord.png" alt="" />
          </label>
          <div className="general-section">
        
          </div>
        </div>
        <div className="right-op">
           <div className="one-input-op">
              <div className="op-side">
    <label htmlFor="">Shipper</label>
              <div className="op-f">
                <input className='op-inp' type="text" placeholder="" />
            
                <span>+</span>
                <IoSearch className='seric'/>
              </div>
            </div>
            <div className="op-side">
          <label htmlFor="">Consignee</label>
              <div className="op-f">
                <input className='op-inp' type="text" placeholder="" />
         
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
                  <option value="">Shipper</option>
                  <option value="shipper1">Shipper 1</option>
                  <option value="shipper2">Shipper 2</option>
                  <option value="shipper3">Shipper 3</option>
                </select>
              </div>
            </div>
            <div className="op-side">
              <p className='opzero'>My Customer</p>
              <div className="op-f">
                <input className='op-inp' type="text" placeholder="" />
                <FaQuestionCircle className='question' />
                <span>+</span>
                <IoSearch className='seric'/>
              </div>
            </div>
          </div>
          <div className="emp-op"></div>
          <div className="pic-drc">
            <p>Picup</p>
            <label htmlFor="pickup">
              <input type="checkbox" id="pickup" />
              <span>Include Pickup</span>
            </label>
          </div>
          <div className="emp-op"></div>
          <div className="second-input-op">
            <div className="op-side">
              <label>Main Carrage</label>
              <div className="flex-operation">
                <div className="op-f">
                  <input 
                    className='op-inp' 
                    type="text" 
                    placeholder={transport === 'ocean' ? "Loading Port*" : "Gateway*"} 
                  />
                  <IoSearch className='seric'/>
                </div>
                <div className="op-f">
                  <input 
                    className='op-inp' 
                    type="text" 
                    placeholder={transport === 'ocean' ? "Shipping Line" : "Flight number"} 
                  />
                </div>
              </div>
            </div>
            <div className="op-side">
              <div className="flex-operation">
                <div className="op-f">
                  <input 
                    className='op-inp' 
                    type="text" 
                    placeholder={transport === 'ocean' ? "Discharge Port*" : "Destination*"} 
                  />
                  <IoSearch className='seric'/>
                </div>
                <div className="op-f">
                  <input 
                    className='op-inp' 
                    type="text" 
                    placeholder={transport === 'ocean' ? "Voyage No" : "MAWB"} 
                  />
                </div>
              </div>
            </div>
            <div className="op-side">
              {transport === 'ocean' ? (
                <div className="flex-operation">
                  <div className="op-f">
                    <input className='op-inp' type="text" placeholder="QBL" />
                    <IoSearch className='seric'/>
                  </div>
                  <div className="op-f">
                    <input className='op-inp' type="text" placeholder="Vessel" />
                  </div>
                </div>
              ) : (
                <div className="op-f">
                  <input className='op-inp' type="text" placeholder="Airline" />
                  <IoSearch className='seric'/>
                </div>
              )}
            </div>
          </div>
          <div className="emp-op"></div>
          <div className="pic-drc">
            <p>Delivre</p>
            <label htmlFor="delivery">
              <input type="checkbox" id="delivery" />
              <span>Include Delivre</span>
            </label>
          </div>
          <div className="emp-op"></div>

        </div>
      </div>
      <button className='crt-op'>Create</button>
    </div>
  )
}

export default Operation
