import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../types';
import { setUser, removeUser } from '../../utils';



// Login user
export const login = (email, password) => async dispatch => {
  try {
    const url = '/login';
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const responseData = await response.json();
    if (response.ok) {
      const { user } = responseData;
      user && setUser(user);
      dispatch({ type: LOGIN_SUCCESS, payload: responseData });
    }
    if (responseData.error) {
      dispatch({ type: LOGIN_FAIL, payload: responseData.error.message});
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload:error.message });
  }
};



// Logout
export const logout = () => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/users/logout';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    const responseData = await response.json();
    if (response.ok) {
      removeUser();
      dispatch({ type: LOGOUT });
      dispatch('LOGOUT Success', 'success', 5000);
    }
    if (responseData.error) {
      dispatch(responseData.error.message, 'error', 5000);
    }
  } catch (error) {
    dispatch(error.message, 'error', 5000);
  }
};
