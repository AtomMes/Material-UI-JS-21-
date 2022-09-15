import { 
  Box,
   Tab//navigaciayi tabna
 } from "@mui/material";
import { 
  TabContext, //mejnen gtnvum naviacion tabery u erevacox cherevacox tabery
   TabList, //navigaciayi tabery mejnen
   TabPanel //erevacox cherevacox tabna kaxvac navigaciayic
  } from "@mui/lab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";

export const MuiTabs = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (e, newValue) => {
    setValue(newValue);//newValue-n en valuen vory vor poxancvuma tabic
  };

  return (
    <Box>
      <TabContext value={value}//es value-ov a voroshvum vor TabPanely ereva, value-n galisa navigaciayic
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}width='400px'>
          <TabList
            aria-label="Tabs example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"//taki toxi colorna
            variant="scrollable"//vor ete konkret width a tvac widthic mecana scroll arajana
            scrollButtons="auto"//disable a anum erb vor petqa, voncor default senca
            centered//scrolly xangaruma sran, bayc ete scroll chi exnum nra hamara vor tani mejtex navigaciayi tabery
          >
            <Tab
              label="tab one"//teqstna 
              value="1"//arjeqna vor onclicki jamanak poxancvuma
              icon={<FavoriteIcon />}//teqsti heti ikonken
              iconPosition="start"//pazician ikonki hamematac texti
            />
            <Tab label="tab two" value="2" disabled />
            <Tab label="tab three" value="3" />
            <Tab label="tab for" value="4" />
            <Tab label="tab five" value="5" />
            <Tab label="tab six" value="6" />
          </TabList>
        </Box>
        <TabPanel
         value="1" //ete tabcontexti u sra valuen nuynna et jamanaka sa erevum
         >Panel one</TabPanel>
        <TabPanel value="2">Panel two</TabPanel>
        <TabPanel value="3">Panel three</TabPanel>
        <TabPanel value="4">Panel For</TabPanel>
        <TabPanel value="5">Panel Five</TabPanel>
        <TabPanel value="6">Panel Six</TabPanel>
      </TabContext>
    </Box>
  );
};
