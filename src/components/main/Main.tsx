import { Box, Card } from "@mui/material";
import ScrollSpy from "react-ui-scrollspy";

import Resume from "./Resume";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Home from "./Home";

const Main = () => {
  return (
    <ScrollSpy
      activeClass="Mui-selected"
      scrollThrottle={80}
      useBoxMethod
      offsetBottom={100}
    >
      <Box sx={{ width: "77%", marginLeft: " auto" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",

            height: "100%",
            flex: 1,
          }}
        >
          <Home />
          <Experience />
          <Skills />
          <Projects />
          <Resume />
        </Card>
      </Box>
    </ScrollSpy>
  );
};

export default Main;
