import axiosInstance from "../auth/axiosInstance";
import { URL } from "../utils/UrlUtils";

export const searchProduct = async () => {
  let res;
  try {
    res = await axiosInstance.post(URL.product.list, null);
    return res
  } catch (err) {

    return err.response;
  }
}