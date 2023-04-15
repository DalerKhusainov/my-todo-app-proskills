////////////////////////////////////////////////////////////////////
/////// IMPORTS ///////////////////
// MATERIAL UI
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import useStyles from "../../styles/styles";
// REACT
import * as React from "react";
// CREATED COMPONENTS
import ModalEdit from "../modal-edit/ModalEdit";
// CREATED FUNCTIONS
import { convertMonths } from "../../functions/functions";

////////////////////////////////////////////////////////////////////
/////// REACT FUNCTIONAL COMPONENT STARTS
export default function Todo({
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
  ////////////////////////////////////////////////////////////////////
  /////// MATERIAL UI HOOK FOR STYLES
  const classes = useStyles();

  ////////////////////////////////////////////////////////////////////
  /////// DE-SRTUCTURING THE Todos ARRAY OF OBJECTS
  const { id, todoTitle, todoTopic, date, complete } = todos;

  ////////////////////////////////////////////////////////////////////
  /////// ACCORDION SETUP
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.todo}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {/* <div className={classes.statusComplete}></div> */}
          <Typography
            color="primary"
            variant="h6"
            sx={{ width: "30%", flexShrink: 0 }}
          >
            {todoTitle}
          </Typography>
          <Typography variant="overline" sx={{ color: "text.secondary" }}>
            {todoTopic}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.btnActions}>
            <div className={classes.checkBox}>
              <Checkbox
                {...label}
                color="success"
                onChange={() => onCheckHandler(id)}
                checked={complete}
                size="small"
              />
            </div>
            <p
              className={classes.completeText}
              style={complete ? { color: "green" } : { color: "#1976D2" }}
            >
              {complete ? "Completed" : "Complete"}
            </p>
            <div className={classes.alarmDate}>
              <div className={classes.iconClock}>
                <AccessAlarmsIcon fontSize="small" color="primary" />
              </div>
              <div>
                <Typography variant="subtitle2" color="primary">
                  {convertMonths(date)}
                </Typography>
              </div>
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
            <ModalEdit
              openModal={openModal}
              handleOpen={handleOpen}
              handleClose={handleClose}
              todos={todos}
              defaultValueSubject={defaultValueSubject}
              defaultValueTopic={defaultValueTopic}
              editedDate={editedDate}
              datePickerEditHandler={datePickerEditHandler}
              onEditChangeSubject={onEditChangeSubject}
              onEditChangeTopic={onEditChangeTopic}
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
