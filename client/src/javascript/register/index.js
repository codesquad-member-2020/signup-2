import {
  idTest,
  passwordTest,
  passwordCheckTest,
  emailTest,
  mobilePhoneNumberTest,
  birthdateTest
} from "../validation/validation";
import { SELECT_ELEMENT } from "../../util/selector";
import {
  withTest,
  withTestAndSelector,
  withTestAndSelectors,
  idExistInServer
} from "./enhancer";
import {
  hideModal,
  popUpModal,
  handleScrollEnd,
  checkAgreementCheckBox
} from "./modalCallback";
import composedCheckRequirements from "./requestRegister";
import { CSS_ID_CLASS } from "../../constants/constants";
import { handleKeyUp, handleClick } from "./interests";
import handleReset from "./reset";

const { REGISTER } = CSS_ID_CLASS;

const idInputWithTest = withTest(idTest);
const emailInputWithTest = withTest(emailTest);
const mobilePhoneNumberInputWithTest = withTest(mobilePhoneNumberTest);
const passwordInputWithTest = withTest(passwordTest);
const passwordCheckInputWithTest = withTestAndSelector(passwordCheckTest)(
  `#${REGISTER.PASSWORD}`
);
const birthdateCheckInputWithTest = withTestAndSelectors(birthdateTest)(
  REGISTER.BIRTHDATE
)(`#${REGISTER.YEAR}`, `#${REGISTER.MONTH}`, `#${REGISTER.DAY}`);

SELECT_ELEMENT(`#${REGISTER.ID}`).addEventListener("input", idInputWithTest);
SELECT_ELEMENT(`#${REGISTER.ID}`).addEventListener("change", idExistInServer);
SELECT_ELEMENT(`#${REGISTER.EMAIL}`).addEventListener(
  "input",
  emailInputWithTest
);
SELECT_ELEMENT(`#${REGISTER.MOBILE_PHONE_NUMBER}`).addEventListener(
  "input",
  mobilePhoneNumberInputWithTest
);
SELECT_ELEMENT(`#${REGISTER.PASSWORD}`).addEventListener(
  "input",
  passwordInputWithTest
);
SELECT_ELEMENT(`#${REGISTER.PASSWORD_CHECK}`).addEventListener(
  "input",
  passwordCheckInputWithTest
);
SELECT_ELEMENT(`#${REGISTER.YEAR}`).addEventListener(
  "change",
  birthdateCheckInputWithTest
);
SELECT_ELEMENT(`#${REGISTER.MONTH}`).addEventListener(
  "change",
  birthdateCheckInputWithTest
);
SELECT_ELEMENT(`#${REGISTER.DAY}`).addEventListener(
  "change",
  birthdateCheckInputWithTest
);

SELECT_ELEMENT(`#${REGISTER.AGREEMENT}`).addEventListener("click", popUpModal);

SELECT_ELEMENT(`.${REGISTER.MODAL_CLOSE}`).addEventListener("click", hideModal);

SELECT_ELEMENT(`#${REGISTER.PRIVACY_AGREEMENT}`).addEventListener(
  "scroll",
  handleScrollEnd
);

SELECT_ELEMENT(`#${REGISTER.MODAL_BUTTON}`).addEventListener(
  "click",
  checkAgreementCheckBox
);

SELECT_ELEMENT(`#reset-button`).addEventListener("click", handleReset);
SELECT_ELEMENT(`form`).addEventListener("submit", composedCheckRequirements);
SELECT_ELEMENT(".tag-container input").addEventListener("keyup", handleKeyUp);
document.addEventListener("click", handleClick);
