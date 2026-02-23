import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const isExternal = props.titleUrl && props.titleUrl.startsWith("http");

  const cardContent = (
    <div className="feature-card">
      <span className="feature-card-icon">{props.icon}</span>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );

  if (isExternal) {
    return (
      <a
        href={props.titleUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link to={props.titleUrl || "/"} style={{ textDecoration: "none" }}>
      {cardContent}
    </Link>
  );
}
