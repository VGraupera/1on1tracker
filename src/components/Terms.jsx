import React from 'react';
import Divider from 'material-ui/Divider';

import { brightGreen } from '../colors';

const style = {
  background: {
  },
  title: {
    color: brightGreen,
  }
};

const Terms = () => (
  <div className="container terms">
    <h1 style={style.title}>Terms and Conditions</h1>
    <p>Last updated: October 14, 2017</p>

    <Divider />
    <ol>
      <li>
        <p>
          Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the
          https://www.1on1tracker.com website (the "Service") operated by 1on1tracker ("us", "we", or "our").
        </p>
        <p>
          By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions,
          all applicable laws and regulations, and agree that you are responsible for compliance with
          any applicable local laws. If you do not agree with any of these Terms, you are prohibited
          from using or accessing this web site. The materials contained in this web site are protected
          by applicable copyright and trade mark law.
        </p>
        <p>
          You agree to use the Service at your own risk.
        </p>
      </li>
      <li>
        <h3>Accounts</h3>
        <p>When you create an account with us, you must provide us information that is
          accurate, complete, and current at all times. Failure to do so constitutes a
          breach of the Terms, which may result in immediate termination of your account
          on our Service.</p>

        <p>You are responsible for safeguarding the password that you use to access the
          Service and for any activities or actions under your password, whether your
          password is with our Service or a third-party service.</p>

        <p>You agree not to disclose your password to any third party. You must notify us
          immediately upon becoming aware of any breach of security or unauthorized use
          of your account.</p>
      </li>
      <li>
        <h3>Disclaimer of Warranties</h3>
        <p>
          YOU UNDERSTAND AND AGREE THAT THE SERVICE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS AND
          THAT 1ON1TRACKER EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED,
          INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE AND NON-INFRINGEMENT.
        </p>
        <p>
          1ON1TRACKER DOES NOT WARRANT THAT (I) THE SERVICE WILL MEET YOUR SPECIFIC REQUIREMENTS,
          (II) THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE,
          (III) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR RELIABLE,
          (IV) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR
          OBTAINED BY YOU THROUGH THE SERVICE WILL MEET YOUR EXPECTATIONS, AND
          (V) ANY ERRORS IN THE SERVICE WILL BE CORRECTED.
        </p>
      </li>
      <li>
        <h3>Limitations</h3>
        <p>
          YOU EXPRESSLY UNDERSTAND AND AGREE THAT 1ON1TRACKER SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES
          FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF VDG GROUP HAS BEEN
          ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM: (I) THE USE OR THE INABILITY TO USE
          THE SERVICE; (II) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY
          GOODS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS
          ENTERED INTO THROUGH OR FROM THE SERVICE; (III) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR
          TRANSMISSIONS OR DATA; (IV) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SERVICE;
          (V) OR ANY OTHER MATTER RELATING TO THE SERVICE. IN NO EVENT WILL 1ON1TRACKER’S TOTAL CUMULATIVE
          DAMAGES EXCEED US$ 100.
        </p>
      </li>
      <li>
        <h3>Termination</h3>
        <p>We may terminate or suspend access to our Service immediately, without prior
          notice or liability, for any reason whatsoever, including without limitation
          if you breach the Terms.</p>
        <p>All provisions of the Terms which by their nature should survive termination
          shall survive termination, including, without limitation, ownership
          provisions, warranty disclaimers, indemnity and limitations of liability.</p>
        <p>We may terminate or suspend your account immediately, without prior notice or
          liability, for any reason whatsoever, including without limitation if you
          breach the Terms.</p>
        <p>Upon termination, your right to use the Service will immediately cease. If you
          wish to terminate your account, you may simply discontinue using the Service.</p>
        <p>All provisions of the Terms which by their nature should survive termination
          shall survive termination, including, without limitation, ownership
          provisions, warranty disclaimers, indemnity and limitations of liability.</p>
      </li>
      <li>
        <h3>Security</h3>
        <p>
          We care about the integrity and security of your personal information. However, we cannot
          guarantee that unauthorized third parties will never be able to defeat our security measures or
          use your personal information for improper purposes. You acknowledge that you provide your
          personal information at your own risk.
        </p>
      </li>
      <li>
        <h3>Terms of Service Modifications</h3>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
        </p>
        <p>
          By continuing to access or use our Service after any revisions become effective,
          you agree to be bound by the revised terms. If you do not agree to the new terms,
          you are no longer authorized to use the Service.
        </p>
      </li>
      <li>
        <h3>Governing Law</h3>
        <p>
          These Terms shall be governed and construed in accordance with the laws of California,
          United States, without regard to its conflict of law provisions.
        </p>
      </li>
    </ol>
  </div>
);

export default Terms;
