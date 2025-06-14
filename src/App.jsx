import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
// import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
