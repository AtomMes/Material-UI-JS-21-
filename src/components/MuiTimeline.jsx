import {
  Timeline, //sax timelinery sra mej en, wrapperna
  TimelineItem, //itemnery
  TimelineSeparator, //tochkena u gicy, mejy
  TimelineConnector, //gicna
  TimelineDot, //tochkena
  TimelineContent, //Teqstna glxavor
  TimelineOppositeContent, //hakarak koxmum gtnox teqstna erkrordakan
} from "@mui/lab";

import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import React from "react";

export const MuiTimeline = () => {
  return (
    <Timeline
      position="alternate" //glxavor texti pozician Timeline-i hamemat
    >
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City A</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          10:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City B</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          11:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>City C</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
