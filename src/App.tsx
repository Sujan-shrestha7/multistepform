import React from "react";
import MultiStepForm from "./components/MultiStepForm";
import Header from "./components/Header";
import itech from "./images/itech.jpg";

function App() {
  return (
    <div>
      <Header />
      <div>
        <img className="w-full" src={itech} alt="" />
      </div>
      <div className="flex bg-[#22073F] items-center justify-center min-h-screen">
        <MultiStepForm />
      </div>
    </div>
  );
}

export default App;
