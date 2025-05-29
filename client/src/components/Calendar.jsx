import React, { useState } from "react";

const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Calendar = ({ selectedDate, setSelectedDate, onSelect }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(
    selectedDate ? selectedDate.getMonth() : today.getMonth()
  );
  const [currentYear, setCurrentYear] = useState(
    selectedDate ? selectedDate.getFullYear() : today.getFullYear()
  );

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  // Monday = 0, Sunday = 6
  const adjustedFirstDay = (firstDay + 6) % 7;

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDayClick = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    if (setSelectedDate) setSelectedDate(date);
    if (onSelect) onSelect(date);
  };

  const renderCalendar = () => {
    const rows = [];
    let days = [];
    for (let i = 0; i < adjustedFirstDay; i++) {
      days.push(<td key={`empty-${i}`}></td>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        day === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();
      let isSelected = false;
      if (selectedDate) {
        isSelected =
          day === selectedDate.getDate() &&
          currentMonth === selectedDate.getMonth() &&
          currentYear === selectedDate.getFullYear();
      }
      days.push(
        <td
          key={day}
          className={`${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`}
          onClick={() => handleDayClick(day)}
        >
          {day}
        </td>
      );
      if (days.length === 7) {
        rows.push(<tr key={day}>{days}</tr>);
        days = [];
      }
    }
    if (days.length > 0) {
      while (days.length < 7) {
        days.push(<td key={`empty-end-${days.length}`}></td>);
      }
      rows.push(<tr key="last">{days}</tr>);
    }
    return rows;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <span className="calendar-month">{monthNames[currentMonth]}</span>
        <span className="calendar-year">{currentYear}</span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <table className="calendar-table">
        <thead>
          <tr>
            {weekDays.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>{renderCalendar()}</tbody>
      </table>
    </div>
  );
};

export default Calendar; 