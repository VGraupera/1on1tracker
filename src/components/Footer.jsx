import React from 'react';
import { Link } from 'react-router';

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
    <p class="small">Use of this website signifies your agreement to the Terms and Conditions and Privacy Policy.</p>
    <div id="toplink">
      <a href="#" class="top-link" title="Back to top">Back To Top <i class="fa fa-chevron-up"></i></a>
    </div>
  </div>
);

export default Footer;
