import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import "./event.scss";
import Calendar from "../../components/Calendar";
import NewEventModal from "./EventsAdd";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";


const EventRow = ({ status, date, time, history, clientPerson, employeeName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  const toggleRow = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="event-row">
      <div className="event-main">
        <div>example</div>
        <div>{clientPerson}</div>
        <div>{employeeName}</div>
        <div>
          <select
            value={currentStatus}
            onChange={(e) => setCurrentStatus(e.target.value)}
            className={`status-select ${currentStatus.toLowerCase()}`}
          >
            <option value="Pending">Pending</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div>{date}</div>
        <div className="time-icon">
          <span>{time}</span>
          <span className="arrow-icon" onClick={toggleRow}>
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>
      </div>

      {isOpen && (
        <div className="event-history">
          <div className="history-header">
            <div>Event type</div>
            <div>Date</div>
            <div>Time</div>
            <div>Event result</div>
          </div>
          {history.map((item, idx) => (
            <div className="history-row" key={idx}>
              <div>{item.type}</div>
              <div>{item.date}</div>
              <div>{item.time}</div>
              <div>
                <span className={`result ${item.result.toLowerCase()}`}>
                  {item.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// 👇 Ana bileşen
const Eevents = () => {
  const [calendarMode, setCalendarMode] = useState("Monthly");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    eventType: `Event Type ${i + 1}`,
    clientPerson: `Client ${i + 1}`,
    employeeName: `Employee ${i + 1}`,
    status: i % 2 === 0 ? "Pending" : "Done",
    date: `0${(i % 9) + 1} / 06 / 2025`,
    time: `${10 + i}:00`,
    location: `Location ${i + 1}`,
    priority: i % 3 === 0 ? "High" : i % 3 === 1 ? "Medium" : "Low",
    category: `Category ${((i % 3) + 1)}`,
    notes: `Some notes for event ${i + 1}`,
    history: [
      {
        type: "Initial Contact",
        date: `0${(i % 9) + 1} / 06 / 2025`,
        time: "10:30",
        result: "Win",
      },
      {
        type: "Follow Up",
        date: `1${(i % 9) + 1} / 06 / 2025`,
        time: "11:00",
        result: "Lost",
      },
    ],
  }));

  // 👇 Excel indirme fonksiyonu burada tanımlı
  const downloadExcel = () => {
    const excelData = events.map((event) => ({
      "Event Type": event.eventType,
      "Client Person": event.clientPerson,
      "Employee Name": event.employeeName,
      "Status": event.status,
      "Date": event.date,
      "Time": event.time,
      "Location": event.location,
      "Priority": event.priority,
      "Category": event.category,
      "Notes": event.notes,
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Events");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(file, "events.xlsx");
  };

  return (
    <div className="dashboard-main-box" style={{ background: "white" }}>
      <NewEventModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="dashboard-header-client">
        <h2>Operation</h2>
        <div className="dashboard-header-right-client">
          <div className="search-containers">
            <input
              type="text"
              className="search-inputs"
              placeholder="Search..."
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                width: "90%",
                height: "100%",
                fontFamily: "Satoshi",
                fontSize: "16px",
                color: "#111A23",
                borderRadius: "20px",
              }}
            />
            <IoSearch className="sear" />
          </div>

          <button
            className="download-excell"
            onClick={downloadExcel}
            style={{
              background: "rgba(16, 185, 129, 1)",
              width: "183px",
              height: "42px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Download Excel
            <img src="/image/download.png" alt="" style={{ height: "20px" }} />
          </button>

          <button className="new-event" onClick={() => setIsModalOpen(true)}>
            + New event
          </button>
        </div>
      </div>

      <div className="container-drection">
        <div className="dashboard-container">
          <img className="background-image" src="/image/newshipment.jpg" alt="Background" />
          <div className="background-overlayy"></div>
          <div className="content">
            <div className="stats-box total">
              <div className="stats-header">
                <span>Total events</span>
                <div className="icon-wrapper">
                  <img src="/image/dateim.png" alt="Total icon" />
                </div>
              </div>
              <div className="stats-number">56</div>
              <div className="progress-bar"></div>
            </div>

            <div className="stats-box pending">
              <div className="stats-header">
                <span>Pending</span>
                <div className="icon-wrapper">
                  <img src="/image/dategreen.png" alt="Pending icon" />
                </div>
              </div>
              <div className="stats-number">21</div>
            </div>

            <div className="stats-box completed">
              <div className="stats-header">
                <span>Completed</span>
                <div className="icon-wrapper">
                  <img src="/image/stroke.png" alt="Completed icon" />
                </div>
              </div>
              <div className="stats-number">34</div>
              <div className="result-tags">
                <span className="win">Win: 25</span>
                <span className="lost">Lost: 9</span>
              </div>
            </div>
          </div>
        </div>

        <div className="calendar-div-flex">
          <Calendar mode={calendarMode} />

          <div className="event-list">
            <div className="event-list-header">
              <h3>Event List</h3>
              <select className="sort-selects">
                <option value="date">Sort by</option>
                <option value="status">Sort</option>
              </select>
            </div>

            <div className="event-header">
              <div>Event type</div>
              <div>Client Person</div>
              <div>Employee Name</div>
              <div>Status</div>
              <div>Date</div>
              <div>Time</div>
            </div>

            {events.map((event, index) => (
              <EventRow key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eevents;
