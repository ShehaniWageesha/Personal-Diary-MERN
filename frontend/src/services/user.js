import { CREATE_USER, } from './client/endpoints';
import { Axios } from './client/index';

export const addUsers = (user) => {
  return Axios.post(CREATE_USER,user);
};

