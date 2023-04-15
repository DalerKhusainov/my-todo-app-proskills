import React from "react";
import useStyles from "../../styles/styles";
import LinearProgressBar from "../linear-progress-bar/LinearProgressBar";

function ProgressField({ allTodos }) {
  const classes = useStyles();
  const [completedTodos, setCompletedTodos] = React.useState([]);
  const [notCompletedTodos, setNotCompletedTodos] = React.useState([]);

  //   console.log(typeof completedTodos.length);
  //   console.log(notCompletedTodos.length);

  React.useEffect(() => {
    const newCompletedTodos = allTodos.filter((todo) => todo.complete === true);
    setCompletedTodos(newCompletedTodos);
  }, [allTodos]);

  React.useEffect(() => {
    const newNotCompletedTodos = allTodos.filter(
      (todo) => todo.complete === false
    );
    setNotCompletedTodos(newNotCompletedTodos);
  }, [allTodos]);

  const calcPercentage = (num1, num2) => {
    const percentage = (num2 / num1) * 100;
    return percentage;
  };

  const progressPercentage = calcPercentage(
    allTodos.length,
    completedTodos.length
  );

  return (
    <div className={classes.progressField}>
      <p className={classes.progressText}>Progress</p>
      <div className={classes.staticField}>
        <p className={`${classes.staticText} ${classes.staticTextLeft}`}>
          {`Completed: ${completedTodos.length}`}
        </p>
        <p className={`${classes.staticText} ${classes.staticTextMiddle}`}>
          Half
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
