import React, { useState } from "react";
import "./Header.css";
import Login from "../modal/Login";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="header_container">
      <div className="header_logo_box">
        <img src={require("../../assets/LM_Logo4.png")} alt="" />
      </div>
      <div className="header_nav">
        <Nav />
      </div>
      <div className="header_user_box" onClick={handleModal}>
        <img src={require("../../assets/LM_user_icon.png")} alt="" />
      </div>
      {showModal && (
        <Login
          setShowModal={setShowModal}
          showModal={showModal}
          onHandleModal={handleModal}
        />
      )}
    </div>
  );
};

const Nav = () => {
  return (
    <ul className="header_nav_ul">
      <li>home</li>
      <li>cars</li>
      <li>about</li>
      <li>contact</li>
    </ul>
  );
};

export default Header;
