import { SELECT_ELEMENT, SELECT_ELEMENT_ALL } from "../../util/selector";
import axios from "axios";
import compose from "../../util/compose";
import { API } from "../../constants/constants";
import makeFormBody from "../../util/formBody";

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
      url: API.REGISTER_USER,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      },
      data: formBody
    });
    window.location.href = "/login.html";
  } catch (error) {
    alert("회원 가입에 실패했습니다.");
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
