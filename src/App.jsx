import "./App.css";
import backgroundPatternDesktop from "./assets/background-pattern-desktop.svg";
import backgroundPatternMobile from "./assets/background-pattern-mobile.svg";
import iconMinus from "./assets/icon-minus.svg";
import iconPlus from "./assets/icon-plus.svg";
import iconStar from "./assets/icon-star.svg";

function App() {
  return (
    <>
      <div>
        <img
          className="bg-cover"
          src={backgroundPatternDesktop}
          alt="background pattern desktop"
        />
        <div className="bg-grayish-purple">
          <h1>Hello</h1>
        </div>
      </div>
    </>
  );
}

export default App;
