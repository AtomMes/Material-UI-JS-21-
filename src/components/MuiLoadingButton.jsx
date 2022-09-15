import { Stack, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import React from "react";

export const MuiLoadingButton = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const load = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  };

  return (
    <Stack spacing={2} direction="row">
      <Button variant='outlined' onClick={load} >
        Click to see Loading buttons
      </Button>
      <LoadingButton variant="outlined" loading={isLoading}>
        Submit
      </LoadingButton>
      <LoadingButton
        variant="contained"
        loadingIndicator="loading..."//loadingi jamanak inch cuyc ta
        loading={isLoading}
      >
        Fetch data
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"//loadingi paziciana
        startIcon={<SaveIcon />}//ete loading chi ikonkaya cuyc tali, ete loadinga loadingi nshan
        loading={isLoading}
      >
        Save
      </LoadingButton>
    </Stack>
  );
};
