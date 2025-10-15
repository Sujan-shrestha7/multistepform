import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";

const Router = () => {
  return (
    <BrowserRouter>
      {/* Future Routes can be added here */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contactus" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
