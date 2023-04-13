import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  todoList: {
    width: "800px",
    height: "400px",
    overflowY: "scroll",
    paddingTop: "20px",
    margin: "30px 0px 30px 0px",
  },
  contentArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
    margin: "50px auto",
    width: "900px",
    height: "600px",
    backgroundColor: "#f1f3f5",
    borderRadius: "10px",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
  },
  todo: { marginBottom: "1px" },
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
  inputsEditFields: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    width: "350px",
    height: "280px",
  },
  inputsEdit: {
    width: "310px",
    height: "55px",
    marginBottom: "20px",
  },
  inputsEditDate: {
    width: "200px",
    height: "55px",
  },
  inputDateAndEditButton: {
    display: "flex",
    alignItems: "center",
    columnGap: "30px",
  },
}));

export default useStyles;
