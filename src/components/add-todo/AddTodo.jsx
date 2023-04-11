import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useStyles from "../../styles/styles";
import DatePicker from "../date-picker/DatePicker";

export default function AddTodo({
  addTodoHandler,
  addClickHandler,
  datePickerHandler,
}) {
  const classes = useStyles();
  return (
    <div className={classes.inputField}>
      <DatePicker datePickerHandler={datePickerHandler} />
      <TextField
        id="outlined-textarea"
        label="Enter Subject"
        placeholder="Placeholder"
        multiline
        onChange={addTodoHandler("todoTitle")}
      />
      <TextField
        id="outlined-textarea"
        label="Enter Concepts"
        placeholder="Placeholder"
        multiline
        onChange={addTodoHandler("todoTopic")}
      />
      <Button onClick={addClickHandler} variant="outlined">
        Add
      </Button>
    </div>
  );
}
