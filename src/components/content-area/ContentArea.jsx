import React from "react";
import TodoList from "../todo-list/TodoList";
import AddTodo from "../add-todo/AddTodo";
import useStyles from "../../styles/styles";
import todos from "../../data/data";
import { v4 as uuid } from "uuid";
import Button from "@mui/material/Button";

const LOCALE_STORAGE_KEY = "todoApp.todos";

export default function ContentArea() {
  const classes = useStyles();
  const subjectInputEditRef = React.useRef();
  const conceptsTopicEditRef = React.useRef();

  const [allTodos, setAllTodos] = React.useState(todos);
  const [filteredTodo, setFilteredTodo] = React.useState(allTodos);
  const [completedTodos, setCompletedTodos] = React.useState([]);
  const [addTodo, setAddTodo] = React.useState({});

  ///////////////////////////////////////////////////////////
  /////// GETTING DATA FROM LOCALE STORAGE
  React.useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY));
    setAllTodos(storedTodos);
    setFilteredTodo(storedTodos);
  }, []);

  ///////////////////////////////////////////////////////////
  /////// STORING DATA TO LOCALE STORAGE
  React.useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(allTodos));
  }, [allTodos]);

  ///////////////////////////////////////////////////////////
  /////// DELETE BUTTON EVENT
  const onDeleteHandler = (id) => {
    const newFilteredTodo = allTodos.filter((todo) => todo.id !== id);

    setFilteredTodo(newFilteredTodo);
    setAllTodos(newFilteredTodo);
    // setCompletedTodos(newCompletedTodo);
    // console.log(newCompletedTodo);
  };

  ///////////////////////////////////////////////////////////
  /////// DELETE COMPLETED BUTTON EVENT
  const onDeleteCompletedHandler = (todos) => {
    console.log(todos);
    const newCompletedTodo = allTodos.filter((todo) => todo.complete === false);
    setAllTodos(newCompletedTodo);
    setFilteredTodo(newCompletedTodo);
    setCompletedTodos(newCompletedTodo);
  };

  ///////////////////////////////////////////////////////////
  /////// CHECK TOGGLE HANDLER
  const onCheckHandler = (id) => {
    const newTodos = [...allTodos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setAllTodos(newTodos);
    setFilteredTodo(newTodos);
  };

  ///////////////////////////////////////////////////////////
  /////// HANDLER FOR CREATING OBJECT OF todos
  const addTodoHandler = (key) => (e) => {
    setAddTodo({
      ...addTodo,
      [key]: e.target.value,
    });
    console.log(e.target.value);
    // console.log(todoSubjectRef.current.value);
    // console.log(todoConceptsRef.current.value);
  };

  ///////////////////////////////////////////////////////////
  /////// CLICK HANDLER FOR ADDING NEW tood
  const addClickHandler = () => {
    let newAddedTodo = [...allTodos, addTodo];
    setAllTodos(newAddedTodo);
    setFilteredTodo(newAddedTodo);
  };

  ///////////////////////////////////////////////////////////
  /////// DATE PICKER HANDLER AND INITIALIZING THE OBJECT OF todo
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

  ////////////////////////////////////////////////////////////////////
  /////// MODAL EDIT SETUP
  const [openModal, setOpenModal] = React.useState(false);
  const [defaultValueSubject, setDefaultValueSubject] = React.useState("");
  const [defaultValueTopic, setDefaultValueTopic] = React.useState("");

  const handleOpen = (id) => {
    setOpenModal(true);
    // console.log(id);
    const selectedEditTodo = filteredTodo.find((todo) => todo.id === id);
    setDefaultValueSubject(selectedEditTodo.todoTitle);
    setDefaultValueTopic(selectedEditTodo.todoTopic);
    // console.log(selectedEditTodo.todoTitle);
    // console.log((selectedEditTodo.todoTitle = "New title todo"));
  };
  const handleClose = () => {
    setOpenModal(false);
    const newEditSubject = subjectInputEditRef.current.value;
    const newEditTopic = conceptsTopicEditRef.current.value;
    console.log(newEditSubject);
    console.log(newEditTopic);
    // console.log("The button edit was clicked");
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
          openModal={openModal}
          handleOpen={handleOpen}
          handleClose={handleClose}
          subjectInputEditRef={subjectInputEditRef}
          conceptsTopicEditRef={conceptsTopicEditRef}
          defaultValueSubject={defaultValueSubject}
          defaultValueTopic={defaultValueTopic}
        />
        <Button
          onClick={() => onDeleteCompletedHandler(filteredTodo)}
          variant="contained"
          color="success"
        >
          Delete Completed
        </Button>
      </div>
    </>
  );
}
