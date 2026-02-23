import React from "react";

function BCard(props) {
  return (
    <div className="staff-card">
      <img className="staff-card-img" src={props.link} alt={props.title} />
      <div className="staff-card-body">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <a
          className="staff-linkedin-btn"
          href={props.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 LinkedIn
        </a>
      </div>
    </div>
  );
}

export default BCard;