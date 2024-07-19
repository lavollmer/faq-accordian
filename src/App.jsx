import "./App.css";
import "./index.css";
import React from "react";
import { useState } from "react";
import iconStar from "./assets/icon-star.svg";
import iconPlus from "./assets/icon-plus.svg";
import iconMinus from "./assets/icon-minus.svg";
import backgroundPattern from "./assets/background-pattern-desktop.svg";

function App() {
  const [isOpen, setIsOpen] = useState(0);

  const info = [
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
        <img src={backgroundPattern} alt="icon star" className="h[250px] object-cover w-[100vw] absolute z-0 top-0"/>
      <div>
        <div>
          <img src={iconStar} alt="avatar" className="rounded-full h-20 w-20" />
          <h1 className="font-bold text-dark-purple text-4xl">FAQS</h1>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
