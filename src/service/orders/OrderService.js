import axiosInstance from "../auth/axiosInstance";
import { URL } from "../utils/UrlUtils";

export const createOrder = async (body) => {
  let res;
  try {
    res = await axiosInstance.post(URL.order.create, body);
    return res
  } catch (err) {

    return err.response;
  }
}

export const recharge = async (body) => {
  let res;
  try {
    res = await axiosInstance.post(URL.order.recharge, body);
    return res
  } catch (err) {

    return err.response;
  }
}