// import React from "react";

// export default function Description(){
//     return (
//         <div className="Descrip">
//                <h1></h1>        
//                
//         </div>
//     )
// }

import Accordion from 'react-bootstrap/Accordion';

function Description() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>OVERVIEW</Accordion.Header>
        <Accordion.Body>
        <p>ITS HelpDesk provides technology support to Ramapo College student and Staff.If any assistance is needed for hardware software issues, we are here to help.</p>
              The Ramapo IT Help Desk, located in the 4th floor of The Learning Commons, has several ways that you can reach out to us for assistance. This should be the first point of contact for all IT Service requests, so that we can ensure that your issues are logged in the Web Help Desk system, assigned to a service tech, and promptly resolved. For this reason, we ask all help desk requests are assigned a Web Help Desk ticket.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>CONTACT US</Accordion.Header>
        <Accordion.Body>
         Phone: (201)-684-7777

        </Accordion.Body>
    
        <Accordion.Body>
        Email:  <a href="mailto:helpdesk@ramapo.edu">helpdesk@ramapo.edu</a>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>IT HELPDESK SENIOR TEAM</Accordion.Header>
        <Accordion.Body>
        <p className="TechLead">Tim Babasade</p>
        <p> Director, IT Helpdesk</p>
        <p className="TechLead">Connor Peyton</p>
        <p> Student-tech Supervisor, IT Helpdesk</p>
        <p className="TechLead">Michael Revello</p>
        <p> Tech Lead, IT Helpdesk</p>
        <p className="TechLead">Michael Gallof</p>
        <p> Tech Lead, IT Helpdesk</p>


        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>POLICIES AND PROCEDURES</Accordion.Header>
        <Accordion.Body>
        The RCNJ ITS Department regards this document as a work in progress. Because of this, these policies and procedures undergo regular reviews and modifications. Therefore, it is up to each individual employee or associate to remain current on the updated policies and procedures.

Changes in these policies and procedures after the initial agreement signature date does not allow non-compliance or permit the employee or associate to engage in activities contradictory to the modifications made after the initial agreement signature date.

To view the RCNJ ITS Policies and Procedures, please click <a href="https://www.ramapo.edu/its/files/2018/11/RCNJ-IT-HandBook_Updated_November_27.pdf">here</a>.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>ONLINE CHAT AND PHONE HOURS</Accordion.Header>
        <Accordion.Body>
        <strong>Monday though Thurday:</strong> 8am to 8pm
        <br/>
        <strong>Friday: </strong> 8am to 6pm
        <br/>
        <strong>Saturday through Sunday:</strong> Closed
        <br/>
        If you have a problem during off hours, please send us an email to helpdesk@ramapo.edu or send a voicemail to our number. Your call will be returned the next day starting at 8am unless you specify a time.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Description;