import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import InputEditTodos from "./input-edit-todos/InputEditTodos";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #1976D2",
  boxShadow: 24,
  p: 4,
};

export default function ModalEdit({
  openModal,
  handleOpen,
  handleClose,
  todos,
  subjectInputEditRef,
  conceptsTopicEditRef,
  defaultValueSubject,
  defaultValueTopic,
}) {
  // const [openModal, setOpenModal] = React.useState(false);
  // const handleOpen = () => setOpenModal(true);
  // const handleClose = () => setOpenModal(false);
  // console.log(todos);

  return (
    <div>
      <IconButton
        onClick={() => handleOpen(todos.id)}
        aria-label="delete"
        size="small"
      >
        <EditTwoToneIcon fontSize="small" />
      </IconButton>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <InputEditTodos
            handleClose={handleClose}
            subjectInputEditRef={subjectInputEditRef}
            conceptsTopicEditRef={conceptsTopicEditRef}
            defaultValueSubject={defaultValueSubject}
            defaultValueTopic={defaultValueTopic}
          />
        </Box>
      </Modal>
    </div>
  );
}
