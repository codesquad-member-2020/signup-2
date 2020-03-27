import { SELECT_ELEMENT } from "../../util/selector";
import regenerator from "regenerator-runtime";
import axios from "axios";

const makeFormBody = data => {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return formBody;
};

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
      url: "https://shrouded-tor-36901.herokuapp.com/api/auth/login",
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      },
      data: formBody
    });

    if (result.status === 202) {
      window.location.href = "http://127.0.0.1:5500/client/src/page/info.html";
    }
  } catch (error) {
    alert("로그인에 실패했습니다.");
  }
});
