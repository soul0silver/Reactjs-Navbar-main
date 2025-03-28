import axiosInstance from "../auth/axiosInstance";
import { URL } from "../utils/UrlUtils";

export const searchKey = async (body) => {
  let res;
  try {
    res = await axiosInstance.post(URL.keys.list, body);
    return res
  } catch (err) {

    return err.response;
  }
}

export const updateKeys = async (body) => {
  let res;
  try {
    res = await axiosInstance.put(URL.keys.list, body);
    return res
  } catch (err) {

    return err.response;
  }
}

export const deleteKeys = async (body) => {
  let res;
  try {
    res = await axiosInstance.delete(URL.keys.list, {data: body});
    return res
  } catch (err) {

    return err.response;
  }
}

export const getDiscount = async()=>{
  let res;
  try {
    res = await axiosInstance.get(URL.keys.discount);
    return res
  } catch (err) {

    return err.response;
  }
} 