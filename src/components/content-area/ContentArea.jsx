import React from "react";
import TodoList from "../todo-list/TodoList";
import useStyles from "../../styles/styles";
import todos from "../../data/data";

console.log(todos);

export default function ContentArea() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.contentArea}>
        <TodoList todos={todos} />
      </div>
      ;
    </>
  );
}
