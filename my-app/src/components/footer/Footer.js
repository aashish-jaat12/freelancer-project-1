import React from "react";
import "./fooetr.css";

function Footer() {
  return (
    <footer className="footer">
       <div className="social-media">
        <p>Get connected with us on social networks:</p>
        <div className="social-icons">
          <a href="#"><i className="bx bxl-linkedin"></i></a>
          <a href="#"><i className="bx bxl-gmail"></i></a>
          <a href="#"><i className="bx bxl-instagram-alt"></i></a>
          <a href="#"><i className="bx bxl-whatsapp"></i></a>
          <a href="#"><i className="bx bxl-telegram"></i></a>
        
        </div>
      </div>
    <div className="footer-container">
      <div className="footer-section company">
        <h3>COMPANY NAME</h3>
        <p>I am Ashish Choudhary. I am a web developer based in Jaipur. I have been doing web development since 2021 and have worked with various library and framework. I help you to code your complex Web designs and provide a full-stack solution from website creation to delivery.</p>
      </div>
      <div className="footer-section products">
        <h3>PRODUCTS</h3>
        <ul>
          <li><a href="#">Web-Development </a></li>
          <li><a href="#">App-Development </a></li>
          <li><a href="#">Software Development</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>
      <div className="footer-section contact">
        <h3>CONTACT</h3>
        <ul>
          <li><i className="bx bxs-map"></i> Jaipur, Rj 302012, India</li>
          <li><i className="bx bxl-gmail"></i> ashishjat126@gmail.com</li>
          <li><i className="bx bxs-phone"></i> + 91 7232816781</li>
          <li><i className="bx bxs-phone"></i> + 91 6367321255</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2024 Copy right By: <a href="#">Aashish Choudhary</a></p>
    </div>
  </footer>
  
  );
}

export default Footer;
