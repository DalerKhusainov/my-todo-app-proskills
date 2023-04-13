import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import useStyles from "../../styles/styles";
import Checkbox from "@mui/material/Checkbox";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import ModalEdit from "../modal-edit/ModalEdit";

export default function Todo({
  todos,
  onDeleteHandler,
  onCheckHandler,
  openModal,
  handleOpen,
  handleClose,
  defaultValueSubject,
  defaultValueTopic,
  datePickerEditHandler,
  onEditChangeSubject,
  onEditChangeTopic,
}) {
  const classes = useStyles();
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
            <ModalEdit
              openModal={openModal}
              handleOpen={handleOpen}
              handleClose={handleClose}
              todos={todos}
              defaultValueSubject={defaultValueSubject}
              defaultValueTopic={defaultValueTopic}
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
