import { callApi } from './apiHelper';

const login = ({ email: username, password }) =>
  callApi('/auth', 'POST', {
    type: 'normal',
    username,
    password,
  });

export default login;
