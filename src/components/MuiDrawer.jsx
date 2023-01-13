import React from "react";
import { Drawer, Box, Typography, Button } from "@mui/material";

const positions = ["top", "right", "bottom", "left"];

export const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [position, setPosition] = React.useState("left");

  const handleClick=(props) => {
    setPosition(props)
    setIsDrawerOpen(true)
  }

  return (
    <>
      {positions.map((text, i) => (
        <Button key={i} onClick={() => handleClick(text)} >{text}</Button>
      ))}
      <Drawer
        anchor={position} //poziciana
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)} //erb vor urish tex sxmum es onclosena ashxatum u et jamanak asum es vor setopeny close ani vor pakvi
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
