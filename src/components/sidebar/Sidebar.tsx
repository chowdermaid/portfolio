import {
  Avatar,
  Box,
  Card,
  CardActions,
  Link,
  Typography,
} from "@mui/material";
import SidebarTabs from "./SidebarTabs";
import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";
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
          justifyContent: "center",
          backgroundColor: "#494949",
          padding: "1rem",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <Email fontSize="small" />
          <Typography variant="body2">darwinchow98@gmail.com</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <Phone fontSize="small" />
          <Typography variant="body2">+61 415268812</Typography>
        </Box>
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
