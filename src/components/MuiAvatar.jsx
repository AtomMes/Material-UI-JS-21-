import { Avatar, Stack, AvatarGroup } from "@mui/material";
import React from "react";
export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.dark" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.dark" }}>CK</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={4}>{/*gruppana vor ira mej dasavormvum en irar mej mtnum ev ayln */}
          <Avatar
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Jane"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/2.jpg"
            alt="Jane"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="Jane"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/4.jpg"
            alt="Jane"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/5.jpg"
            alt="Jane"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/6.jpg"
            alt="Jane"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar
          variant="square"//square aysinqn qarakusi a inqy
          sx={{ bgcolor: "primary.dark", width: 108, height: 48 }}
        >
          BW
        </Avatar>
        <Avatar sx={{ bgcolor: "success.dark", width: 70, height: 18 }}>
          CK
        </Avatar>
        <Avatar
          variant="rounded"//rounded aysinqn qarakusiya bayc border radius tvac
          sx={{ bgcolor: "error.dark", width: 30, height: 40 }}
        >
          AM
        </Avatar>
      </Stack>
    </Stack>
  );
};
