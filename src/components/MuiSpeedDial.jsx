import React from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

export const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction 
      icon={<CopyIcon />}
       tooltipTitle="Copy" //hoveri jamanak grvuma te incha anum et knopken, 
       tooltipOpen//vor miangamic ereva voch te hoveri jamanak
        />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
    </SpeedDial>
  );
};
