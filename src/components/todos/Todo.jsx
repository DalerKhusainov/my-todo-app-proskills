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

export default function Todo({ todos, onDeleteHandler, onCheckHandler }) {
  const classes = useStyles();
  const { id, todoTitle, todoTopic, complete } = todos;
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
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {todoTitle}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>{todoTopic}</Typography>
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
            <Typography variant="subtitle2">
              Dead line in 15 October 2023
            </Typography>
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
