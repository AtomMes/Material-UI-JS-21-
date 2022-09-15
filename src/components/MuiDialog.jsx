import {
  Button,
  Dialog, //ekranin arajacox patuhanna
  DialogTitle, //vernagirna
  DialogContent,//contantna, saysinqn teqsty u knopkeqy,
  DialogContentText,// textna manr tarerov contenti mej
  DialogActions, //knopkeqnen kontenti mej
} from "@mui/material";
import React from "react";

export const MuiDialog = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog
        aria-labelledby="dialog-title"//
        aria-describedby="dialog-description" //es 2y yanm ban chen poxm bayc tox mnan //? 
        open={open}
        onClose={() => setOpen(false)}//vor urish tex sxmen onClose a kanchvelu
      >
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you sure you want to submit the text? You will not be able to
            edit after submitting
          </DialogContentText>
          <DialogActions>
            <Button
             autoFocus //vor miangamic sra vra fokusy exni, 
             onClick={() => setOpen(false)}>
              Submit
            </Button>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};
