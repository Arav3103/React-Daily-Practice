import "./App.css";
import Color from "./components/Color";
import Mode from "./components/Mode";
import ToggleButton from "./components/ToggleButton";
import ThemeProvider from "./provider/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Mode />
      <Color />
      <ToggleButton />
    </ThemeProvider>
  );
}

export default App;
