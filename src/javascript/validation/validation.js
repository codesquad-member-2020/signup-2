import {
  VALIDATION_MESSAGE,
  VALIDATION_REGULAR_EXPRESSION
} from "../../constants/constants";

const { ID, EMAIL, PASSWORD_CHECK } = VALIDATION_MESSAGE;

const composedPasswordTest = require("./passwordTest");
const composedMobilePhoneTest = require("./mobilePhoneTest");
const composedBirthdateTest = require("./birthdateTest");

export const passwordTest = password => {
  const [_, result, message] = composedPasswordTest(password);
  return [result, message];
};

export const passwordCheckTest = (password, targetPassword) => {
  if (password === targetPassword) {
    return [true, PASSWORD_CHECK.SAME_PASSWORD];
  }
  return [false, PASSWORD_CHECK.NOT_SAME_PASSWORD];
};

export const idTest = id => {
  const result = VALIDATION_REGULAR_EXPRESSION.ID_RULE.test(id);
  if (result) {
    return [true, ID.SAFE_ID];
  }
  return [false, ID.NOT_ALLOWED_ID];
};

export const emailTest = email => {
  const result = VALIDATION_REGULAR_EXPRESSION.EMAIL_RULE.test(email);
  if (result) {
    return [true, EMAIL.SAFE_EMAIL];
  }
  return [false, EMAIL.NOT_VALID_EMAIL];
};

export const mobilePhoneNumberTest = mobilePhoneNumber => {
  const [_, result, message] = composedMobilePhoneTest(mobilePhoneNumber);
  return [result, message];
};

export const birthdateTest = (year, month, day) => {
  const birthdateString = `${year}-${month}-${day}`;
  const [_, result, message] = composedBirthdateTest(birthdateString);
  return [result, message];
};
