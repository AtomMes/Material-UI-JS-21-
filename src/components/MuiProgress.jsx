import { Stack, 
  CircularProgress,//klor fracox zagruzka
   LinearProgress //vazox toxi nman zagruzka
  } from "@mui/material";
import React from "react";

export const MuiProgress = () => {
  return (
    <Stack spacing={5}>
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress
       variant="determinate" //karanq voroshenq inchqanna fracel, 
       value={50} //fracela 50%y
       />

      <LinearProgress />
      <LinearProgress color="success" sx={{ width: "300px" }} />
      <LinearProgress variant="determinate" value={50} />
    </Stack>
  );
};
