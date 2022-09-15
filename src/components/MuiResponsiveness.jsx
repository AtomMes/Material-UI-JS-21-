import { Box } from "@mui/material";
import {styled} from "@mui/material";
import React from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.palette.neutral.darker,
}));

export const MuiResponsiveness = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          width: {
            xs: 100, //0 0ic mec i jamanak yndunuma 100px width u tenc
            sm: 200, //600
            md: 300, //900
            lg: 400, //1200
            xl: 500, //1536
          },
          bgcolor: {
            xs: "primary.main",
            sm: "primary.light",
            md: "primary.dark",
            lg: "secondary.dark",
            xl: "secondary.main",
          },
        }}
      ></Box>
      <StyledBox />
    </>
  );
};
