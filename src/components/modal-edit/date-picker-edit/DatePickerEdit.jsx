import React from "react";
import "./date-picker-edit.styles.css";
import { deFormatDate } from "../../../functions/functions";

export default function DatePickerEdit({ datePickerEditHandler, editedDate }) {
  const defaultEditValue = deFormatDate(editedDate);

  return (
    <div>
      <input
        type="date"
        onChange={datePickerEditHandler}
        defaultValue={defaultEditValue}
      />
    </div>
  );
}
