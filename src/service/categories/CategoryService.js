import axiosInstance from "../auth/axiosInstance";
import { URL } from "../utils/UrlUtils";

const listCategories = (page = 0, size = 10) => {
  return axiosInstance.get(URL.categories.base, { params: { page, size } });
};

const getCategory = (id) => {
  return axiosInstance.get(`${URL.categories.base}/${id}`);
};

const createCategory = (data) => {
  return axiosInstance.post(URL.categories.base, data);
};

const updateCategory = (id, data) => {
  return axiosInstance.put(`${URL.categories.base}/${id}`, data);
};

const deleteCategory = (id) => {
  return axiosInstance.delete(`${URL.categories.base}/${id}`);
};

export { listCategories, getCategory, createCategory, updateCategory, deleteCategory };
