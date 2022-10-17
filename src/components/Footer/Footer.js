import React from "react"
import './Footer.css';

const Footer = () => {
  return <footer>
    <div className="container">
      <div className="info-area">
        <div className="column">
          <a href="https://github.com/so-sc">GitHub</a>
          <a href="https://instagram.com/sosc.sahyadri">Instagram</a>
          <a href="https://linkedin.com/company/sosc-sahyadri">LinkedIn</a>
          <a href="https://twitter.com/sahyadri_osc">Twitter</a>
        </div>
        <div className="column">
          <a href="https://github.com/so-sc/code-of-conduct">Community Guidelines</a>
          <a href="https://github.com/so-sc/code-of-conduct">Code of Conduct</a>
        </div>
        <div className="column">
            Sahyadri Open-Source Community<br />
            Sahyadri College of Engineering and Management,
            Adyar, Mangalore - 575007 IN<br /><br />
            sosc@sahyadri.edu.in<br />
            +91 89047 51906
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <p>devhost © {new Date().getFullYear()}</p>
    </div>
  </footer>
}

export default Footer;