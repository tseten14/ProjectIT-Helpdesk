import React from "react";
import Header from "../Local Components/Header1.js";
import Description from "./Description1.js";
import Footer from "../Local Components/Footer1.js";
import Card from "./Card1.js";
import data1 from "./data1.js";
import ITSNavbar from "../Local Components/Navbar1.js";

export default function Home() {
  const CardElement = data1.map((data1) => {
    return (
      <div>
        <Card
          key={data1.id}
          title={data1.title}
          description={data1.description}
          imageUrl={data1.imageUrl}
          titleUrl={data1.titleLink}
        />

      </div>
    );
  });
  return (
    <div>
      <Header />
      <ITSNavbar />
      <p className="Heading">IT Helpdesk Features</p>
      <div className="Helpdesk"> {CardElement}</div>
      <Description/>
      <Footer />
    </div>
  );
}
