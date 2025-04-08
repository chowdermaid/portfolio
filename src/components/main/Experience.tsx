import {
  Timeline,
  timelineOppositeContentClasses,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { Box, Typography, Divider } from "@mui/material";

const Experience = () => {
  return (
    <Box
      id="experience"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        backgroundColor: "#242424",
        gap: "1rem",
      }}
    >
      <Typography variant="h3">Experience</Typography>
      <Divider
        sx={{ width: "30%", alignSelf: "center", marginBottom: "1rem" }}
        variant="middle"
      />
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
          marginTop: "3rem",
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            <Typography> 02/2024 - 02/2025</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography sx={{ marginTop: "-1%" }} variant="h4">
              DevOps Engineer
            </Typography>
            <Typography variant="caption">QANTAS</Typography>
            <Typography
              sx={{ marginTop: "1rem", marginBottom: "3rem" }}
              variant="body1"
            >
              In my DevOps role, I continued on the duties from my Software
              Developer role but took on extra responsibilities. I deployed and
              maintained applications on AWS using EC2, S3, RDS. Established
              CI/CD pipelines with GitHub for automated deployments, and
              containerized applications using Docker. I facilitated Agile
              ceremonies to improve cross-functional team collaboration and
              delivery.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            <Typography> 12/2022 - 02/2024</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ fontSize: "2rem" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography sx={{ marginTop: "-1%" }} variant="h4">
              Software Developer
            </Typography>
            <Typography variant="caption">QANTAS</Typography>
            <Typography
              sx={{ marginTop: "1rem", marginBottom: "3rem" }}
              variant="body1"
            >
              As a Software Developer, continuing on directly from my internship
              I built web applications across the stack, the frontend extended
              using essential libraries such as React Query, Redux, Router,
              Cypress & module federation. Rewrote an application using Python,
              FastAPI, and mySQL, adopting a test-driven approach for REST API
              development. I also designed many custom UI components, icons &
              branding using Illustrator.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            <Typography> 06/2022 - 12/2022</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ fontSize: "2rem" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography sx={{ marginTop: "-1%" }} variant="h4">
              Engineering Intern
            </Typography>
            <Typography variant="caption">QANTAS</Typography>
            <Typography
              sx={{ marginTop: "1rem", marginBottom: "3rem" }}
              variant="body1"
            >
              My software developer journey began at Qantas, designing UI
              wireframes and prototypes in Figma, creating standalone frontend
              web applications derived from the mockups using React, TypeScript,
              MUI. I also heavily used Python & powershell to write automation
              scripts.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            <Typography> 02/2018 - 06/2022</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ fontSize: "2rem" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography sx={{ marginTop: "-1%" }} variant="h4">
              Bachelor of Computer Science
            </Typography>
            <Typography variant="caption">
              UNIVERSITY OF NEW SOUTH WALES
            </Typography>
            <Typography
              sx={{ marginTop: "1rem", marginBottom: "3rem" }}
              variant="body1"
            ></Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            <Typography> 02/2016 - 01/2017</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={{ fontSize: "2rem" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography sx={{ marginTop: "-1%" }} variant="h4">
              Diploma of Graphic Design
            </Typography>
            <Typography variant="caption">
              BILLY BLUE COLLEGE OF DESIGN
            </Typography>
            <Typography sx={{ marginTop: "1rem" }} variant="body1"></Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default Experience;
