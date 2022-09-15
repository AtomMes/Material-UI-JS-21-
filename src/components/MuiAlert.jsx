import { Stack,
   Alert, //prost alert componentna, 
    AlertTitle, //ete mejy uzum enq title, unena alerty
    Button 
  } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is an Error alert</Alert>
      <Alert severity="warning">This is an Warning alert</Alert>
      <Alert severity="info">This is an Info alert</Alert>
      <Alert severity="success">This is an Success alert</Alert>

      <Alert variant="outlined" severity="error">
        This is an Error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an Warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an Info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is an Success alert
      </Alert>

      <Alert
        variant="filled"//buttoni nman variantner
        severity="error"//severity-ov voroshum enq alerti guyny
        onClose={() => alert("Alert closed")} //knopkaya avelacnum x, sxmeluc es funkcian kanchuma
      >
        <AlertTitle>Error</AlertTitle>
        This is an Error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is an Warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an Info alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />} //ete uzum enq ira drac icon-y chexni ayl mer uzacy, inherity talis enq vor karoxa mer icony 300*300 a exnum, ankap mec chdni ayl nasledovat ani
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        <AlertTitle>Success</AlertTitle>
        This is an Success alert
      </Alert>
    </Stack>
  );
};
