import {
  Skeleton, //skeletonna henc
  Stack,
  Box,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

export const MuiSkeleton = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    runSkeleton();
  }, []);

  const runSkeleton = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  return (
    <>
      <Box sc={{ width: "250px" }}>
        {loading ? (
          <Skeleton
            variant="rectangular"//qarakusi variantna
            width={256}
            height={144}
            animation="wave"//aliqi nman animacia exni voch te migat ani
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            alt="skeleton"
            width={256}
            height={144}
          />
        )}
        <Stack
          direction="row"
          spacing={1}
          sx={{ width: "100%", marginTop: "12px" }}
        >
          {loading ? (
            <Skeleton
              variant="circular"//klor skeleton
              width={40}
              height={40}
              animation="wave"
            />
          ) : (
            <Avatar>A</Avatar>
          )}

          <Stack sx={{ width: "200px" }}>
            {loading ? (
              <>
                <Typography variant="body1">
                  <Skeleton variant="text" width="100%" animation="wave" />
                </Typography>
                <Typography variant="body2">
                  <Skeleton variant="text" width="100%" animation="wave" />
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="body1">React MUI Tutorial</Typography>
                <Typography variant="body2">
                  npm install @mui/material
                </Typography>
              </>
            )}
          </Stack>
        </Stack>
      </Box>
      <Button variant="contained" color="secondary" onClick={runSkeleton}>
        Click to run Skeleton
      </Button>
    </>
  );
};
