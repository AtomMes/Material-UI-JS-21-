import React from "react";
import { Stack, Link, Typography } from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Link</Link>
        <Link
        variant="h6"
          href="#"
          color="secondary"
          underline="hover" //underline arajanuma hoveri jamanak, karanq none tanq vor vabshe chereva
        >
          Secondary
        </Link>
    </Stack>
  );
};
