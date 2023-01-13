import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";

export const MuiBottomNavigation = () => {
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      sx={{ width: "100%"}}
      value={value}
      onChange={(e, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Person" icon={<PersonIcon />} />
    </BottomNavigation>
  );
};
