import axios from 'axios';




export const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || '';

//instance with basic settings
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const getHeaders = () => {
    let config = {};
    if (localStorage.getItem('token') === null) {
      return (config = {
        Accept: 'application/json',
      });
    } else {
      return (config = {
        Accept: 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      });
    }
  };

export const signup = data => {
  return api
    .post('/auth/users/', data, {
      headers: getHeaders(),
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return { error: error.response ? error.response.data : true };
    });
};
