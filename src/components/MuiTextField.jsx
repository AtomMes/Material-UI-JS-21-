import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

export const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="name" variant="outlined" />
        {/*labely placeholderi nman bana, variant outlinedy ira default znacheniena */}
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="small secondary" size="small" color="secondary" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Form input"
          required
          value={value}//sovorakan react
          onChange={(e) => setValue(e.target.value)}
          error={!value}//asumenq ete value chka error cuyc tu
          helperText={value ? 'Do not share your password with anyone' : 'Required'}// sovorakan js
        />
        <TextField
          label="Password"
          type="password" //asumenq passworda type-n (sovorakan html)
          required //requireda sarqum mer inputy
          helperText="Do not share your password with anyone" //helpery taky poqr hushox teqsta
          disabled //disable a anum
        />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
        {/*ches kara gres menak karas kardas \?/ */}
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,//lav chjogi es pahery
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
