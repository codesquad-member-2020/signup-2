import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";

export const idExist = async id => {
  const response = await axios.get(
    `https://shrouded-tor-36901.herokuapp.com/api/users/signup-check?type=accountId&value=${id}`
  );
  return response.status === 204;
};
