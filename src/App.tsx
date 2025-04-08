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
