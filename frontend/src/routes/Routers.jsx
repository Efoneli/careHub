import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors";
import Details from "../pages/Doctors/Details";
import ServiceMoreDetail from "../pages/ServiceMoreDetail";
import Chatbot from "../pages/Chatbot";
import Appointment from "../pages/Appointment";
import Location from "../pages/Location";


import { Routes, Route } from "react-router-dom";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<Details />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/service/:name" element={<ServiceMoreDetail />} /> 
      <Route path="/chatbot" element={<Chatbot />} /> 
      <Route path="/service/:name" element={<ServiceMoreDetail />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/location" element={<Location />} /> 
    </Routes>
  );
};

export default Routers;
