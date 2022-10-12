import { GET_CONTACTS, GET_CONTACT } from '../types';


export const getContacts = () => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/contact';
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`, 
        'Content-Type': 'application/json' 
      }
    });
    const Contacts = await response.json();
    if (response.ok) {
      dispatch({ type: GET_CONTACTS, payload: Contacts });
    }
  } catch (error) {
    dispatch(error.message, 'error', 5000);
  }
};

export const getContact = id => async dispatch => {
  try {
    const url = '/contacts/' + id;
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const Contact = await response.json();
    if (response.ok) {
      dispatch({ type: GET_CONTACT, payload: Contact });
    }
  } catch (error) {
    dispatch(error.message, 'error', 5000);
  }
};

export const createContact = async (newContact)  => {
  try {
    const url = '/contacts';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newContact)
    });
    if (response.ok) {
      return { status: 'success', message: 'Message Sent Successfully' };
    }
  } catch (error) {
    return {
      status: 'error',
      message: ' Contact have not been saved, try again.'
    };
  }
};


export const removeContact = async id  => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/contact/' + id;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      return { status: 'success', message: 'Contact Removed' };
    }
  } catch (error) {
    return {
      status: 'error',
      message: ' Contact have not been deleted, try again.'
    };
  }
};

