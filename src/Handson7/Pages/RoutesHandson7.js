import React from "react";
import Home from "./Home";
import ContactUs from "./ContactUs";
import Student from "./Student";
import { Routes, Route } from "react-router-dom";
import AddNewStudent from "./AddNewStudent";
import EditStudent from "./EditStudent";


const RoutesHandson7 = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student" element={<Student />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/addnewstudent" element={<AddNewStudent />} />
      <Route path="/editstudent" element={<EditStudent />} />
    </Routes>
  );
};

export default RoutesHandson7;
