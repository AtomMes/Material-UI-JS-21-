import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

export const MuiTooltip = () => {
  return (
    <Tooltip
      title="Delete" //hoveri jamanak erevacox teqstna
      placement="right" // hoveri jamanak erevacox teqsti texna
      arrow // hoveri jamanak teqsty arrow unena vor sirun exni
      enterDelay={500} //ete 500ms ic avela hover anum et jamanaka erevum vor prosty vrov mkniky ancni hovery chkore
      leaveDelay={200} //ete 200ms hover chi anum arden et jamanaka korum vor patahakan unhover ani chkori
    >
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
};
