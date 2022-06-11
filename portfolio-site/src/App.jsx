import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import { Link, Routes, Route, Router } from "react-router-dom";
import "./app.scss"
import React from 'react'

function App() {

  return (
    <div className="app">
      <Topbar/>
      <Routes>
          <Route exact path='/' element={<Intro />} />
          <Route exact path='/intro' element={<Intro />} />
          <Route exact path='/projects' element={<Portfolio />} />
          <Route exact path='/Contact' element={<Contact />} />

      </Routes>
      <div className="sections">
      </div>
    </div>
  );
}

export default App;
