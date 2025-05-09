import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/shared.css";

const App: React.FC = () => {
  //function App() {
  return (
    <div className="app-wrapper">
      <h1>My CV</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  );
};

export default App;
