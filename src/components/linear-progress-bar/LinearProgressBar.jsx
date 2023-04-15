import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import useStyles from "../../styles/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#2E7D32" : "#2E7D32",
  },
}));

export default function LinearProgressBar({ progressPercentage }) {
  const classes = useStyles();

  return (
    <div className={classes.progressBar}>
      <Box sx={{ flexGrow: 1 }}>
        <BorderLinearProgress
          variant="determinate"
          value={progressPercentage}
        />
      </Box>
    </div>
  );
}
