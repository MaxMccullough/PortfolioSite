import "./topbar.scss"
import { Link } from "react-router-dom";




export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">        
        <div className="left">
          <a href="/" className="logo">MAX</a>
          <div className="navItems">
            <p><Link to="/intro" style={{ textDecoration: 'none', fontSize: '30px', color: 'white', fontWeight: '300' }}>INTRO&ensp;</Link></p>
            <p><Link to="/projects" style={{ textDecoration: 'none', fontSize: '30px', color: 'white', fontWeight: '300' }}>PROJECTS&ensp;</Link></p>
            <p><Link to="/contact" style={{ textDecoration: 'none', fontSize: '30px', color: 'white', fontWeight: '300' }}>CONTACT&ensp;</Link></p>


          </div>
        </div>
      </div>
    </div>
  );
}
