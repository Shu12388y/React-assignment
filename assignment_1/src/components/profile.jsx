/* eslint-disable no-unused-vars */
import React from "react";
import "./profile.css";

function profile() {
    let name ="samm";
  return (
    <>
    <h1 className="header">
        Profile component
    </h1>
      <div className="profile__container">
        <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
        <div className="profile__data">
          <h1 className="header">Hi {name} here,</h1>
        </div>
      </div>
    </>
  );
}

export default profile;
