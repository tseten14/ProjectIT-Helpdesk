import React from "react";
import Button1 from "./Button1";

export default function Card(props) {
  return (
    /*This is the full component */
    <div className="FullCard">
      {/* This is the Image Component */}

      <div className="CardLeft">
        <img className="photo" src={props.imageUrl} alt="" />
      </div>

      {/* This is the Right Side Component */}
      <div className="CardRight">
      
        <Button1 Title={props.title} Link={props.titleUrl}/>
        <p className="CardDescrip">{props.description}</p>
      </div>
     
    </div>
  );
}
