import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useStyles from "../../styles/styles";
import DatePicker from "../date-picker/DatePicker";

export default function AddTodo({
  addTodoHandler,
  addClickHandler,
  datePickerHandler,
  todoSubjectRef,
  todoConceptsRef,
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
          label="Enter Subject"
          placeholder="Enter Subject"
          // ref={todoSubjectRef}
          onChange={addTodoHandler("todoTitle")}
        />
      </div>
      <div className={classes.inputsField}>
        <TextField
          id="outlined-textarea"
          label="Enter Concepts"
          placeholder="Enter Concepts"
          // ref={todoConceptsRef}
          onChange={addTodoHandler("todoTopic")}
        />
      </div>
      <Button onClick={addClickHandler} variant="outlined" size="large">
        Add
      </Button>
    </div>
  );
}
