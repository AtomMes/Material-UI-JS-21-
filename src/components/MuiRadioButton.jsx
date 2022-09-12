import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText
} from "@mui/material";

import React, { useState } from "react";

export const MuiRadioButton = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Box>
      <FormControl error >{/*errory teqsti guynna poxum */}
        <FormLabel id="job-experience-group-label">Yntreq tveri mijakayq \/</FormLabel>
        {/*sa prosty teqsta nshelunneri verevy,prosty joguma vor nshel en guyna stanum */}
        <RadioGroup
          name="job-experience-group" //prosty name enq talis heto petq karoxa ga
          aria-labelledby="job-experience-group-label" //es id-ova jogum vor sxmaca te che verevi FormLabely
          value={value}
          onChange={handleChange}
          row//vor mi gci vra exnen
        >
          <FormControlLabel control={<Radio size='small' color='secondary' />} label="0-2" value="0-2" />
          {/*sranqel prosty radio knopkeqen */}
          <FormControlLabel control={<Radio />} label="3-6" value="3-6" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
          <FormControlLabel control={<Radio />} label="11-99" value="11-99" />
        </RadioGroup>
        <FormHelperText>inValid section </FormHelperText>
      </FormControl>
    </Box>
  );
};
