import React from "react";
import useStyles from "../../styles/styles";
import { calcPercentage } from "../../functions/functions";
import LinearProgressBar from "../linear-progress-bar/LinearProgressBar";

///////////////////////////////////////////////////////////////
///// REACT COMPONENT STARTS
function ProgressField({ allTodos }) {
  // MATERIAL UI HOOK STYLES
  const classes = useStyles();
  // REACT USESTATES
  const [completedTodos, setCompletedTodos] = React.useState([]);
  const [notCompletedTodos, setNotCompletedTodos] = React.useState([]);

  // FILTER METHOD TO DEFINE IN THE LIST ONLY COMPLETED ONES
  React.useEffect(() => {
    const newCompletedTodos = allTodos.filter((todo) => todo.complete === true);
    setCompletedTodos(newCompletedTodos);
  }, [allTodos]);

  // FILTER METHOD TO DEFINE IN THE LIST ONLY NOT COMPLETED ONES
  React.useEffect(() => {
    const newNotCompletedTodos = allTodos.filter(
      (todo) => todo.complete === false
    );
    setNotCompletedTodos(newNotCompletedTodos);
  }, [allTodos]);

  // THIS VARIABLE CONTAINS PERCENTAGE OF PROGRESS
  const progressPercentage = calcPercentage(
    allTodos.length,
    completedTodos.length
  );

  return (
    <div className={classes.progressField}>
      <p className={classes.progressText}>Progress Panel</p>
      <div className={classes.staticField}>
        <p className={`${classes.staticText} ${classes.staticTextLeft}`}>
          {`Mastered: ${completedTodos.length}`}
        </p>
        <p className={`${classes.staticText} ${classes.staticTextMiddle}`}>
          {`${Math.trunc(progressPercentage)}%`}
        </p>
        <p className={`${classes.staticText} ${classes.staticTextRight}`}>
          {`In progress: ${notCompletedTodos.length}`}
        </p>
      </div>
      <LinearProgressBar progressPercentage={progressPercentage} />
    </div>
  );
}

export default ProgressField;
