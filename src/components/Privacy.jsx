import React from 'react';
import Divider from 'material-ui/Divider';

import { brightGreen } from '../colors';

const style = {
  background: {
    padding: '50px'
  },
  title: {
    color: brightGreen
  }
};

const Privacy = () => (
  <div style={style.background}>
    <h1 style={style.title}>Privacy Policy</h1>
    <p>Last updated: March 24, 2017</p>

    <Divider />

    <p style={{ paddingTop: '10px' }}>
      Your privacy is very important to us. Accordingly, we have developed this Policy in order
      for you to understand how we collect, use, communicate and disclose and make use of
      personal information. The following outlines our privacy policy.
    </p>

    <ul>
      <li>
        We will collect and use of personal information solely with the objective of bettering
        the user's experience or for other compatible purposes.
      </li>
      <li>
        We will only retain personal information as long as necessary for the fulfillment of
        those purposes.
      </li>
      <li>
        We will collect personal information by lawful and fair means and, where appropriate,
        with the knowledge or consent of the individual concerned.
      </li>
      <li>
        We will attempt to protect personal information by reasonable security safeguards
        against loss or theft, as well as unauthorized access, disclosure, copying, use or
        modification.
      </li>
      <li>
        We will make readily available to users information about our policies and
        practices relating to the management of personal information.
      </li>
      <li>
        We may use analytics software, including but not limited to, Google Analytics, etc.
        Such data collected will be used solely for the purpose of improving the user
        experience.
      </li>
      <li>
        We use local storage technologies, including Cookies, localStorage, etc. to enhance
        your experience.
      </li>
    </ul>
  </div>
);

export default Privacy;
