import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";
import BookMarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookMark from "@mui/icons-material/Bookmark";
export const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    setAcceptTnC(e.target.checked);
  };


  const handleSkillChange = (e) => {
    const index = skills.indexOf(e.target.value)

    if(index === -1){
        setSkills([...skills, e.target.value])
    }else{
        setSkills(skills.filter(skill => skill !== e.target.value))
    }

  }

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and the conditions" //text prost
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookMarkBorderIcon />} //iconken incha
          checkedIcon={<BookMark />} //ete checkeda incha
          checked={acceptTnC}
          onChange={handleChange}
          color="secondary"
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                  icon={<BookMarkBorderIcon />} 
                  checkedIcon={<BookMark />} 
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                  icon={<BookMarkBorderIcon />} 
                  checkedIcon={<BookMark />} 
                />
              }
            />
            <FormControlLabel
              label="JS"
              control={
                <Checkbox
                  value="js"
                  checked={skills.includes("js")}
                  onChange={handleSkillChange}
                  icon={<BookMarkBorderIcon />} 
                  checkedIcon={<BookMark />} 
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
