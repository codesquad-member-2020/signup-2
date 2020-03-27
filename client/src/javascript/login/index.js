import { SELECT_ELEMENT } from "../../util/selector";
import makeFormBody from "../../util/formBody";
import { API } from "../../constants/constants";
import regenerator from "regenerator-runtime";
import axios from "axios";

SELECT_ELEMENT("#login").addEventListener("submit", async e => {
  e.preventDefault();
  const data = {
    accountId: SELECT_ELEMENT("#id").value,
    password: SELECT_ELEMENT("#password").value
  };
  const formBody = makeFormBody(data);
  try {
    const result = await axios({
      method: "post",
      url: API.LOGIN,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      },
      withCredentials: true,
      data: formBody
    });
    window.location.href = "/info";
  } catch (error) {
    alert("로그인에 실패했습니다.");
  }
});
