import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useStyles from "../../styles/styles";
import DatePicker from "../date-picker/DatePicker";

export default function AddTodo({
  addClickHandler,
  datePickerHandler,
  todoSubjectRef,
  todoTopicRef,
}) {
  const classes = useStyles();
  return (
    <div className={classes.inputField}>
      <div className={classes.inputsField}>
        <DatePicker datePickerHandler={datePickerHandler} />
      </div>
      <div className={classes.inputsField}>
        <TextField
          id="outlined-textarea"
          inputRef={todoSubjectRef}
          label="Enter Subject"
          placeholder="Enter Subject"
        />
      </div>
      <div className={classes.inputsField}>
        <TextField
          id="outlined-textarea"
          inputRef={todoTopicRef}
          label="Enter Concepts"
          placeholder="Enter Concepts"
        />
      </div>
      <Button onClick={addClickHandler} variant="outlined" size="large">
        Add
      </Button>
    </div>
  );
}
