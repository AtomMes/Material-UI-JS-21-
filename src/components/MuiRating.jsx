import { Stack, Rating } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const MuiRating = () => {
  const [value, setValue] = useState(null);

  const handleChange = (
    _event,
    newValue
  ) => {
    setValue(newValue);
  };


  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.1}
        size='large'
        icon={<FavoriteIcon fontSize='inherit' color='secondary' />}
        emptyIcon={<FavoriteBorderIcon fontSize='inherit' color="secondary" />}
        highlightSelectedOnly//nra hamara vor menak nshacy cuyc ta voch te sax(orinak 3 astx enq tvel menak 3rdy cuyc ta nshac)
      />
    </Stack>
  );
};
