import {
  Snackbar, //haytnvox fieldna
  Button,
  Alert,
} from "@mui/material";
import { useState, forwardRef } from "react";

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  //stexeq chjogi incher arav bayc ena arel vor castomni snackvara stexcel(ira stylerov eli)
  return <Alert elevation={6} ref={ref} {...props} />;
});

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      //ete prosty urish texa sexmel et jamanak chkorcni snackbary,
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        open={open}
        autoHideDuration={4000} //4000vrk-ic onClose funkcian kanchi
        onClose={handleClose}
        message="Form submitted successfully!" //sabshennina vor erevuma fieldum
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }} //styleren poziciayi veraberyal
      />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>{/*esel ira stexcacna custom */}
        <SnackbarAlert onClose={handleClose} severity="success">
          Form submitted successfully!
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};
