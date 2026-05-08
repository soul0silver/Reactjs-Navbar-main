import axiosInstance from "../auth/axiosInstance";
import { URL } from "../utils/UrlUtils";

const listAuthors = (page = 0, size = 10) => {
  return axiosInstance.get(URL.authors.base, { params: { page, size } });
};

const getAuthor = (id) => {
  return axiosInstance.get(`${URL.authors.base}/${id}`);
};

const createAuthor = (data) => {
  return axiosInstance.post(URL.authors.base, data);
};

const updateAuthor = (id, data) => {
  return axiosInstance.put(`${URL.authors.base}/${id}`, data);
};

const deleteAuthor = (id) => {
  return axiosInstance.delete(`${URL.authors.base}/${id}`);
};

export { listAuthors, getAuthor, createAuthor, updateAuthor, deleteAuthor };
