import React from "react";
import "./Login.css";

const Login = ({ onHandleModal }) => {
  return (
    <div className="modal_login_container">
      <div className="modal_login_box">
        <div className="modal_close_icon" onClick={onHandleModal}>
          close
        </div>
        <div className="modal_login_error">
          Apologies, we're undergoing maintenance. Please check back in later,
          thank you.
        </div>
        <div className="modal_login_input_boxes">
          <label htmlFor="userID">Enter UserName</label>
          <input type="text" name="userID" id="userID" placeholder="username" />
          <label htmlFor="password">Enter Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="password"
          />
          <button>submit</button>
          <p>
            Forgot <span>username</span> / <span>password</span>?
          </p>
          <p>
            Don't have an <span>account</span>?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
