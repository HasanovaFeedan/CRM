import React, { useState } from 'react';
import "./sales.scss";
import { Link } from 'react-router';
import ShipmentForm from './ShipmentForm';

const documents = Array(20).fill({
  type: "Document Name example",
  name: "Document type name",
  date: "dd / mm / yyyy",
});

const Sales = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='dashboard-main-box'>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          {/* Burada modal içeriği stopPropagation ile sarmalanıyor */}
          <div className="modal-contents" onClick={e => e.stopPropagation()}>
            <ShipmentForm onClose={() => setShowModal(false)} />
          </div>
        </div>
      )}

      <div className="dashboard-header">
        <h2>Sales List</h2>
        <div className="dashboard-header-right">
          <div className="flex-search-button">
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                style={{
                  background: "rgba(229, 229, 229, 1)",
                  border: "none",
                  outline: "none",
                  width: "100%",
                  height: "100%",
                  fontFamily: "Satoshi",
                  fontSize: "16px",
                  color: "#111A23",
                }}
              />
              <span className="search-icon">
                <svg width="18" height="18" fill="none" stroke="#111A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="8" r="7" />
                  <line x1="13" y1="13" x2="17" y2="17" />
                </svg>
              </span>
            </div>
            <div className="button-flex">
              <button className='one-b' onClick={() => setShowModal(true)}>+ New opportunity</button>
              <Link className='two-b' to={"/salesneg"}>See negotiations</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Document List */}
      <div className="doc-wrappersa">
        <div className="jus">
          <div className='doc-d'>
            <p className='doc-pa'>Document List</p>
          </div>
          <div className="doc-head">
            <select className="sort-sel">
              <option value="">Sort by</option>
              <option value="name">Name</option>
              <option value="date">Date</option>
              <option value="status">Status</option>
            </select>
            <button className="action-b">+ New Client</button>
            <button className="action-b">+ New Meeting</button>
          </div>
        </div>

        <div className="table-containersss">
          <div className="table-rows table-heads">
            <div className="cola type">Document type</div>
            <div className="cola name">Document Name</div>
            <div className="cola date">Date</div>
          </div>

          <div className="table-bodys">
            {documents.map((doc, idx) => (
              <div className="table-rows" key={idx}>
                <div className="cola type">{doc.type}</div>
                <div className="cola name">{doc.name}</div>
                <div className="cola date">{doc.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
