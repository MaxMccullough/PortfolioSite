import "./topbar.scss"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'

const Topbar = () => {
  const [show, setShow] = useState(true)
  const controlTopbar = () => {
    if (window.scrollY > 100) {
      setShow(false)
    } else {
      setShow(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', controlTopbar)
    return () => {
      window.removeEventListener('scroll', controlTopbar)
    }
  }, [])
  return (
    <div className={`nav ${show && 'topbar'}`}>
      <div className="wrapper">
        <div className="left">
          <a href="/" className="logo">MAX</a>
          <div className="navItems">
            <p><Link to="/intro" style={{ textDecoration: 'none', fontSize: '30px', color: 'white', fontWeight: '200' }}>INTRO&ensp;</Link></p>
            <p><Link to="/contact" style={{ textDecoration: 'none', fontSize: '30px', color: 'white', fontWeight: '200' }}>CONTACT&ensp;</Link></p>
            <p><Link to="/projects" style={{ textDecoration: 'none', fontSize: '30px', color: 'white', fontWeight: '200' }}>PROJECTS&ensp;</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Topbar
