import "./App.css";
import "./index.css";
import backgroundPatternDesktop from "./assets/background-pattern-desktop.svg";
import backgroundPatternMobile from "./assets/background-pattern-mobile.svg";
import iconMinus from "./assets/icon-minus.svg";
import iconPlus from "./assets/icon-plus.svg";
import iconStar from "./assets/icon-star.svg";
import Accordian from "./components/Accordian";

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
