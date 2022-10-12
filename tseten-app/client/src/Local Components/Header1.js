import React from "react";
import Logo from "../Images/ITS Images/RCNJLogo.png"

export default function Header() {
  return (
    <nav className="Header">
      <small>
        <img
          className="RCNJlogo"
          src= {Logo}
          alt="RCNJ Logo"
        />
        <strong className="Title">RAMAPO COLLEGE OF NEW JERSEY</strong>
      </small>
    </nav>
  );
}
