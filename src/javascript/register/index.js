import {
  idTest,
  passwordTest,
  passwordCheckTest,
  emailTest,
  mobilePhoneNumberTest
} from "../validation/validation";
import { SELECT_ELEMENT, SELECT_ELEMENT_ALL } from "../../util/selector";

const caseOfPassword = (result, classList) => {
  classList.contains("hide") && classList.remove("hide");
  if (result) {
    classList.contains("warning") && classList.remove("warning");
    classList.add("safe");
    return;
  }
  classList.contains("safe") && classList.remove("safe");
  classList.add("warning");
};

function withTest(test) {
  return function(event) {
    const { target } = event;
    const [result, message] = test(target.value);
    const warningMessageElement = SELECT_ELEMENT(
      `#${target.id}-warning-message`
    );
    warningMessageElement.innerHTML = message;

    if (target.id === "password") {
      caseOfPassword(result, warningMessageElement.classList);
      return;
    }

    if (!result && warningMessageElement.classList.contains("hide")) {
      warningMessageElement.classList.remove("hide");
      return;
    }

    if (result && !warningMessageElement.classList.contains("hide")) {
      warningMessageElement.classList.add("hide");
    }
  };
}

function withTestForTwoElement(selector) {
  return function(test) {
    return function(event) {
      const { target } = event;
      const password = SELECT_ELEMENT(`#${selector}`).value;
      const [result, message] = test(target.value, password);

      const warningMessageElement = SELECT_ELEMENT(
        `#${target.id}-warning-message`
      );
      warningMessageElement.innerHTML = message;

      if (!result && warningMessageElement.classList.contains("hide")) {
        warningMessageElement.classList.remove("hide");
        return;
      }

      if (result && !warningMessageElement.classList.contains("hide")) {
        warningMessageElement.classList.add("hide");
      }
    };
  };
}

const idInputWithTest = withTest(idTest);
const emailInputWithTest = withTest(emailTest);
const mobilePhoneNumberInputWithTest = withTest(mobilePhoneNumberTest);
const passwordInputWithTest = withTest(passwordTest);
const passwordCheckInputWithTest = withTestForTwoElement("password")(
  passwordCheckTest
);

SELECT_ELEMENT("#id").addEventListener("input", idInputWithTest);
SELECT_ELEMENT("#email").addEventListener("input", emailInputWithTest);
SELECT_ELEMENT("#mobile-phone-number").addEventListener(
  "input",
  mobilePhoneNumberInputWithTest
);
SELECT_ELEMENT("#password").addEventListener("input", passwordInputWithTest);
SELECT_ELEMENT("#password-check").addEventListener(
  "input",
  passwordCheckInputWithTest
);
