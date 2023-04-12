import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  todoList: {
    width: "800px",
    height: "350px",
    overflowY: "scroll",
    paddingTop: "20px",
    margin: "30px 0px 30px 0px",
  },
  contentArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    margin: "30px auto",
    width: "900px",
    height: "500px",
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
    display: "flex",
    justifyContent: "space-between",
    columnGap: "35px",
    marginLeft: "20px",
    marginRight: "20px",
  },
  headingPrimary: { marginTop: "30px" },
  inputsField: { width: "200px" },
}));

export default useStyles;
