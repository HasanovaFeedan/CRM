import React from 'react';
import { FaUser } from 'react-icons/fa';

const SalesNeg = () => {
  const dummyData = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    customerName: `Customer ${index + 1}`,
    method: 'Email',
    questions: [
      '                                 Pellentesque luctus, purus vitae pellentesque dignissim, nibh sem commodo arcu, eget fringilla nulla mi a nisl. Nunc consectetur orci ut condimentum elementum.?',
      'Can we schedule a demo?',
      'Is there a trial period?',
    ],
  }));

  return (
    <div className="dashboard-main-box">
      <div className="dashboard-header">
        <h2>
          Sales <span style={{ color: 'gray',fontWeight:"400" }}> &gt; Negotiations</span>
        </h2>
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
                color: '#111A23',
              }}
            />
            <span className="search-icon">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="#111A23"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="8" r="7" />
                <line x1="13" y1="13" x2="17" y2="17" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="customer-cards-div">
        <div className="customer-header">
          <p>Negotiations</p>
          <button>+ Add Negotiations</button>
        </div>

        <div className="cards-grid">
          {dummyData.map((neg) => (
            <div className="customer-card" key={neg.id}>
              <div className="card-topbar">
                <span className="label-icon">
                  <FaUser /> Customer:
                </span>
                <span className="customer-name">{neg.customerName}</span>
              </div>

              <div className="card-bodye">
                <div className="negotiation-method">
                  <p>Way of negotiations:</p>
                  <a href="#" className="email-link">
                    {neg.method}
                  </a>
                </div>

                <hr className="divider" />

                <div className="question-section">
                  <p>List of questions/comments:</p>
                  {neg.questions.map((q, i) => (
                    <div className="question-item" key={i}>
                      <b>{i + 1}. Question text?</b>{' '}
                      <span className="question-desc">{q}</span>
                    </div>
                  ))}
                </div>

                <hr className="divider" />

                <div className="result-section">
                  <div className="result-title">Result:</div>
                  <div className="result-box">
                    <input
                      className="result-inp"
                      type="text"
                      placeholder="Additional notes and thoughts"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesNeg;
