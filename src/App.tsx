import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GlobalProvider } from "./providers/GlobalContext";
import Theme from "./providers/Theme";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Theme>
      <GlobalProvider>
        <MainPage />
      </GlobalProvider>
    </Theme>
  );
}

export default App;
