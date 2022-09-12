import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;//valuen vercnum enq
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px">
      {/*prosty boxa sarqum */}
      <TextField
        label="select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
      >
        {/*en vor sxmum es menui nman lista bacum vor karas mi ban yntres eta, select enq tvel qani vor*/}
        {/*value-n country a vor ete yntrenq country-n beri, fullwidth tvel enq vor boxi 250 pixely vercni */}
        <MenuItem value="in">India</MenuItem>
        {/*sranc value-n nra hamara vor textfieldi onchange-in et valuen a gnum, kopit asac iranc tarberelu hamara, vor nuyny grenq chi ashxati vor yntrum enq sranq enq yntrum */}
        <MenuItem value="uk">Ukraine</MenuItem>
        <MenuItem value="ru">Russia</MenuItem>
        <MenuItem value="am">Armenia</MenuItem>
      </TextField>
    </Box>
  );
};
