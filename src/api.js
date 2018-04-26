import axios from 'axios';

export const fetchUser = userId => {
  axios.get(`/api/users/${userId}`)
    .then(resp => resp.data);
};
