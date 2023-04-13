import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DatePickerEdit from "../date-picker-edit/DatePickerEdit";
import useStyles from "../../../styles/styles";

export default function InputEditTodos({
  handleClose,
  subjectInputEditRef,
  conceptsTopicEditRef,
  defaultValueSubject,
  defaultValueTopic,
}) {
  const classes = useStyles();

  return (
    <div className={classes.inputsEditFields}>
      <div className={classes.inputsEdit}>
        <DatePickerEdit />
      </div>
      <div className={classes.inputsEdit}>
        <TextField
          inputRef={subjectInputEditRef}
          label="Enter Subject"
          id="outlined-size-small"
          defaultValue={defaultValueSubject}
          size="medium"
        />
      </div>
      <div className={classes.inputsEdit}>
        <TextField
          inputRef={conceptsTopicEditRef}
          label="Enter Concepts"
          id="outlined-size-small"
          defaultValue={defaultValueTopic}
          size="medium"
        />
      </div>
      <div>
        <Button onClick={handleClose} variant="outlined" size="large">
          Edit
        </Button>
      </div>
    </div>
  );
}
