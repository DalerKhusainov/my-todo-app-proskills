import React from "react";
import "./date-picker.style.css";

export default function DatePicker({ datePickerHandler }) {
  const defaultDate = () => {
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const fullDate = `${year}-${month}-${day}`;
    return fullDate;
  };
  const fullDefaultDate = defaultDate();

  return (
    <div>
      <input
        onChange={datePickerHandler}
        type="date"
        defaultValue={fullDefaultDate}
      />
    </div>
  );
}
