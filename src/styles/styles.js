import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  todoList: {
    width: "50vw",
    padding: "20px 0px",
    margin: "auto",
  },
  contentArea: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    margin: "auto",
    width: "max-content",
  },
  btnActions: {
    display: "flex",
    alignItems: "center",
  },
  deleteBtn: {
    marginLeft: "auto",
    marginRight: "5px",
  },
  checkBox: { marginRight: "13px" },
  alarmDate: { display: "flex", alignItems: "center" },
  iconClock: { marginRight: "3px" },
  inputField: {
    display: "grid",
    gridTemplateColumns: "1fr 1.5fr 1.5fr 0.5fr",
    columnGap: "10px",
    width: "50vw",
  },
  headingPrimary: { marginTop: "30px" },
  // headingSecondary: { marginBottom: "30px" },
}));

export default useStyles;
