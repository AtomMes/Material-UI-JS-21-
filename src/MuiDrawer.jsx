import React from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
export const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);

  return (
    <>
      <IconButton size='large' color='secondary' edge='start' aria-label='logo' onClick={()=> setIsDrawerOpen(true)} >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
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
