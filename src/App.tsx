import React from "react";
import MultiStepForm from "./components/MultiStepForm";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <MultiStepForm />
      </div>
    </div>
  );
}

export default App;
