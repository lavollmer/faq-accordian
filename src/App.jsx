import "./App.css";
import "./index.css";
import Accordian from "./components/Accordian.jsx"

function App() {
  return (
    <>
      <div className="background-container">
        <div className="image-background"></div>
        <div className="color-background"></div>
      </div>
      <div>
        <Accordian />
      </div>
    </>
  );
}

export default App;
