import React from 'react';
import { Link } from 'react-router';
import ArrowIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-up';

const Footer = () => (
  <div className="footer">
      <div className="columns">
        <ul className="left">
          <li>
            <h3>About</h3>
          </li>
          <li>
            <Link to="/about">About 1on1tracker</Link>
          </li>
          <li>
            <Link to="/about-me">About me</Link>
          </li>
        </ul>
        <ul className="middle">
          <li>
            <h3>Support</h3>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/terms">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
        </ul>
        <ul className="right">
          <li>
            <h3>Follow</h3>
          </li>
          <li>
            <a href="https://github.com/VGraupera/1on1tracker">GitHub</a>
          </li>
          <li>
            <a href="https://twitter.com/vgraupera">Twitter</a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/vidalgraupera/">Linkedin</a>
          </li>
        </ul>
    </div>
     <p className="disclaimer">Use of this website signifies your agreement to the <Link to="/terms">Terms and Conditions</Link> and <Link to="/privacy">Privacy Policy</Link>.</p>
    <div id="toplink">
      <a href="#" className="top-link" title="Back to top">Back To Top <ArrowIcon color="#fff" /></a>
    </div>
  </div>
);

export default Footer;
