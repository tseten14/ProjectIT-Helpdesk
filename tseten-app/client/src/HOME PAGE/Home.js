import React from "react";
import Header from "../Local Components/Header1.js";
import Description from "./Description1.js";
import Footer from "../Local Components/Footer1.js";
import Card from "./Card1.js";
import data1 from "./data1.js";
import ITSNavbar from "../Local Components/Navbar1.js";

export default function Home() {
  return (
    <div>
      <Header />
      <ITSNavbar />

      {/* Hero Section */}
      <section className="home-hero">
        <h1 className="fade-up">IT Helpdesk</h1>
        <p className="fade-up-delay-1">
          Your one-stop solution for technology support at Ramapo College
        </p>
      </section>

      {/* Feature Cards Grid */}
      <div className="features-grid">
        {data1.map((item, index) => (
          <div key={item.id} className={`fade-up-delay-${index % 4}`}>
            <Card
              title={item.title}
              description={item.description}
              icon={item.icon}
              titleUrl={item.titleLink}
            />
          </div>
        ))}
      </div>

      {/* Info Accordion */}
      <div className="info-section">
        <Description />
      </div>

      <Footer />
    </div>
  );
}
