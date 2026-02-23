import React from "react";
import Header from "../Local Components/Header1.js";
import ITSNavbar from "../Local Components/Navbar1.js";
import Footer from "../Local Components/Footer1.js";
import BCard from "./BCard.js";
import Samman from "../Images/Staff Images/Samman.jpeg";
import Ankit from "../Images/Staff Images/Ankit.jpeg";
import Bhagat from "../Images/Staff Images/Bhagat.jpeg";
import Caitlyn from "../Images/Staff Images/Caitlyn.jpeg";
import Prithivi from "../Images/Staff Images/Prithivi.jpeg";
import Sherpa from "../Images/Staff Images/Sherpa.jpeg";
import Chimpa from "../Images/Staff Images/Chimpa.jpeg";

export default function Staff() {
    return (
        <div className="staff-page">
            <Header />
            <ITSNavbar />

            <section className="staff-section">
                <h1 className="staff-section-title fade-up">ITS Student Staff</h1>
                <p className="staff-section-subtitle fade-up-delay-1">
                    Student Helpdesk Staff
                </p>
                <div className="staff-grid">
                    <BCard
                        link={Samman}
                        title="Samman Bhetwal"
                        text="Samman has started his career as a freshman and is one of the smartest people around campus with great communication and technical skills."
                        linkedin="https://www.linkedin.com/in/sammanbhetwal/"
                    />
                    <BCard
                        link={Ankit}
                        title="Ankit Kafle"
                        text="Ankit is a charming and funny person. He lightens up everyone's mood and works very hard to solve problems."
                        linkedin="https://www.linkedin.com/in/akafle1/"
                    />
                    <BCard
                        link={Chimpa}
                        title="Samip KC"
                        text="Samip is very smart, he does not talk much but no one can match his technical skills as an IT Tech or a software developer."
                        linkedin="https://www.linkedin.com/in/skc5/"
                    />
                    <BCard
                        link={Sherpa}
                        title="Tseten Sherpa"
                        text="Sherpa tends to be lazy, but still gets the work done. If there were 30 days to finish some work, he would finish it in the last week."
                        linkedin="https://www.linkedin.com/in/tseten-sherpa/"
                    />
                    <BCard
                        link={Bhagat}
                        title="Manav Bhagat"
                        text="Manav is a punctual guy, he always comes to work on time and respects work ethics very much. He also has a brilliant mind for solving tech issues."
                        linkedin="https://www.linkedin.com/in/mbhagat2001/"
                    />
                </div>
            </section>

            <section className="staff-section">
                <p className="staff-section-subtitle">Student Tech Staff</p>
                <div className="staff-grid">
                    <BCard
                        link={Prithivi}
                        title="Prithivi Rana"
                        text="Prithivi is very mature and works very hard. He takes care of all the hardware issues any student or staff has on campus."
                        linkedin="https://www.linkedin.com/in/prithivirn/"
                    />
                    <BCard
                        link={Caitlyn}
                        title="Caitlyn Sissili"
                        text="Caitlyn is very caring and friendly. She is an expert in solving hardware issues around campus and also enjoys coding."
                        linkedin="https://www.linkedin.com/in/caitlin-sisilli-/"
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
}