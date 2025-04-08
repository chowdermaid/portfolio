import { Box, Typography, keyframes } from "@mui/material";
import { AnimatedBackground } from "animated-backgrounds";

const Home = () => {
  const waveAnimation = keyframes`
  0% { transform: rotate(0deg); }
  15% { transform: rotate(14deg); }
  30% { transform: rotate(-8deg); }
  40% { transform: rotate(14deg); }
  50% { transform: rotate(-4deg); }
  60% { transform: rotate(10deg); }
  70% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <AnimatedBackground
        animationName="auroraBorealis"
        // animationName="geometricShapes"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <Box
        id="home"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
          marginTop: "5%",
          marginBottom: "15%",
          gap: "2rem",
        }}
      >
        <Typography
          fontWeight={500}
          sx={{ zIndex: 1, marginBottom: "20%" }}
          variant="h2"
        >
          Hello World{" "}
          <Box
            component="span"
            sx={{
              display: "inline-block",
              animation: `${waveAnimation} 2.5s infinite`,
              transformOrigin: "70% 70%",
            }}
          >
            👋
          </Box>
        </Typography>
        <Typography sx={{ zIndex: 1 }} variant="h3">
          I'm Darwin Chow, A Full Stack Developer.
        </Typography>
        <Typography sx={{ zIndex: 1 }} variant="h5">
          I build software with a passion for creating great-looking,
          user-friendly web applications.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
