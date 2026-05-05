import axiosInstance from "../auth/axiosInstance";
import { URL } from "../utils/UrlUtils";

const searchBook = (criteria) => {
  return axiosInstance.post(URL.books.search, criteria);
};

const getBook = (id) => {
  return axiosInstance.get(`${URL.books.base}/${id}`);
};

const createBook = (data) => {
  return axiosInstance.post(URL.books.base, data);
};

const updateBook = (id, data) => {
  return axiosInstance.put(`${URL.books.base}/${id}`, data);
};

const deleteBook = (id) => {
  return axiosInstance.delete(`${URL.books.base}/${id}`);
};

export { searchBook, getBook, createBook, updateBook, deleteBook };
