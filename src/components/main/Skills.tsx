import { Box, Typography, Divider } from "@mui/material";
import StackIcon from "tech-stack-icons";

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        paddingBottom: "5rem",
        gap: "1rem",
      }}
    >
      <Typography variant="h3">Skills</Typography>
      <Divider
        sx={{ width: "30%", alignSelf: "center", marginBottom: "1rem" }}
        variant="middle"
      />
      <Typography variant="h4">Languages</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            backgroundColor: "#242424",
            boxShadow: 2,
            gap: "0.5rem",
            padding: "0.5rem",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#757575",
            },
          }}
        >
          <StackIcon style={{ width: "15%" }} name="html5" />
          <Typography variant="body1" fontWeight={500}>
            HTML
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            backgroundColor: "#242424",
            boxShadow: 2,
            gap: "0.5rem",
            padding: "0.5rem",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#757575",
            },
          }}
        >
          <StackIcon style={{ width: "15%" }} name="css3" />
          <Typography variant="body1" fontWeight={500}>
            CSS
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            backgroundColor: "#242424",
            boxShadow: 2,
            gap: "0.5rem",
            padding: "0.5rem",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#757575",
            },
          }}
        >
          <StackIcon style={{ width: "15%" }} name="js" />
          <Typography variant="body1" fontWeight={500}>
            JavaScript
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            backgroundColor: "#242424",
            boxShadow: 2,
            gap: "0.5rem",
            padding: "0.5rem",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#757575",
            },
          }}
        >
          <StackIcon style={{ width: "15%" }} name="typescript" />
          <Typography variant="body1" fontWeight={500}>
            TypeScript
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            backgroundColor: "#242424",
            boxShadow: 2,
            gap: "0.5rem",
            padding: "0.5rem",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#757575",
            },
          }}
        >
          <StackIcon style={{ width: "15%" }} name="python" />
          <Typography variant="body1" fontWeight={500}>
            Python
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            backgroundColor: "#242424",
            boxShadow: 2,
            gap: "0.5rem",
            padding: "0.5rem",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#757575",
            },
          }}
        >
          <StackIcon style={{ width: "15%" }} name="go" />
          <Typography variant="body1" fontWeight={500}>
            Go
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ marginTop: "2rem" }} variant="h4">
        Technologies
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            backgroundColor: "#242424",
            boxShadow: 2,
            gap: "0.5rem",
            padding: "0.5rem",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#757575",
            },
          }}
        >
          <StackIcon style={{ width: "15%" }} name="reactjs" />
          <Typography variant="body1" fontWeight={500}>
            React
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            backgroundColor: "#242424",
            boxShadow: 2,
            gap: "0.5rem",
            padding: "0.5rem",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#757575",
            },
          }}
        >
          <StackIcon style={{ width: "15%" }} name="nodejs" />
          <Typography variant="body1" fontWeight={500}>
            NodeJS
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            backgroundColor: "#242424",
            boxShadow: 2,
            gap: "0.5rem",
            padding: "0.5rem",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#757575",
            },
          }}
        >
          <StackIcon style={{ width: "15%" }} name="git" />
          <Typography variant="body1" fontWeight={500}>
            Git
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            backgroundColor: "#242424",
            boxShadow: 2,
            gap: "0.5rem",
            padding: "0.5rem",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#757575",
            },
          }}
        >
          <StackIcon style={{ width: "15%" }} name="mysql" />
          <Typography variant="body1" fontWeight={500}>
            MySQL
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            backgroundColor: "#242424",
            boxShadow: 2,
            gap: "0.5rem",
            padding: "0.5rem",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#757575",
            },
          }}
        >
          <StackIcon style={{ width: "15%" }} name="docker" />
          <Typography variant="body1" fontWeight={500}>
            Docker
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            backgroundColor: "#242424",
            boxShadow: 2,
            gap: "0.5rem",
            padding: "0.5rem",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#757575",
            },
          }}
        >
          <StackIcon style={{ width: "15%" }} name="aws" />
          <Typography variant="body1" fontWeight={500}>
            AWS
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            backgroundColor: "#242424",
            boxShadow: 2,
            gap: "0.5rem",
            padding: "0.5rem",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#757575",
            },
          }}
        >
          <StackIcon style={{ width: "15%" }} name="figma" />
          <Typography variant="body1" fontWeight={500}>
            Figma
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
