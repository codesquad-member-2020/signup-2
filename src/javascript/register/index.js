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
  withTestAndSelectors
} from "./enhanceTest";

const idInputWithTest = withTest(idTest);
const emailInputWithTest = withTest(emailTest);
const mobilePhoneNumberInputWithTest = withTest(mobilePhoneNumberTest);
const passwordInputWithTest = withTest(passwordTest);
const passwordCheckInputWithTest = withTestAndSelector(passwordCheckTest)(
  "#password"
);
const birthdateCheckInputWithTest = withTestAndSelectors(birthdateTest)(
  "birthdate"
)("#year", "#month", "#day");

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
SELECT_ELEMENT("#year").addEventListener("change", birthdateCheckInputWithTest);
SELECT_ELEMENT("#month").addEventListener(
  "change",
  birthdateCheckInputWithTest
);
SELECT_ELEMENT("#day").addEventListener("change", birthdateCheckInputWithTest);
