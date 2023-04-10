import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  todoList: {
    backgroundColor: "orangered",
    width: "40vw",
    padding: "50px",
    margin: "auto",
  },
  contentArea: {
    backgroundColor: "yellowgreen",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "50px",
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
  checkBox: { marginRight: "10px" },
}));

export default useStyles;
