import {
  Avatar,
  Box,
  Card,
  CardActions,
  Link,
  Typography,
} from "@mui/material";
import SidebarTabs from "./SidebarTabs";
import { GitHub, LinkedIn } from "@mui/icons-material";
import avatar from "../../assets/avatar.jpeg";

const Sidebar = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "20%",
        // height: "50vh",
        flex: 1,
        position: "fixed",
        top: 0,
        marginTop: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "20%",
          backgroundColor: "#494949",
          padding: "2rem",
        }}
      >
        <Avatar
          sx={{
            alignSelf: "center",
            marginBottom: "1rem",
            width: "40%",
            height: "40%",
          }}
          alt="Darwin Chow"
          src={avatar}
        />
        <Typography variant="h5">Darwin Chow</Typography>
        <Typography variant="overline">Full Stack Developer</Typography>
      </Box>
      <SidebarTabs />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#494949",
          padding: "1rem",
        }}
      >
        <Typography variant="caption">darwinchow98@gmail.com</Typography>
        <Typography variant="caption">+61 415268812</Typography>
      </Box>
      <CardActions
        sx={{ display: "flex", justifyContent: "center", padding: "1rem" }}
      >
        <Link
          href="https://github.com/chowdermaid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/darwin-chow/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </Link>
      </CardActions>
    </Card>
  );
};

export default Sidebar;
