import React from "react";
import useStyles from "../../styles/styles";

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <div>
        <h1 className={classes.headingPrimary}>Learnify</h1>
      </div>
      <div className={classes.headingSecondaryField}>
        <h2 className={classes.headingSecondary}>
          Keep track of your learning progress with our app that creates a
          personalized list of concepts to master.
        </h2>
      </div>
    </>
  );
}
