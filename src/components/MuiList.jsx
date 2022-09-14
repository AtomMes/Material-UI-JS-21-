import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";

export const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#fff" }}>
      <List //yndhanur sax itemnery sra mej en, listna mer
      >
        <ListItem //List itemnalisti meji,
          disablePadding //ira sovorakan paddingnery disable a anum qani vor ete button enq sarqum listy inqy paddingnera arajacnum,
        >
          <ListItemButton //Ete uzum enq listy button exni
          >
            <ListItemIcon // ikonka uni listy
            >
              <ListItemAvatar //ikonken avatari tesqova drvum(kloraki mej eli)
              >
                <Avatar //henc avatar komponenty
                >
                  <MailIcon //Iconkena prosty, avatari mej ikonka senc en dnum
                  />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText //textna Itemi
             primary="list item 1"  //glxavor teqstna 
             secondary="Secondary text" //2rd toxi vri teqstna erkrordakan sprtnac
              />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="list item 2" secondary="Secondary text" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="list item 3" secondary="Secondary text" />
        </ListItem>
      </List>
    </Box>
  );
};
