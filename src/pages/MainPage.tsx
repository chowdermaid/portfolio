import { Box } from "@mui/material";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";

const MainPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Box component={Sidebar} />
      <Box component={Main} />
    </Box>
  );
};

export default MainPage;
