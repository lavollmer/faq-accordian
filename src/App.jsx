import "./App.css";
import "./index.css";
import Accordian from "./components/Accordian.jsx";

function App() {
  return (
    <>
      <div className="background-container">
        <div className="image-background z-10"></div>
        <div className="color-background z-10">
          <Accordian className="absolute z-50" />
        </div>
      </div>
    </>
  );
}

export default App;
