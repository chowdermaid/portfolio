import { Download } from "@mui/icons-material";
import { Box, Typography, Tooltip, Button, Divider } from "@mui/material";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume-darwin.pdf";
    link.download = "resume-darwin.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Box
      id="resume"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        gap: "1rem",
      }}
    >
      <Typography variant="h3">Resume</Typography>
      <Divider
        sx={{ width: "30%", alignSelf: "center", marginBottom: "1rem" }}
        variant="middle"
      />
      <Tooltip title="Download file">
        <Button
          startIcon={<Download />}
          onClick={handleDownload}
          variant="contained"
        >
          Download Resume
        </Button>
      </Tooltip>
    </Box>
  );
};

export default Resume;
