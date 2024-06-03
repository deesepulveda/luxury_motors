import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_content_container">
        <div className="footer_operation_box">
          <p className="footer_operation_title">hours of operation</p>
          <div className="footer_operation_content_box">
            <ul>
              <li>mon - fri : 8-8 pm cst</li>
              <li>sat : 9-6 pm cst</li>
              <li>sun : closed</li>
            </ul>
          </div>
        </div>
        <div className="footer_information_box">
          <p className="footer_information_title">information</p>
          <div className="footer_information_content_box">
            <ul>
              <li>search</li>
              <li>shipping</li>
              <li>affiliates</li>
            </ul>
            <ul>
              <li>terms of use</li>
              <li>privacy policy</li>
              <li>contact us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <p>
          ©luxury Motors 2024. all rights reserved. Created by Dee Sepulveda
        </p>
      </div>
    </div>
  );
};

export default Footer;
