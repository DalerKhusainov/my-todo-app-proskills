////////////////////////////////////////////////////////////////////
/////// IMPORTS ///////////////////
// MATERIAL UI
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
// MATERIAL UI HOOK STYLE
import useStyles from "../../styles/styles";
// REACT COMPONENTS
import * as React from "react";
// LOCALE STORAGE KEY
import { LOCALE_STORAGE_KEY_MODAL_MESSAGE } from "../../configs/config";
// THE FUNCTION THAT MAKE THE MODAL MESSAGE COMPONENT POPUP IN 2 SECONDS
import { MyComponent } from "../../functions/functions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #1A90FF",
  boxShadow: 24,
  p: 4,
};
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function ModalMessage() {
  const classes = useStyles();
  const [checkedMessage, setCheckedMessage] = React.useState(true);
  const [open, setOpen] = React.useState(checkedMessage);

  const handleClose = () => setOpen(false);

  /////////////////////////////////////////////////////////////////////////////
  ////// GETTING THE BOOLEAN VALUE FROM LOCALE STORAGE.
  React.useEffect(() => {
    const storedSetup = JSON.parse(
      localStorage.getItem(LOCALE_STORAGE_KEY_MODAL_MESSAGE)
    );
    if (!storedSetup) {
      setOpen(storedSetup);
      setCheckedMessage(storedSetup);
    }
  }, []);

  /////////////////////////////////////////////////////////////////////////////
  ////// STORING THE BOOLEAN VALUE TO LOCALE STORAGE. IF THE CHECKBOX IS TRUE
  ////// THE MODAL DON NOT OPEN AGAIN
  React.useEffect(() => {
    localStorage.setItem(
      LOCALE_STORAGE_KEY_MODAL_MESSAGE,
      JSON.stringify(checkedMessage)
    );
  }, [checkedMessage]);

  ////////////////////////////////////////////////////////////////
  ////// CHECKBOX HANDLER THAT TAKES BOOLEAN VALUE FROM CHECKBOX
  const onChackedMessageHandler = (e) => {
    if (e.target.checked) setCheckedMessage(false);
    else setCheckedMessage(true);
  };

  return (
    <>
      {MyComponent(
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Dear user,
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  we regret to inform you that the current website is not
                  responsive and may not work optimally on mobile devices. To
                  ensure the best user experience, we recommend using a laptop
                  or tablet to access the website.
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  We apologize for any inconvenience this may cause and assure
                  you that we are working towards making our website more
                  accessible and user-friendly for all devices. Thank you for
                  your understanding.
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  Best regards, The Website Team
                </Typography>
                <div className={classes.checkboxModalField}>
                  <Checkbox {...label} onChange={onChackedMessageHandler} />
                  <p className={classes.checkboxModalText}>
                    Don't show this message again
                  </p>
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
      )}
    </>
  );
}
