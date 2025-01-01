import { URL } from "../utils/UrlUtils";
import axiosInstance from "./axiosInstance"

export const login = async body => {
  let res;
  try {
    res = await axiosInstance.post(URL.auth.login, body);
    return res
  } catch (err) {

    return err.response;
  }
};

export const sigup = async (body) => {
  let res;
  try {
    res = await axiosInstance.post(URL.auth.register, body);
  }
  catch (err) {
    res=err
  }
  return res;
}

export const getUser = async ()  => {
  let res;
  try {
    res = await axiosInstance.get(URL.auth.userInfo);
    return res
  } catch (err) {

    return err.response;
  }
};