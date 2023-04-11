import React from "react";
import TodoList from "../todo-list/TodoList";
import AddTodo from "../add-todo/AddTodo";
import useStyles from "../../styles/styles";
import todos from "../../data/data";
import { v4 as uuid } from "uuid";

export default function ContentArea() {
  const classes = useStyles();
  const [allTodos, setAllTodos] = React.useState(todos);
  const [filteredTodo, setFilteredTodo] = React.useState(allTodos);
  const [addTodo, setAddTodo] = React.useState({});

  const onDeleteHandler = (id) => {
    const newFilteredTodo = allTodos.filter((todo) => todo.id !== id);
    setFilteredTodo(newFilteredTodo);
    setAllTodos(newFilteredTodo);
  };

  // FIXME
  const onCheckHandler = (e) => {
    if (e.target.checked === true) console.log("Checked");
  };

  const addTodoHandler = (key) => (e) => {
    setAddTodo({
      ...addTodo,
      [key]: e.target.value,
    });
  };

  const addClickHandler = () => {
    let newAddedTodo = [...allTodos, addTodo];
    setAllTodos(newAddedTodo);
    setFilteredTodo(newAddedTodo);
  };

  const datePickerHandler = (e) => {
    const fullDate = e.target.value;
    const year = fullDate.slice(0, 4);
    const month = fullDate.slice(5, 7);
    const day = fullDate.slice(-2);
    const newformatedDate = `${day}.${month}.${year}`;
    setAddTodo({
      id: uuid(),
      todoTitle: "",
      todoTopic: "",
      complete: false,
      date: newformatedDate,
    });
  };

  return (
    <>
      <div className={classes.contentArea}>
        <AddTodo
          addTodoHandler={addTodoHandler}
          addClickHandler={addClickHandler}
          datePickerHandler={datePickerHandler}
        />
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
