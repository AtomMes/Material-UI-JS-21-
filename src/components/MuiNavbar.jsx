import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Stack } from "@mui/system";

export const MuiNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow:1}} >
    Pokemon App
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='error' variant='contained' > Features</Button>
          <Button color='secondary' variant='contained'> Pricing</Button>
          <Button color='success' variant='contained'> About</Button>
          <Button color='warning' variant='contained'> Log in</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
