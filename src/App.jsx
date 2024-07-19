import "./App.css";
import "./index.css";
import React from "react";
import { useState } from "react";
import iconStar from "./assets/icon-star.svg";
import iconPlus from "./assets/icon-plus.svg";
import iconMinus from "./assets/icon-minus.svg";
import backgroundPattern from "./assets/background-pattern-desktop.svg";

function App() {
  const [active, setActive] = useState(false);

  //array of data to be displayed in the FAQ section
  const data = [
    {
      intro: "What is Frontend Mentor, and how will it help me?",
      pg: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
      id: 1,
    },
    {
      intro: "Is Frontend Mentor Free?",
      pg: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
      id: 2,
    },
    {
      intro: " Can I use Frontend Mentor projects in my portfolio?",
      pg: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
      id: 3,
    },
    {
      intro: "How can I get help if I'm stuck on a Frontend Mentor challenge? ",
      pg: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
      id: 4,
    },
  ];

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-light-pink font-worksans">
        <img src={backgroundPattern} alt="icon star" className="h-[250px] object-cover w-[100vw] absolute z-0 top-0"/>
        <div className="w-[400px] md:max-w-[600px] md:w-auto z-10 rounded-lg flex flex-col p-3 text-dark-purple bg-white">
          <div className="flex items-center my-4">
            <img src={iconStar} alt="avatar" className="rounded-full h-20 w-20" />
            <h1 className="font-bold text-dark-purple text-3xl md:text-4xl">FAQS</h1>
          </div>
          <div className="flex flex-col gap-4">
            {/* iterates over each item in the data array - for each item the function returns JSX */}
            {data.map((item) => (
              // key prop is required for each child in a list
              <div key={item.id}>
                <div className="flex justify-between p-2 hover:text-purple-600 items-center">
                  <h1 className="text-lg font-bold w-[75%] md:w-[90%] leading-6 tracking-wide mb-2 cursor-pointer">
                    {item.intro}
                  </h1>
                  {/* image to serve as button to toggle active state */}
                  <img
                    src={active === item.id ? iconMinus : iconPlus}
                    alt="icon"
                    className="w-6 h-6 cursor-pointer"
                    // onClick event handler to toggle active state
                    onClick={() => active === item.id ? setActive(0) : setActive(item.id)}/>
                </div>
                {/* conditional rendering block that checks if the current item is the active one */}
                {active === item.id ? (
                  <p className="text-gray-500 dark:text-gray-400">{item.pg}</p>
                ) : (
                  <p></p>
                )}
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
