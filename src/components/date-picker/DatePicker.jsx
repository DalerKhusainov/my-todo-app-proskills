import React from "react";
import "./date-picker.style.css";

export default function DatePicker({ datePickerHandler }) {
  return (
    <div>
      <input onChange={datePickerHandler} type="date" />
    </div>
  );
}
