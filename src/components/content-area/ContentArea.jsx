import React from "react";
import TodoList from "../todo-list/TodoList";
import useStyles from "../../styles/styles";
import todos from "../../data/data";

export default function ContentArea() {
  const classes = useStyles();
  const [allTodos, setAllTodos] = React.useState(todos);
  const [filteredTodo, setFilteredTodo] = React.useState(allTodos);

  const onDeleteHandler = (id) => {
    const newFilteredTodo = allTodos.filter((todo) => todo.id !== id);
    setFilteredTodo(newFilteredTodo);
  };

  const onCheckHandler = (e) => {
    if (e.target.checked === true) console.log("Checked");
    // e.target.checked = false;
    // console.log(e.target);
  };

  return (
    <>
      <div className={classes.contentArea}>
        <TodoList
          todos={filteredTodo}
          onDeleteHandler={onDeleteHandler}
          onCheckHandler={onCheckHandler}
        />
      </div>
      ;
    </>
  );
}
