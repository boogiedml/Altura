import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/collections" />} />
      <Route path="/collections" element={<Home />} />
      <Route path="*" element={<Navigate to="/collections" />} />
    </Routes>
  );
};

export default Routers;
