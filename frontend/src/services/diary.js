import { DIARY,CREATE_DIARY,DELETE_DIARY,GET_DIARY,UPDATE_DIARY } from './client/endpoints';
import { Axios } from './client/index';

export const getDiaries = () => {
  return Axios.get(DIARY);
};
export const deleteDiary = (id) => {
  return Axios.delete(`${DELETE_DIARY}/${id}`);
};
export const addDiaries = (diary) => {
  return Axios.post(CREATE_DIARY,diary);
};
export const getSingleDiary = (id) => {
  return Axios.get(`${GET_DIARY}/${id}`);
};
export const updateDiaries = (id,diary) => {
  return Axios.post(`${UPDATE_DIARY}/${id}`,diary);
};
