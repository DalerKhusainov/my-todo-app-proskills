import React from "react";
import Todo from "../todos/Todo";
import useStyles from "../../styles/styles";

export default function TodoList({ todos }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.todoList}>
        {todos.map((todo) => (
          <Todo key={todo.id} todos={todo} />
        ))}
      </div>
    </>
  );
}
