import "./App.css";
import Child from "./components/Child";
import Parent from "./components/Parent";

function App() {
  return (
    <>
      <h1>useCallback + React.memo</h1>
      <Parent />
      <Child />
    </>
  );
}

export default App;
