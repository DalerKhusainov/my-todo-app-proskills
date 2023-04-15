import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  todoList: {
    width: "800px",
    height: "400px",
    overflowY: "scroll",
    paddingTop: "20px",
    margin: "15px 0px 15px 0px",
  },
  statusComplete: {
    backgroundColor: "orangered",
    width: "20px",
    height: "40px",
    zIndex: "2",
  },
  contentArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
    margin: "30px auto",
    width: "900px",
    height: "650px",
    backgroundColor: "#f1f3f5",
    borderRadius: "10px",
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
  },
  completeFieled: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "150px",
    width: "inherit",
  },
  progressField: {
    width: "80%",
    backgroundColor: "#e9ecef",
    padding: "5px 15px 15px 15px",
    borderRadius: "5px",
  },
  progressText: {
    margin: "0 0 5px 0",
    padding: "0px",
    textAlign: "center",
    color: "#1A90FF",
    fontSize: "22px",
  },
  staticField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "5px",
  },
  staticText: { margin: "0px", padding: "0px" },
  staticTextLeft: { color: "#2E7D32", fontWeight: "500" },
  staticTextMiddle: { color: "#525557", fontWeight: "500" },
  staticTextRight: { color: "#1A90FF", fontWeight: "500" },
  todo: { marginBottom: "1px" },
  btnActions: {
    display: "flex",
    alignItems: "center",
  },
  deleteBtn: {
    marginLeft: "auto",
    marginRight: "5px",
  },
  completeText: {
    padding: "0px",
    margin: "0px",
    fontWeight: "500",
    width: "85px",
  },
  alarmDate: { display: "flex", alignItems: "center" },
  iconClock: { marginRight: "3px", marginLeft: "20px" },
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
