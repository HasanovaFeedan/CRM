import React, { useState } from "react";

const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function getMonthName(month) {
  return monthNames[month];
}

const Calendar = ({ mode = 'Monthly' }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState(null);

  if (mode === 'Yearly') {
    return (
      <div className="calendar-container">
        <div className="calendar-header">
          <button onClick={() => setCurrentYear(y => y - 1)}>&lt;</button>
          <span className="calendar-year">{currentYear}</span>
          <button onClick={() => setCurrentYear(y => y + 1)}>&gt;</button>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          padding: '12px 0'
        }}>
          {monthNames.map((name, idx) => (
            <div
              key={name}
              className={`calendar-month-box${idx === currentMonth && currentYear === today.getFullYear() ? ' today' : ''}`}
              style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '18px 0',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '1.1rem',
                color: '#222',
                cursor: 'pointer',
                boxShadow: idx === currentMonth && currentYear === today.getFullYear() ? '0 0 0 2px #222' : '0 1px 4px #0001',
                transition: 'all 0.2s',
              }}
              onClick={() => setCurrentMonth(idx)}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Monthly mode
  const firstDay = new Date(currentYear, currentMonth, 1).getDay() || 7;
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  let calendarRows = [];
  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = [];
    for (let j = 1; j <= 7; j++) {
      if ((i === 0 && j < firstDay) || date > daysInMonth) {
        row.push(<td key={j}></td>);
      } else {
        let classes = [];
        const isToday =
          date === today.getDate() &&
          currentMonth === today.getMonth() &&
          currentYear === today.getFullYear();
        const isPast =
          (currentYear < today.getFullYear()) ||
          (currentYear === today.getFullYear() && currentMonth < today.getMonth()) ||
          (currentYear === today.getFullYear() && currentMonth === today.getMonth() && date < today.getDate());
        if (isToday) classes.push('today');
        if (selectedDay === date) classes.push('selected');
        if (isPast) classes.push('past-day');
        row.push(
          <td
            key={j}
            className={classes.join(' ')}
            onClick={() => setSelectedDay(date)}
          >
            {date}
          </td>
        );
        date++;
      }
    }
    calendarRows.push(<tr key={i}>{row}</tr>);
    if (date > daysInMonth) break;
  }

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => {
          let m = currentMonth - 1, y = currentYear;
          if (m < 0) { m = 11; y--; }
          setCurrentMonth(m); setCurrentYear(y);
        }}>&lt;</button>
        <span className="calendar-month">{getMonthName(currentMonth)}</span>
        <span className="calendar-year">{currentYear}</span>
        <button onClick={() => {
          let m = currentMonth + 1, y = currentYear;
          if (m > 11) { m = 0; y++; }
          setCurrentMonth(m); setCurrentYear(y);
        }}>&gt;</button>
      </div>
      <table className="calendar-table">
        <thead>
          <tr>{weekDays.map(d => <th key={d}>{d}</th>)}</tr>
        </thead>
        <tbody>{calendarRows}</tbody>
      </table>
    </div>
  );
};

export default Calendar; 