import { Slider } from "@mui/material";
import React from "react";

const MuiSlider = () => {
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    MUI SLIDER
      <Slider
        value={typeof value === "number" ? value : 0}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
      />
    </>
  );
};

export default MuiSlider;
