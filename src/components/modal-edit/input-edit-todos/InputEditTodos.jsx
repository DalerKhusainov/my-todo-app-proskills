import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DatePickerEdit from "../date-picker-edit/DatePickerEdit";
import useStyles from "../../../styles/styles";

export default function InputEditTodos({
  handleClose,
  defaultValueSubject,
  defaultValueTopic,
  datePickerEditHandler,
  onEditChangeSubject,
  onEditChangeTopic,
}) {
  const classes = useStyles();

  return (
    <div className={classes.inputsEditFields}>
      <div>
        <div className={classes.inputsEdit}>
          <TextField
            onChange={onEditChangeSubject}
            label="Enter Subject"
            id="outlined-size-small"
            defaultValue={defaultValueSubject}
            size="medium"
            fullWidth={true}
          />
        </div>
        <div className={classes.inputsEdit}>
          <TextField
            onChange={onEditChangeTopic}
            label="Enter Concepts"
            id="outlined-size-small"
            defaultValue={defaultValueTopic}
            size="medium"
            fullWidth={true}
          />
        </div>
      </div>
      <div className={classes.inputDateAndEditButton}>
        <div className={classes.inputsEditDate}>
          <DatePickerEdit datePickerEditHandler={datePickerEditHandler} />
        </div>
        <div>
          <Button onClick={handleClose} variant="outlined" size="large">
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}
