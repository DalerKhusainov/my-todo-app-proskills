import React from "react";
import { Typography } from "@mui/material";
import useStyles from "../../styles/styles";

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.headingPrimary}>
        <Typography variant="h2" color="primary" textAlign="center">
          To Do Learn App
        </Typography>
      </div>
      <div className={classes.headingSecondary}></div>
      <Typography variant="h4" color="textSecondary" textAlign="center">
        Create a roadmap of your development
      </Typography>
    </>
  );
}
