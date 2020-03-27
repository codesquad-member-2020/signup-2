import axios from "axios";
import { API, STATUS_CODE } from "../../constants/constants";
import regeneratorRuntime from "regenerator-runtime";

export const idExist = async id => {
  const response = await axios.get(API.LOOK_UP_USER(id));
  return response.status === STATUS_CODE.ID_NOT_EXIST;
};
