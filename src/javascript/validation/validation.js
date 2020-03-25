const {
  VALIDATION_MESSAGE: { ID, EMAIL, PASSWORD_CHECK },
  VALIDATION_REGULAR_EXPRESSION
} = require("../../constants/constants");

const composedPasswordTest = require("./passwordTest");
const composedMobilePhoneTest = require("./mobilePhoneTest");
const composedBirthdateTest = require("./birthdateTest");

const passwordTest = password => {
  const [_, result, message] = composedPasswordTest(password);
  return [result, message];
};

const passwordCheckTest = (password, targetPassword) => {
  if (password === targetPassword) {
    return [true, PASSWORD_CHECK.SAME_PASSWORD];
  }
  return [false, PASSWORD_CHECK.NOT_SAME_PASSWORD];
};

const idTest = id => {
  const result = VALIDATION_REGULAR_EXPRESSION.ID_RULE.test(id);
  if (result) {
    return [true, ID.SAFE_ID];
  }
  return [false, ID.NOT_ALLOWED_ID];
};

const emailTest = email => {
  const result = VALIDATION_REGULAR_EXPRESSION.EMAIL_RULE.test(email);
  if (result) {
    return [true, EMAIL.SAFE_EMAIL];
  }
  return [false, EMAIL.NOT_VALID_EMAIL];
};

const mobilePhoneNumberTest = mobilePhoneNumber => {
  const [_, result, message] = composedMobilePhoneTest(mobilePhoneNumber);
  return [result, message];
};

const birthdateTest = (year, month, day) => {
  const birthdateString = `${year}-${month}-${day}`;
  const [_, result, message] = composedBirthdateTest(birthdateString);
  return [result, message];
};

module.exports = {
  passwordTest,
  passwordCheckTest,
  idTest,
  emailTest,
  mobilePhoneNumberTest,
  birthdateTest
};
