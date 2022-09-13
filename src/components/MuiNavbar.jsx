import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Stack } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  return (
    <AppBar //sranova verevi bary stexcvum
    position="static"//vor scrolli het chijni(default fixeda, scroli het ijnuma)
    >
      <Toolbar //toolernen eli, knopkeqy acionnery ev ayln
       >
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pokemon App
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="error" variant="contained">
            {" "}
            Features
          </Button>
          <Button color="secondary" variant="contained">
            {" "}
            Pricing
          </Button>
          <Button color="success" variant="contained">
            {" "}
            About
          </Button>
          <Button
            id="resources-button" //id enq tali karavarelu hamar
            color="success"
            variant="contained"
            onClick={handleClick}
            aria-controls={open ? "resources-menu" : undefined} //aria controlsov karavarum enq resources-menu i exeliutyuny
            aria-haspopup="true" //popup uni te che? asum enq ha
            aria-expanded={open ? "true" : undefined} //asumenq razvernuta te che, openi heta kaxvac de parza
            endIcon={<KeyboardArrowDownIcon />} //prosty icon
          >
            {" "}
            Resources
          </Button>
          <Button color="warning" variant="contained">
            {" "}
            Log in
          </Button>
        </Stack>
        <Menu
          id="resources-menu" //id vor karavaren sranov
          anchorEl={anchorEl} //popupi poziciayi het kap uni,
          open={open} //open aysinqn erevuma te che
          MenuListProps={{
            "aria-labelledby": "resources-button", //asuma te vor elementy karan ira ogtagorci senc asac, dabro enq tali resource-buttonin meznov karavarel
          }}
          onClose={handleClose} //erb vor pakvi inch funkcia kanchi, componentWillUnmounti nman eli yani
          anchorOrigin={{
            //poziciana dzum
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            //poziciana dzum
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
