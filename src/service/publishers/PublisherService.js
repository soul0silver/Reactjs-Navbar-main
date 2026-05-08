import axiosInstance from "../auth/axiosInstance";
import { URL } from "../utils/UrlUtils";

const listPublishers = (page = 0, size = 10) => {
  return axiosInstance.get(URL.publishers.base, { params: { page, size } });
};

const getPublisher = (id) => {
  return axiosInstance.get(`${URL.publishers.base}/${id}`);
};

const createPublisher = (data) => {
  return axiosInstance.post(URL.publishers.base, data);
};

const updatePublisher = (id, data) => {
  return axiosInstance.put(`${URL.publishers.base}/${id}`, data);
};

const deletePublisher = (id) => {
  return axiosInstance.delete(`${URL.publishers.base}/${id}`);
};

export { listPublishers, getPublisher, createPublisher, updatePublisher, deletePublisher };
