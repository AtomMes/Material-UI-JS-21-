import React from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const MuiBreadCrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}//seperatorov yntrum enq te iraric inchov petqa arandznanan, kara lini teqst kara lini icon
        maxItems={2}//maqsimum itemneri qanaky erevacox,
        itemsAfterCollapse={2}//collapsic araj itemneri qanaky
        itemsBeforeCollapse={3}//collapsic heto itemneri qanaky
      >
        <Link underline="hover" color="error" href="#">
          Home
        </Link>
        <Link underline="hover" color="error" href="#">
          Catalog
        </Link>
        <Link underline="hover" color="error" href="#">
          Accessories
        </Link>
        <Link underline="hover" color="error" href="#">
          About us
        </Link>
        <Link underline="hover" color="error" href="#">
          Card
        </Link>
        <Link underline="hover" color="error" href="#">
          Pages
        </Link>
        <Link underline="hover" color="error" href="#">
          Our team
        </Link>
        <Link underline="hover" color="error" href="#">
          Find us in
        </Link>
        <Link underline="hover" color="error" href="#">
          Our works
        </Link>
        <Link underline="hover" color="error" href="#">
          Settings
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};
