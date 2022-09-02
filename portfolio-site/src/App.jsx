import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import ThisSite from "./components/project/ThisSite";
import F1tenth from "./components/project/F1tenth";
import Fun3 from "./components/project/Fun3";


import {  Routes, Route } from "react-router-dom";
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
          <Route exact path='/projects/thisSite' element={<ThisSite/>}/>          
          <Route exact path='/projects/f1tenth' element={<F1tenth/>}/>
          <Route exact path='/projects/fun3' element={<Fun3/>}/>

      </Routes>
      <div className="sections">
      </div>
    </div>
  );
}

export default App;
