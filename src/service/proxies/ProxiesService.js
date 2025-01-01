import axiosInstance from "../auth/axiosInstance";
import { URL } from "../utils/UrlUtils";

export const randProxy = async (body) => {
  let res;
  try {
    res = await axiosInstance.post(URL.proxy.list, body);
    return res
  } catch (err) {

    return err.response;
  }
}