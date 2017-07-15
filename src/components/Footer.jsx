import React from 'react';
import { Link } from 'react-router';
import ArrowIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-up';

const Footer = () => (
  <div className="footer">
    <ul>
      <li>
        <Link to="/terms">Terms and Conditions</Link>
      </li>
      <li>
        <Link to="/privacy">Privacy Policy</Link>
      </li>
    </ul>
    <p>Use of this website signifies your agreement to the Terms and Conditions and Privacy Policy.</p>
    <div id="toplink">
      <a href="" className="top-link" title="Back to top">Back To Top <ArrowIcon color="#fff" /></a>
    </div>
  </div>
);

export default Footer;
