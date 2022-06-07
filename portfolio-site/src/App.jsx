import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import "./app.scss"
import React from 'react'

function App() {

  return (
    <div className="app">
      <Topbar/>
      
      <div className="sections">
        <Intro/>
        ji
        <Portfolio/>
        <Contact/>

      </div>
    </div>
  );
}

export default App;
