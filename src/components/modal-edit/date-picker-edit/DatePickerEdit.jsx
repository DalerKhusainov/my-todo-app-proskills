import React from "react";
import "./date-picker-edit.styles.css";

export default function DatePickerEdit({ datePickerEditHandler }) {
  return (
    <div>
      <input type="date" onChange={datePickerEditHandler} />
    </div>
  );
}
