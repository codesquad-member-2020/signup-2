import { SELECT_ELEMENT, SELECT_ELEMENT_ALL } from "../../util/selector";
import axios from "axios";
import compose from "../../util/compose";

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

const hasFulfilledRequirements = e => {
  e.preventDefault();
  return ![...SELECT_ELEMENT_ALL(".status-text")]
    .map(element => {
      if (element.id === "password-warning-message") {
        return element.classList.contains("safe");
      }
      return element.classList.contains("hide");
    })
    .some(isFulfilled => isFulfilled === false);
};

const hasCheckedAgreement = previousResult => {
  if (!previousResult) {
    return previousResult;
  }
  return SELECT_ELEMENT("#agreement-checkbox").checked === true;
};

const hasWrittenName = previousResult => {
  if (!previousResult) {
    return previousResult;
  }
  return SELECT_ELEMENT("#name").value !== "";
};

const hasSelectedSex = previousResult => {
  if (!previousResult) {
    return previousResult;
  }
  return SELECT_ELEMENT("#sex").value !== "";
};

const registerUser = async previousResult => {
  if (!previousResult) {
    alert("확인해주세요!");
    return;
  }
  const data = {
    accountId: SELECT_ELEMENT("#id").value,
    password: SELECT_ELEMENT("#password").value,
    name: SELECT_ELEMENT("#name").value,
    birthday: `${SELECT_ELEMENT("#year").value}-${
      SELECT_ELEMENT("#month").value
    }-${SELECT_ELEMENT("#day").value}`,
    isMale: SELECT_ELEMENT("#sex").value === "male",
    email: SELECT_ELEMENT("#email").value,
    phoneNumber: SELECT_ELEMENT("#mobile-phone-number").value
  };
  const formBody = makeFormBody(data);
  try {
    const result = await axios({
      method: "post",
      url: "https://shrouded-tor-36901.herokuapp.com/api/users",
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      },
      data: formBody
    });
    if (result.status === 201) {
      window.location.href = "http://127.0.0.1:5500/client/src/page/login.html";
    } else {
      alert("실패했습니다.");
    }
  } catch (error) {
    console.error(error);
  }
};

const composedCheckRequirements = compose(
  hasFulfilledRequirements,
  hasCheckedAgreement,
  hasWrittenName,
  hasSelectedSex,
  registerUser
);

export default composedCheckRequirements;
