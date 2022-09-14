import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import React from "react";

export const MuiChip = () => {
  const [chips, setChips] = React.useState(["Chip1", "Chip2", "Chip3"]);

  const handleDelete = (deletedChip) => {
    setChips(chips.filter((chip) => chip !== deletedChip));
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Chip" //chipi meji barna
        color="primary"
        size="large"
        icon={<FaceIcon />} //icon a texti koxy
        // avatar={<FaceIcon />} sranov chenq grum vorovhetev avatari texxa zbaxecnum, inch vor shvaqner a avelanm
      />
      <Chip
        label="Chip outlined"
        color="secondary"
        variant="outlined" //buttoni nman varianta
        avatar={<Avatar />} //iconi nman bana prosty avatara u avataric enq qashum
        //avatar={<Avatar>A</Avatar>} vor senc enq grum avatari texy kloraka mejy mer grac texty(es pahin A)
      />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("hi")}
        onDelete={() => alert("deleted")} //x knopkaya avelacnum koxqy, vor vren sxmum enq onDelete funkcian kanchvuma
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} //prosty orinaka onDelete-i ogtagorcelu
        />
      ))}
    </Stack>
  );
};
