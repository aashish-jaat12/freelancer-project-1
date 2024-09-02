import React, { useState } from "react";
import { Link ,useLocation} from "react-router-dom";
import "./navbar.css";
import {
  FaLinkedin,
  FaInstagram,
  FaDribbble,
  FaWhatsapp,
} from "react-icons/fa";

function Navbar() {
  const location = useLocation()
  return (<div className=" fixed-top">
    <nav className="navbar  navbar-expand-lg navbar-light bg-light" id='navbar1' >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="https://primelife.in/cdn/shop/files/prime-life-logo.png?v=1613556162" alt="logop.." /> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>  </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className= "nav-link"  id={location.pathname === '/' ? 'action' : null} to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  id={location.pathname === '/products' ? 'action' : null} to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  id={location.pathname === '/AboutAs' ? 'action' : null} to="/AboutAs">AboutAs</Link>
        </li>
        <li className="nav-item">
          <Link id={location.pathname === '/contact' ? 'action' : null} className="nav-link" to="/contact">Contact </Link>
        </li>
      
      </ul>
    </div>
</nav>
  <div className="topheading ">
  <div className="social-icon">
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaDribbble />
          </a>
          <a href="#">
            <FaWhatsapp />
          </a>
        </div>
  <h5>Help Center -  <a href="#">
            <FaWhatsapp color="aqua" />
          </a></h5>
  
</div>
</div>
  );
}

export default Navbar;
