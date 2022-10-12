import React from "react";
import Header from "../Local Components/Header1.js";
import ITSNavbar from "../Local Components/Navbar1.js";
import Footer from "../Local Components/Footer1.js";
import SherpaProfile from "./SherpaProfile.js";

export default function About(){

    return(
        <div>
            <Header/>
            <ITSNavbar/>
            <h1 className="StaffP">About Developer</h1>
            <SherpaProfile/>
            <Footer/>
        </div>
    )
}