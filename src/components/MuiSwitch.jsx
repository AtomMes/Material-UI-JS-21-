import { Box, FormControlLabel, Switch } from "@mui/material";
import BookMarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookMark from "@mui/icons-material/Bookmark";
import React, { useState } from "react";

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={<Switch checked={checked} onChange={handleChange} color='secondary' />}//karanq nuyn dzev switchi texy checkbox grenq, u icon, checkedIcon avelacnenq
      />
      <FormControlLabel
        label="Dark mode"
        control={<Switch checked={checked} onChange={handleChange} color='error'
        icon={<BookMarkBorderIcon />} 
        checkedIcon={<BookMark />}  />}
      />
    </Box>
  );
};
