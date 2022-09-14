import { Badge, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">{/*contenty en tivna vory vor cuyc tali ek kloraky */}
        <MailIcon />{/*te inchi verevy cuyc ta et klory */} 
      </Badge>
      <Badge badgeContent={0} color="secondary">{/*ete zroya vochmi ban cuyc chi tali */}
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>{/*asumenq daje ete zroya cuyc tur */}
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary">{/*default ete 99 ic avela 99+ a grum */}
        <MailIcon />
      </Badge>
      <Badge badgeContent={1000} color="primary" max={999}>{/*karanq maximumy poxenq lyuboy tiv grenq */}
        <MailIcon />
      </Badge>
      <Badge variant="dot" badgeContent={5} color="primary">{/*sabshennineri qanaky kap chuni inqy misht tochkaya cuyc talis */}
        <MailIcon />
      </Badge>
      <Badge variant="dot" badgeContent={5} color="primary" invisible={true}>{/*asumenq ereva kam cherev et verevi kloraky (invisible-ov) */}
        <MailIcon />
      </Badge>
    </Stack>
  );
};
