/* eslint-disable import/no-anonymous-default-export */
import {
    GET_CONTACT,
    GET_CONTACTS,

  } from '../types';
  
  const initialState = {
    contacts: [],
    selectedContact: null
  };
  
  const getContacts = (state, payload) => ({
    ...state,
    contacts: payload
  });
  
  const getContact = (state, payload) => ({
    ...state,
    selectedContact: payload
  });
  
  export default (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_CONTACTS:
        return getContacts(state, payload);
      case GET_CONTACT:
        return getContact(state, payload);
      default:
        return state;
    }
  };
  