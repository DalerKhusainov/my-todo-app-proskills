import React from "react";
import Todo from "../todos/Todo";
import useStyles from "../../styles/styles";

export default function TodoList({
  todos,
  onDeleteHandler,
  onCheckHandler,
  openModal,
  handleOpen,
  handleClose,
  defaultValueSubject,
  defaultValueTopic,
  editedDate,
  datePickerEditHandler,
  onEditChangeSubject,
  onEditChangeTopic,
}) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.todoList}>
        {todos.map((todo, index) => (
          <Todo
            key={todo.id}
            todos={todo}
            index={index}
            onDeleteHandler={onDeleteHandler}
            onCheckHandler={onCheckHandler}
            openModal={openModal}
            handleOpen={handleOpen}
            handleClose={handleClose}
            defaultValueSubject={defaultValueSubject}
            defaultValueTopic={defaultValueTopic}
            editedDate={editedDate}
            datePickerEditHandler={datePickerEditHandler}
            onEditChangeSubject={onEditChangeSubject}
            onEditChangeTopic={onEditChangeTopic}
          />
        ))}
      </div>
    </>
  );
}
