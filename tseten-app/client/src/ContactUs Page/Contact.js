import React from "react";
import GridB from "./FormB";
import Header from "../Local Components/Header1.js";
import ITSNavbar from "../Local Components/Navbar1.js";
import Footer from "../Local Components/Footer1.js";


export default function Contact(){

    return(
        <div>
                <Header/>
                <ITSNavbar/>
                <h1 className="FormDesign">Please fill out the form to report any issues/questions about the web application.</h1>
                <GridB/>
                <Footer/>
        </div>
    )

}
