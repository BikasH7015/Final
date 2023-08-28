import React from 'react';
import './TokenPage.css';

import logoImage from '../../assets/logo.png';
import privacyPolicyImage from '../../assets/privacy-policy.png';
import warningImage from '../../assets/warning.png'; 

function TokenPage() {
  return (
    <div className="token-page">
      <div className="logo-container">
        <img src={logoImage} alt="Project Logo" className="logo" />
      </div>
      <div className="box-container">
        <div className="rectangular-box">
          <h1>Online Assessment Test</h1>
          <div className="input-container">
            <input type="text" placeholder="Enter Your Token Number" className="token-input" />
            <button>Start Test</button>
          </div>
          <div className="warning-text-container">
            <img src={warningImage} alt="Warning" className="warning-image" />
            <p className="warning-text">
              <span className="small-text">Please enter the special token number given by the organization via your email OR mobile number</span>
            </p>
          </div>
        </div>
      </div>
      <div className="privacy-policy-container"> 
        <img src={privacyPolicyImage} alt="Privacy Policy" className="privacy-policy-image" />
        <p className="privacy-policy-text">
          &nbsp; &nbsp;Commencing the test implies your consent to Assessify 360's <span className="privacy-text">Privacy & Policy</span> and Terms of Use
        </p>
      </div>
    </div>
  );
}

export default TokenPage;
