import axios from 'axios';
import { API_HOST_URL } from '../shared/appConstant';

export const callApi = (path, method, data) =>
  axios({
    method: method,
    url: `${API_HOST_URL}${path}`,
    data,
  });
