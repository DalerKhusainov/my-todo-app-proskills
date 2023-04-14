////////////////////////////////////////////////////////////////////
/////// IMPORTS ///////////////////
// MATERIAL UI
import Button from "@mui/material/Button";
import useStyles from "../../styles/styles";
// REACT
import React from "react";
// CREATED COMPONENTS
import TodoList from "../todo-list/TodoList";
import AddTodo from "../add-todo/AddTodo";
// MAIN DATA FROM AN ARRAY OF OBJECT
import todos from "../../data/data";
// SPECIAL LIBRARY FOR GENERATE A RANDOM ID
import { v4 as uuid } from "uuid";
// CREATED FUNCTIONS
import formatDate from "../../functions/functions";

////////////////////////////////////////////////////////////////////
/////// KEY PROPERTY FOR LOCALE STORAGE
const LOCALE_STORAGE_KEY = "todoApp.todos";

////////////////////////////////////////////////////////////////////
/////// REACT FUNCTIONAL COMPONENT STARTS
export default function ContentArea() {
  ////////////////////////////////////////////////////////////////////
  /////// MATERIAL UI HOOK STYLE
  const classes = useStyles();

  ////////////////////////////////////////////////////////////////////
  /////// VARIABLES OF Todos
  const [allTodos, setAllTodos] = React.useState(todos);
  const [filteredTodo, setFilteredTodo] = React.useState(allTodos);
  const [completedTodos, setCompletedTodos] = React.useState([]);
  const [addTodo, setAddTodo] = React.useState({});

  ////////////////////////////////////////////////////////////////////
  /////// MODAL USESTATES
  const [openModal, setOpenModal] = React.useState(false);
  const [defaultValueSubject, setDefaultValueSubject] = React.useState("");
  const [defaultValueTopic, setDefaultValueTopic] = React.useState("");
  const [editedSubject, setEditedSubject] = React.useState();
  const [editedTopic, setEditedTopic] = React.useState();
  const [editedDate, setEditedDate] = React.useState("");
  const [selectedTodosId, setSelectedTodosId] = React.useState("");

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
  };

  ///////////////////////////////////////////////////////////
  /////// DELETE COMPLETED BUTTON EVENT
  const onDeleteCompletedHandler = (todos) => {
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
  /////// HANDLER FOR CREATING AN OBJECT OF Todos
  const addTodoHandler = (key) => (e) => {
    setAddTodo({
      ...addTodo,
      [key]: e.target.value,
    });
  };

  ///////////////////////////////////////////////////////////
  /////// CLICK HANDLER FOR ADDING A NEW ToDO
  const addClickHandler = () => {
    let newAddedTodo = [...allTodos, addTodo];
    setAllTodos(newAddedTodo);
    setFilteredTodo(newAddedTodo);
  };

  ///////////////////////////////////////////////////////////
  /////// DATE PICKER HANDLER AND INITIALIZING THE OBJECT OF todo
  const datePickerHandler = (e) => {
    const fullDate = e.target.value;
    const newformatedDate = formatDate(fullDate);
    setAddTodo({
      id: uuid(),
      todoTitle: "",
      todoTopic: "",
      complete: false,
      date: newformatedDate,
    });
  };

  ////////////////////////////////////////////////////////////////////
  /////// MODAL EDIT SETUPS STARTS
  ////////////////////////////////
  // A HANDLER FOR GETTING A SELECTED DATE
  const datePickerEditHandler = (e) => {
    const fullDate = e.target.value;
    const newformatedDate = formatDate(fullDate);
    setEditedDate(newformatedDate);
  };

  // A HANDLER FOR OPENING A MODAL AND STORING DEFAULT VALUE INTO EDIT INPUTS
  const handleOpen = (id) => {
    setOpenModal(true);
    setSelectedTodosId(id);
    const copyTodos = [...filteredTodo];
    const getSelectedTodosValue = copyTodos.find((todo) => todo.id === id);
    setDefaultValueSubject(getSelectedTodosValue.todoTitle);
    setDefaultValueTopic(getSelectedTodosValue.todoTopic);
    setEditedDate(getSelectedTodosValue.date);
    setEditedSubject(getSelectedTodosValue.todoTitle);
    setEditedTopic(getSelectedTodosValue.todoTopic);
  };

  // A CHANGE HANDLER FOR GETTING A VALUE TO EDIT THE Todos SUBJECT
  const onEditChangeSubject = (e) => {
    const newEditedSubject = e.target.value;
    setEditedSubject(newEditedSubject);
  };

  // A CHANGE HANDLER FOR GETTING A VALUE TO EDIT THE Todos TOPIC
  const onEditChangeTopic = (e) => {
    const newEditedTopic = e.target.value;
    setEditedTopic(newEditedTopic);
  };

  // A HANDLER FOR CLOSING THE EDIT MODAL AND SELECTING Todo FOR EDITING
  const handleClose = () => {
    setOpenModal(false);
    const copyTodosForEdit = [...filteredTodo];
    const selectedTodoForEdit = copyTodosForEdit.find(
      (todo) => todo.id === selectedTodosId
    );

    selectedTodoForEdit.todoTitle = editedSubject;
    selectedTodoForEdit.todoTopic = editedTopic;
    selectedTodoForEdit.date = editedDate;
    setAllTodos(copyTodosForEdit);
    setFilteredTodo(copyTodosForEdit);
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
          defaultValueSubject={defaultValueSubject}
          defaultValueTopic={defaultValueTopic}
          datePickerEditHandler={datePickerEditHandler}
          onEditChangeSubject={onEditChangeSubject}
          onEditChangeTopic={onEditChangeTopic}
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
