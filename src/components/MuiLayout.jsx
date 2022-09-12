import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

import React from "react";

export const MuiLayout = () => {
  return (
    <>
      css in components stack and box
      <Paper
        sx={{ padding: "32px" }}
        elevation={4} //shadowna
      >{/*uxix imastov prosty paper componenta */}
        <Stack
          sx={{
            border: "1px solid black",
          }}
          direction="row"
          divider={
            <Divider orientation="vertical" flexItem color="secondary" />
          }
          spacing={2} //bazmapatkac 8i
        >
          <Box
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              height: "100px",
              width: "100px",
              padding: "16px",
              "&:hover": {
                backgroundColor: "primary.light",
              },
            }}
          >
            MuiLayout
          </Box>
          <Box
            display="flex"
            height="100px"
            width="100px"
            bgcolor="secondary.light"
            p={2} //paddingna, inch grum enq bazmapatkac 8ov a cuyc talis, aysinqn es pahin 16px a paddingy
          ></Box>
        </Stack>
        <Grid container my={4} rowSpacing={1} columnSpacing={1}>
          {/*margin in vertical direction, mx=horizontal */}
          <Grid item xs={12} sm={6}>
            {/*ete sm chka xs-y bolor chapserina verabervum, ete ka uremn heraxosi chapserin */}
            {/*gridy widthy bajanuma 12 maseri, u asum enq inqy ira widthi qani masy zbaxecni, es pahin 12 masy, aysinq 3/12 */}
            <Box bgcolor="primary.light" padding={2}>
              Item1
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/*asum enq sm-i jamanak, aysinqn kompi jamanak 6 exni, isk heraxosini jamanak 12 */}
            <Box bgcolor="primary.light" padding={2}>
              Item2
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="primary.light" padding={2}>
              Item3
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box bgcolor="primary.light" padding={2}>
              Item4
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
