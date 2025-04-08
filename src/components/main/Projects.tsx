import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import boredGames from "../../assets/boredgames.png";

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: "#242424",
        gap: "2rem",
      }}
    >
      <Typography variant="h3">Projects / Showcase</Typography>
      <Divider
        sx={{ width: "30%", alignSelf: "center", marginBottom: "1rem" }}
        variant="middle"
      />
      <Card sx={{ width: "50%" }}>
        <CardActionArea
          component="a"
          href="https://bored-games-3900.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardMedia
            component="img"
            height="300"
            image={boredGames}
            alt="boredgamesexample"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              BoredGames
            </Typography>
            <Typography variant="body1">
              An E-commerce website for board games, built with React,
              TypeScript, Python, and MongoDB. Has a full auth system,
              card/checkout, shop filter system, and implementation of a
              content-based recommender system based on user preferences.
            </Typography>
            <Typography variant="caption">
              (Unfortunately, database cluster connected to this project could
              not be recovered)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Projects;
