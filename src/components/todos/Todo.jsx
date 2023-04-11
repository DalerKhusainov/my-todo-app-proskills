import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import useStyles from "../../styles/styles";
import Checkbox from "@mui/material/Checkbox";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";

export default function Todo({ todos, onDeleteHandler, onCheckHandler }) {
  const classes = useStyles();
  const { id, todoTitle, todoTopic, complete, status, date } = todos;
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6" sx={{ width: "40%", flexShrink: 0 }}>
            {todoTitle}
          </Typography>
          <Typography variant="overline" sx={{ color: "text.secondary" }}>
            {todoTopic}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography> */}
          <div className={classes.btnActions}>
            <div className={classes.checkBox}>
              <Checkbox {...label} color="success" onChange={onCheckHandler} />
            </div>
            <div className={classes.alarmDate}>
              <div className={classes.iconClock}>
                <AccessAlarmsIcon fontSize="small" color="primary" />
              </div>
              <Typography variant="subtitle2" color="primary">
                {date}
              </Typography>
            </div>
            <div className={classes.deleteBtn}>
              <IconButton
                onClick={() => onDeleteHandler(id)}
                aria-label="delete"
                size="small"
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
            <IconButton aria-label="delete" size="small">
              <EditTwoToneIcon fontSize="small" />
            </IconButton>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
