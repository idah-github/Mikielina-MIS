import axios from 'axios';
import jwt_decode from 'jsonwebtoken';

const BASE_URL = 'http://localhost:3000';

export function isAuthenticated() {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }
  try {
    const decoded = jwt_decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      return false;
    }
    return true;
  } catch (err) {
    localStorage.removeItem('token');
    return false;
  }
}

export async function register(username, email, password) {
  try {
    const response = await axios.post(`${BASE_URL}/register`, { username, email, password });
    const { token } = response.data;
    localStorage.setItem('token', token);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function login(email, password) {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password});
    const { token } = response.data;
    localStorage.setItem('token', token);
    return true;
    } catch (err) {
    console.error(err);
    return false;
    }
}
