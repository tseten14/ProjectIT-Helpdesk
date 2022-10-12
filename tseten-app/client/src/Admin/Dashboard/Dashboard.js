import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

import { isLoggedIn } from "../../utils";
import Header from "../../Local Components/Header1";
import ITSNavbar from "../../Local Components/Navbar1";
import Footer from "../../Local Components/Footer1";
import { getContacts, removeContact } from "../../store/actions/contact";
import {Table, Button} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Dashboard = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const { contacts, getContacts } = props;
  useEffect(() => {
    setIsAuthenticated(isLoggedIn());
  }, []);
  const successNotify = () =>{
    toast.success("Message Deleted Successfully");
  };
  useEffect(() => {
    if (!contacts.length){
        getContacts();
    } 
  }, [contacts, getContacts]);

  const deleteContact = async (_id) =>{
    const response = await removeContact(_id);
    if(response.status === 'success'){
        successNotify();
    }
    getContacts();
  }
  return (
    <>
      {!isAuthenticated && isAuthenticated != null && (
        <Navigate to="/" replace={true} />
      )}
      <Header />
      <ITSNavbar />
      <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {contacts.map((contact, index)=>(
                <tr>
                  <td>{index+1}</td>  
                  <td>{contact.firstName}  {contact.lastName}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  <td>
                    <Button type="submit" variant="danger" onClick={()=> { deleteContact(contact._id)}}>Delete Message</Button>
                  </td>
                </tr>
            ))}
        </tbody>
      </Table>
      <Footer />
      <ToastContainer />
    </>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contactState.contacts,
});

const mapDispatchToProps = { getContacts, removeContact };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
