import React from 'react'
import './Employesadd.scss'

const Employesadd = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-col-arxa">
      <div className="modal-ici">
        <div className="modal-basliq-alani">
          <span className="modal-basliq">New Employee</span>
          <button className="modal-bagla" onClick={onClose}>×</button>
        </div>
        <div className="isci-form-qutu">
          <form className="isci-formu">
            <div className="form-setr">
              <input className="form-girdi" type="text" placeholder="Name" />
              <input className="form-girdi" type="text" placeholder="Surname" />
            </div>
            <div className="form-setr">
              <input className="form-girdi" type="text" placeholder="Username" />
              <input className="form-girdi" type="password" placeholder="Password" />
            </div>
            <div className="bos"></div>
            <div className="form-setr">
              <select className="form-girdi">
                <option>Position</option>
              </select>
              <select className="form-girdi">
                <option>Role</option>
              </select>
            </div>
            <div className="bos"></div>
            <div className="form-setr">
              <input className="form-girdi" type="text" placeholder="Phone Number" />
              <input className="form-girdi" type="text" placeholder="Corporate phone number" />
            </div>
            <div className="form-setr">
              <input className="form-girdi" type="email" placeholder="E-mail" />
              <input className="form-girdi" type="email" placeholder="Corporate E-mail" />
            </div>
            <div className="form-setr">
              <input className="form-girdi" type="text" placeholder="City" />
              <input className="form-girdi" type="text" placeholder="Adress" />
            </div>
            <div className="form-setr">
              <input className="form-girdi" type="text" placeholder="Since" />
              <div className="foto-yukle-alani">
                <label htmlFor="foto-yukle" className="foto-yukle-label">
                  <span className="foto-yukle-ikon">📷</span>
                  Add Photo
                </label>
                <input id="foto-yukle" type="file" style={{ display: 'none' }} />
              </div>
            </div>
          </form>
        </div>
        <button className="olustur-btn" type="submit">Create</button>
      </div>
    </div>
  )
}

export default Employesadd
